// hand written file
"use strict";

class LightController
{
    // Our state machine instance
    _sm = new LightSm();

    _lightHtmlObject = null;
    _switchHtmlObject = null;

    constructor(lightHtmlObject, switchHtmlObject) {
        this._lightHtmlObject = lightHtmlObject;
        this._switchHtmlObject = switchHtmlObject;

        // start the state machine
        this._sm.start();
    }

    // called by GUI index.html. This is essentially "poll the state machine".
    update(timeSinceLastUpdate) {
        let sm = this._sm;

        // set up inputs to the state machine
        sm.vars.input_active = this._switchHtmlObject.checked;
        sm.vars.timer_ms += timeSinceLastUpdate;

        // run the state machine
        sm.dispatchEvent(LightSm.EventId.DO);

        // use state machine outputs
        this._lightHtmlObject.style.backgroundColor = sm.vars.bg_color;
        this._lightHtmlObject.style.color = sm.vars.font_color;
        this._lightHtmlObject.textContent = "Count: " + sm.vars.count;
    }
}
