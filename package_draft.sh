rm -rf output_tidy
rm -rf rendered_tidy
rm -rf rendered_orig

./tidy.sh draft output_tidy
./render.sh output_tidy rendered_tidy
./render.sh draft rendered_orig
./compare.sh rendered_orig rendered_tidy

