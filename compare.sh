if test $# -lt 2 ; then
  echo usage: "${0##/*} [First dir name] [Second dir name]"
  exit
fi

output=compare.txt
echo "Compare results" > $output
echo "===============" >> $output

for filepath in $(find $1 -type f -not -path "*/.svn*") ;
do
  file=${filepath#*/}

  tidy --quiet yes \
       $filepath > first.html

  tidy --quiet yes \
       $2/$file > second.html

  echo >> $output
  echo "$filepath >> $2/$file"  >> $output
  echo "==============================================================" >> $output
  diff first.html second.html  >> $output
done

rm first.html second.html 
