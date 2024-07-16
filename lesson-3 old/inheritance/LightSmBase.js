// you don't need a base. Just showing as an option.
"use strict";
class LightSmBase
{
    count = 0;

    lightBlue() {
        this.print("BLUE");
    }

    lightYellow() {
        this.print("YELLOW");
    }

    lightRed() {
        this.print("RED");
    }

    /**
     * @param {string} message
     */
    print(message) {
        const output = document.getElementById("output");
        output.append(message + "\n");
    }
}
