#pragma once
#include <iostream>
#include <stdint.h> // for count var

class LightSmBase
{
    // Tip: you may want a virtual destructor here
    // https://stackoverflow.com/questions/461203/when-to-use-virtual-destructors

protected:
    uint16_t count;

    void blue(void)
    {
        std::cout << BLUE << "Light is blue\n" << RESET;
    }

    void yellow(void)
    {
        std::cout << YELLOW << "Light is yellow\n" << RESET;
    }

    void red(void)
    {
        std::cout << RED << "Light is red\n" << RESET;
    }

private:
    // ANSI escape codes for colors
    const std::string RESET = "\033[0m";
    const std::string RED = "\033[0;31m";
    const std::string YELLOW = "\033[0;33m";
    const std::string BLUE = "\033[0;34m";
};
