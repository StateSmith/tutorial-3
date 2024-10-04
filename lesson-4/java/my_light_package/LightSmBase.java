package my_light_package;

// user code extended by generated state machine. Nicer than expansions in most cases.
public class LightSmBase
{
    // Terminal colors https://stackoverflow.com/a/45444716/7331858
    static final String RESET = "\033[0m";      // Text Reset
    static final String RED = "\033[0;31m";     // RED
    static final String YELLOW = "\033[0;33m";  // YELLOW
    static final String BLUE = "\033[0;34m";    // BLUE

    public void lightBlue()
    {
        System.out.println(BLUE + "Light is: BLUE" + RESET);
    }

    public void lightYellow(){
        System.out.println(YELLOW + "Light is: YELLOW" + RESET);
    }

    public void lightRed()
    {
        System.out.println(RED + "Light is: RED" + RESET);
    }

    protected int count;
}
