#include "Light.h"
#include <stdio.h>

// ANSI escape codes for colors
#define RESET   "\033[0m"
#define BLUE    "\033[0;34m"
#define YELLOW  "\033[0;33m"
#define RED     "\033[0;31m"

void Light_blue(void)
{
    printf(BLUE "Light is blue\n" RESET);
}

void Light_yellow(void)
{
    printf(YELLOW "Light is yellow\n" RESET);
}

void Light_red(void)
{
    printf(RED "Light is red\n" RESET);
}
