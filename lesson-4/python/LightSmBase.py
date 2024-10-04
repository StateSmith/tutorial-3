# user code extended by generated state machine. Nicer than expansions in most cases.
# composition is good too.
class LightSmBase():
    # ANSI escape codes for colors
    RESET =  "\033[0m"
    BLUE =   "\033[0;34m"
    YELLOW = "\033[0;33m"
    RED =    "\033[0;31m"

    def lightBlue(self):
        print(LightSmBase.BLUE + "Light is: BLUE" + LightSmBase.RESET)

    def lightYellow(self):
        print(LightSmBase.YELLOW + "Light is: YELLOW" + LightSmBase.RESET)

    def lightRed(self):
        print(LightSmBase.RED + "Light is: RED" + LightSmBase.RESET)