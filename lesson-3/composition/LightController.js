// hand written file
"use strict";

class LightController
{
    // Our state machine instance
    #_sm = new LightSm();

    // Context object that we will pass to the state machine
    #_smContext;

    constructor(lightHtmlObject) {
        this.#_smContext = new LightSmContext(lightHtmlObject);

        // Give the state machine a reference to the context object
        this.#_sm.vars.ctx = this.#_smContext;

        // start the state machine
        this.#_sm.start();
    }


    ///////////// Public methods //////////////

    // called by GUI index.html
    handleOnPress() {
        this.#_sm.dispatchEvent(LightSm.EventId.ON_PRESS);
    }

    // called by GUI index.html
    handleOffPress() {
        this.#_sm.dispatchEvent(LightSm.EventId.OFF_PRESS);
    }

    // called by GUI index.html. This is essentially "poll the state machine".
    update() {
        // 'do' events are typically used for polling state machines
        this.#_sm.dispatchEvent(LightSm.EventId.DO);
    }
}
