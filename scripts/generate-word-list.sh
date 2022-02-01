#!/bin/bash

pullfile () {
  infile=$1
  mkdir -p ./sources
  outfile="./sources/$infile.lexc"
  LEXC='https://raw.githubusercontent.com/giellalt/lang-crk/main/src/fst/stems/'$infile'.lexc'
  if [ ! -f ./$outfile ]; then
    echo "Pulling $infile"
    curl -s $LEXC > $outfile
  fi
}

process_standard() {
  infile=$1
  file=./sources/$infile.lexc
  cat $file \
    | grep -v ^! \
    | grep -v ^LEX \
    | grep -v ^DER \
    | cut -d':' -f1 \
    | sed -e 's/@P.dim.DIM@//' \
    | sed -e 's/@P.number.PL@//' \
    | grep -v ^$ \
    | grep -v '							' \
    | cut -d' ' -f1
}

process_plus() {
  infile=$1
  file=./sources/$infile.lexc
  cat $file \
   | cut -d':' -f1 \
   | grep -v ^! \
   | cut -d'+' -f1 \
   | grep -v Non- \
   | grep -v Ortho \
   | grep -v LEX \
   | grep -v Personal \
   | grep -v Interrog \
   | grep -v Indef \
   | grep -v Demons \
   | grep -v '(diff' \
   | grep -v '%' \
   | grep -v ^$ \
   | sed -e 's/ý/y/'
}

process_num() {
  infile=$1
  file=./sources/$infile.lexc
  cat $file \
   | grep NUM \
   | grep -v ^LEX \
   | grep -v ^NUM \
   | grep -v ^ISO \
   | grep -v ^tanaw \
   | grep -v % \
   | cut -d' ' -f1 \
   | grep -v ^! \
   | grep -v ^$
}

process_space() {
  infile=$1
  file=./sources/$infile.lexc
  cat $file \
   | cut -d' ' -f1 \
   | grep -v % \
   | grep -v ^LEX \
   | sed -e "s/'//" \
   | grep -v ^%
}

main() {
  # Pull all the sources
  pullfile verb_stems
  pullfile noun_stems
  pullfile pronouns
  pullfile particles
  pullfile numerals
  pullfile non_standard

  # scrub out all the words
  process_standard verb_stems > ./sources/allwords
  process_standard noun_stems >> ./sources/allwords
  process_plus non_standard >> ./sources/allwords
  process_plus pronouns >> ./sources/allwords
  process_num numerals >> ./sources/allwords
  process_space particles >> ./sources/allwords

  # find the 5-letter words, randomize
  cat ./sources/allwords | grep -v '-' | grep '^.....$' | sort | uniq | sort -R

}

main
