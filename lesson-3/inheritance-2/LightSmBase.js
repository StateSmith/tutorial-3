// hand written file
"use strict";

// Base class for the state machine
class LightSmBase {
    count = 0;
    
    // HTML object that we will color and add text to
    _lightHtmlObject = null;

    // Holds milliseconds when the timer was started
    _timerStartMs = 0;

    resetTimer() {
        this._timerStartMs = Date.now();
    }

    // Returns true if the timer was started more than 3 seconds ago
    isTimerExpired() {
        return Date.now() - this._timerStartMs > 3000;
    }

    // Called by the state machine when the light should be turned on
    turnOn() {
        this._lightHtmlObject.style.backgroundColor = "yellow";
        this._lightHtmlObject.style.color = "black"; // text color
        this._lightHtmlObject.textContent = "Count: " + this.count;
    }

    turnOff() {
        this._lightHtmlObject.style.backgroundColor = "black";
        this._lightHtmlObject.style.color = "white"; // text color
        this._lightHtmlObject.textContent = "Count: " + this.count;
    }
}
