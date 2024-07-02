"use strict";
class Light
{
    #sm = new LightSm();

    #smInterfaceObj = {
        count: 0,
        lightBlue: this.#lightBlue.bind(this),
        lightYellow: this.#lightYellow.bind(this),
        lightRed: this.#lightRed.bind(this),
        print: this.#print.bind(this)
    };

    constructor() {
        // give state machine a reference to the interface object
        this.#sm.vars.interfaceObj = this.#smInterfaceObj;
    }

    inc() {
        this.#dispatchEvent(LightSm.EventId.INC);
    }

    dim() {
        this.#dispatchEvent(LightSm.EventId.DIM);
    }

    off() {
        this.#dispatchEvent(LightSm.EventId.OFF);
    }

    #dispatchEvent(eventId) {
        this.#sm.dispatchEvent(eventId);
        document.getElementById("count-var").innerText = this.#smInterfaceObj.count + "";
    }

    start() {
        this.#sm.start();
    }

    #lightBlue() {
        this.#print("BLUE ");
    }

    #lightYellow() {
        this.#print("YELLOW");
    }

    #lightRed() {
        this.#print("RED");
    }

    /**
     * @param {string} message
     */
    #print(message) {
        const output = document.getElementById("output");
        output.append(message + "\n");
    }
}
