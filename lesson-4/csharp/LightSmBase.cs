using System;

namespace LightController;

// user code extended by generated state machine. Nicer than expansions in most cases.
public class LightSmBase
{
    public void LightBlue()
    {
        Console.ForegroundColor = ConsoleColor.Blue;
        Console.WriteLine("Light is: BLUE");
        Console.ResetColor();
    }

    public void LightYellow()
    {
        Console.ForegroundColor = ConsoleColor.Yellow;
        Console.WriteLine("Light is: YELLOW");
        Console.ResetColor();
    }

    public void LightRed()
    {
        Console.ForegroundColor = ConsoleColor.Red;
        Console.WriteLine("Light is: RED");
        Console.ResetColor();
    }

    protected int count;
}
