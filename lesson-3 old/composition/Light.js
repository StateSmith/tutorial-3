"use strict";
class Light
{
    sm = new LightSm();

    // `sm_` prefix marks members that are intended for use by state machine.
    // You could also choose to make a proper interface class for the state machine.
    sm_count = 0;

    constructor() {
        this.sm.vars.interfaceObj = this;
    }

    dispatchEvent(eventId) {
        this.sm.dispatchEvent(eventId);
        document.getElementById("count-var").innerText = this.sm_count + "";
    }

    start() {
        this.sm.start();
    }

    sm_lightBlue() {
        this.print("BLUE");
    }

    sm_lightYellow() {
        this.print("YELLOW");
    }

    sm_lightRed() {
        this.print("RED");
    }

    /**
     * @param {string} message
     */
    sm_print(message) {
        const output = document.getElementById("output");
        output.append(message + "\n");
    }
}
