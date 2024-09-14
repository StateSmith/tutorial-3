// hand written file
"use strict";

class LightController
{
    // Our state machine instance
    #sm = new LightSm();

    #lightHtmlObject = null;
    #switchHtmlObject = null;

    constructor(lightHtmlObject, switchHtmlObject) {
        this.#lightHtmlObject = lightHtmlObject;
        this.#switchHtmlObject = switchHtmlObject;

        // start the state machine
        this.#sm.start();
    }

    // called by GUI index.html. This is essentially "poll the state machine".
    update(timeSinceLastUpdate) {
        let sm = this.#sm;

        // set up inputs to the state machine
        sm.vars.input_active = this.#switchHtmlObject.checked;
        sm.vars.timer_ms += timeSinceLastUpdate;

        // run the state machine
        sm.dispatchEvent(LightSm.EventId.DO);

        // use state machine outputs
        this.#lightHtmlObject.style.backgroundColor = sm.vars.bg_color;
        this.#lightHtmlObject.style.color = sm.vars.font_color;
        this.#lightHtmlObject.textContent = "Count: " + sm.vars.count;
    }
}
