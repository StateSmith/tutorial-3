// hand written file
"use strict";

class LightController
{
    // Our state machine instance. Private field.
    #sm = new LightSm();

    // Context object that we will pass to the state machine. Private field.
    #smContext;

    constructor(lightHtmlObject) {
        this.#smContext = new LightSmContext(lightHtmlObject);

        // Give the state machine a reference to the context object
        this.#sm.vars.ctx = this.#smContext;

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
    update() {
        // 'do' events are typically used for polling state machines
        this.#sm.dispatchEvent(LightSm.EventId.DO);
    }
}
