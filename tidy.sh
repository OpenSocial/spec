#!/bin/bash

if test $# -eq 0 ; then
  echo usage: "${0##/*} [Dir name]"
  exit
fi

for file in $(find $1 -type f -not -path "*/.svn*" -not -name "*tidy*" -name "*.xml") ; 
do
  filename=${file%.*}
  ext=${file#*.}
  echo 
  echo "Working on $filename.$ext"
  
  # Add ASP tags so tidy won't wrap the <artwork> fields.
  awk '{gsub(/<artwork>/, "<artwork><%"); gsub(/<\/artwork>/, "%></artwork>"); print}' $file > $filename.temp
  
  # Run tidy
  tidy --input-xml yes \
       --wrap 80 \
       --add-xml-space yes \
       --new-blocklevel-tags t \
       --new-pre-tags artwork \
       --indent yes \
       --indent-spaces 1 \
       --indent-attributes yes \
       --tab-size 1 \
       --wrap-asp no \
       --char-encoding utf8 \
       --literal-attributes yes \
       --quiet yes \
       $filename.temp > $filename.temp.tidy
  echo "Tidy exited with status $?"
        
  # Remove the added ASP tags.
  awk '{gsub(/^[ ]*<%/, ""); gsub(/^[ ]*%>/, "")}/./' $filename.temp.tidy > $filename.tidy.$ext

  # Add a space after <xref ... /> unless it is followed by . or )
  sed -i '' 's/\(<xref[^>]*\/>\)\([^.)]\)/\1 \2/g' $filename.tidy.$ext

  # Add a space after <xref ... >...</xref> unless it is followed by . or )
  sed -i '' 's/\(<xref.*<\/xref>\)\([^.)]\)/\1 \2/g' $filename.tidy.$ext

  echo "Rewrote <xref> tags"
  
  # Clean up
  rm $filename.temp $filename.temp.tidy
done

