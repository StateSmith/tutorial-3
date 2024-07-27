using System;

namespace LightController;

// user code extended by generated state machine. Nicer than expansions in most cases.
public class LightSmBase
{
    public void LightBlue() => Console.WriteLine("Light is: BLUE");
    public void LightYellow() => Console.WriteLine("Light is: YELLOW");
    public void LightRed() => Console.WriteLine("Light is: RED");

    protected int count;
}
