#!/bin/bash

if test $# -lt 2 ; then
  echo usage: "${0##/*} [Source dir name] [Target dir name]"
  exit
fi

output=$2

rm -rf $output
mkdir $output

for filepath in $(find $1 -type f -not -path "*/.svn*" -name "*.xml*") ;
do
  file=${filepath#*/}
  filename=${file%.*}
  ext=${file#*.}

  echo
  echo Processing $file
  xsltproc -o $output/$filename.html $filepath
  
  # Changed links to .html
  sed -i '' 's/\.\/\([^>]*\)\.xml/\1.html/g' $output/$filename.html
  echo "Changed links to .html"
  
done

