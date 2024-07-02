"use strict";
class Light
{
    sm = new LightSm();
    count = 0;

    constructor() {
        this.sm.
    }

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
