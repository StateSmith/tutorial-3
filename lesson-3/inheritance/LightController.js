// hand written file
"use strict";

class LightController
{
    // Our state machine instance
    #sm = new LightSm();

    constructor(lightHtmlObject) {
        this.#sm.setLightHtmlObject(lightHtmlObject); // for base class

        // start the state machine
        this.#sm.start();
    }

    // called by GUI index.html
    handleOnPress() {
        this.#sm.dispatchEvent(LightSm.EventId.ON_PRESS);
    }

    // called by GUI index.html
    handleOffPress() {
        this.#sm.dispatchEvent(LightSm.EventId.OFF_PRESS);
    }

    // called by GUI index.html. This is essentially "poll the state machine".
    update() {
        // 'do' events are typically used for polling state machines
        this.#sm.dispatchEvent(LightSm.EventId.DO);
    }
}
