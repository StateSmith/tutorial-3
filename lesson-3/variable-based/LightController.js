// hand written file
"use strict";

class LightController
{
    // Our state machine instance
    #sm = new LightSm();

    #lightHtmlObject;

    constructor(lightHtmlObject) {
        this.#lightHtmlObject = lightHtmlObject;

        // start the state machine
        this.#sm.start();
    }

    ///////////// Public methods //////////////

    // called by GUI index.html
    handleOnPress() {
        this.#sm.dispatchEvent(LightSm.EventId.ON_PRESS);
    }

    // called by GUI index.html
    handleOffPress() {
        this.#sm.dispatchEvent(LightSm.EventId.OFF_PRESS);
    }

    // called by GUI index.html. This is essentially "poll the state machine".
    update(timeSinceLastUpdate) {
        let sm = this.#sm; // shorthand variable

        // set up inputs to the state machine
        sm.vars.timer_ms += timeSinceLastUpdate;

        // run the state machine
        sm.dispatchEvent(LightSm.EventId.DO);

        // use state machine outputs
        this.#lightHtmlObject.style.backgroundColor = sm.vars.bg_color;
        this.#lightHtmlObject.style.color = sm.vars.font_color;
        this.#lightHtmlObject.textContent = "Count: " + sm.vars.count;
    }
}
