// hand written file
"use strict";

class LightController
{
    // Our state machine instance
    _sm = new LightSm();

    // Context object that we will pass to the state machine
    _smContext = new LightSmContext();

    // HTML object that we will color and add text to
    _lightHtmlObject = null;

    // Holds milliseconds when the timer was started
    _timerStartMs = 0;

    constructor(lightHtmlObject) {
        this._lightHtmlObject = lightHtmlObject;

        // Bind context functions to the instance of this class.
        // This effectively allows the state machine to call the functions of this class.
        this._smContext.turnOn = this._turnOn.bind(this);
        this._smContext.turnOff = this._turnOff.bind(this);
        this._smContext.resetTimer = this._resetTimer.bind(this);
        this._smContext.isTimerExpired = this._isTimerExpired.bind(this);

        // Give the state machine a reference to the context object
        this._sm.vars.ctx = this._smContext;

        // start the state machine
        this._sm.start();
    }


    ///////////// Public methods //////////////

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

    ///////////// Private methods //////////////

    _resetTimer() {
        this._timerStartMs = Date.now();
    }

    // Returns true if the timer was started more than 3 seconds ago
    _isTimerExpired() {
        return Date.now() - this._timerStartMs > 3000;
    }

    // Called by the state machine when the light should be turned on
    _turnOn() {
        this._lightHtmlObject.style.backgroundColor = "yellow";
        this._lightHtmlObject.style.color = "black"; // text color
        this._lightHtmlObject.textContent = "Count: " + this._smContext.count;
    }

    _turnOff() {
        this._lightHtmlObject.style.backgroundColor = "black";
        this._lightHtmlObject.style.color = "white"; // text color
        this._lightHtmlObject.textContent = "Count: " + this._smContext.count;
    }
}
