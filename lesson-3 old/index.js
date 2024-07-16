"use strict";

class LightSmContext {
    count = 0;
    turnOn = null;
    turnOff = null;
    resetTimer = null;
    isTimerExpired = null;
}

class LightController
{
    _timerStartMs = 0;
    _sm = new LightSm();
    _smContext = new LightSmContext();
    _lightHtmlObject = null;

    constructor(lightHtmlObject) {
        this._lightHtmlObject = lightHtmlObject;

        this._smContext.turnOn = this._turnOn.bind(this);
        this._smContext.turnOff = this._turnOff.bind(this);
        this._smContext.resetTimer = this._resetTimer.bind(this);
        this._smContext.isTimerExpired = this._isTimerExpired.bind(this);

        this._sm.vars.myInterface = this._smContext;
        this._sm.start();
    }

    handleOnPress() {
        this._sm.dispatchEvent(LightSm.EventId.ON_PRESS);
    }

    handleOffPress() {
        this._sm.dispatchEvent(LightSm.EventId.OFF_PRESS);
    }

    getCount() {
        return this._smContext.count;
    }

    ///////////// Private methods //////////////

    _resetTimer() {
        this._timerStartMs = Date.now();
    }

    _isTimerExpired() {
        return Date.now() - this._timerStartMs > 3000;
    }

    _turnOn() {
        this._lightHtmlObject.style.backgroundColor = "yellow";
        this._lightHtmlObject.style.color = "black";
        this._lightHtmlObject.textContent = "Count: " + this._smContext.count;
    }

    _turnOff() {
        this._lightHtmlObject.style.backgroundColor = "black";
        this._lightHtmlObject.style.color = "white";
        this._lightHtmlObject.textContent = "Count: " + this._smContext.count;
    }
}
