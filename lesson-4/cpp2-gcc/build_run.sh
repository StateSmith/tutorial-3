#!/bin/bash
cd "$(dirname "$0")" # change to current script directory

# exit when any command fails
set -e

# compile code
echo Compiling with GCC g++
g++ -g -Wall -std=c++98 *.cpp
# you can also use a newer c++ standard

# run the program
./a.out