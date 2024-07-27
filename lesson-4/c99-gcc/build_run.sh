#!/bin/bash
cd "$(dirname "$0")" # change to current script directory

# exit when any command fails
set -e

# compile code
echo Compiling with GCC
gcc -g -Wall -std=c99 *.c

# run the program
./a.out