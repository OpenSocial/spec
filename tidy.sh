#!/bin/bash
if test $# -lt 2 ; then
  echo usage: "${0##/*} [Source dir name] [Target dir name]"
  exit
fi

output=$2

rm -rf $output
mkdir $output

for filepath in $(find $1 -type f -not -path "*/.svn*" -not -name "*tidy*" -name "*.xml");
do
  file=${filepath#*/}
  filename=${file%.*}
  ext=${file#*.}
  echo
  echo "Working on $filename.$ext"

  # Add tags so tidy won't wrap the <artwork> fields.
  cp $filepath $output/$filename.temp
  sed -i '' 's/<artwork\([^>]*\)>/<artwork\1><?php SPEC/g' $output/$filename.temp
  sed -i '' 's/<\/artwork>/SPEC \?><\/artwork>/g' $output/$filename.temp
  
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
       --wrap-php no \
       --char-encoding utf8 \
       --literal-attributes yes \
       --quiet yes \
       $output/$filename.temp > $output/$filename.temp.tidy
  echo "Tidy exited with status $?"

  # Remove the added tags.
  awk '{gsub(/<\?php SPEC/, ""); gsub(/SPEC \?>/, "")}/./' $output/$filename.temp.tidy > $output/$filename.$ext
  
  # Add a space after <xref ... /> or <eref ... /> unless it is followed by ., or )
  sed -i '' 's/\(<[ex]ref[^>]*\/>\)\([^.),]\)/\1 \2/g' $output/$filename.$ext

  # Add a space after </xref> or </eref> unless it is followed by ., or )
  sed -i '' 's/\(<\/[ex]ref>\)\([^.),]\)/\1 \2/g' $output/$filename.$ext

  echo "Rewrote <eref> and <xref> tags"
  
  # Clean up
  #rm $output/$filename.temp $output/$filename.temp.tidy
done

cp $1/rfc2629.xslt $output

