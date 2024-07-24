// hand written file
"use strict";

class LightController
{
    // Our state machine instance
    _sm = new LightSm();

    constructor(lightHtmlObject) {
        this._sm._lightHtmlObject = lightHtmlObject;

        this._sm.vars.me = this._sm;

        // start the state machine
        this._sm.start();
    }

    // called by GUI index.html
    handleOnPress() {
        this._sm.dispatchEvent(LightSm.EventId.ON_PRESS);
    }

    // called by GUI index.html
    handleOffPress() {
        this._sm.dispatchEvent(LightSm.EventId.OFF_PRESS);
    }

    // called by GUI index.html. This is essentially "poll the state machine".
    update() {
        // 'do' events are typically used for polling state machines
        this._sm.dispatchEvent(LightSm.EventId.DO);
    }
}
