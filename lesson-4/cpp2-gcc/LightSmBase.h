#pragma once
#include <iostream>

class LightSmBase
{
    // Tip: you may want a virtual destructor here
    // https://stackoverflow.com/questions/461203/when-to-use-virtual-destructors

protected:
    void blue(void)
    {
        std::cout << "Light is blue\n";
    }

    void yellow(void)
    {
        std::cout << "Light is yellow\n";
    }

    void red(void)
    {
        std::cout << "Light is red\n";
    }
};
