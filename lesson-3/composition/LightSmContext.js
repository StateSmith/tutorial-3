// hand written file
"use strict";

class LightSmContext {
    // HTML object that we will color and add text to
    lightHtmlObject;

    count = 0;

    // Holds milliseconds when the timer was started
    timerStartMs = 0;

    constructor(lightHtmlObject) {
        this.lightHtmlObject = lightHtmlObject;     
    }

    resetTimer() {
        this._timerStartMs = Date.now();
    }

    // Returns true if the timer was started more than 3 seconds ago
    isTimerExpired() {
        return Date.now() - this._timerStartMs > 3000;
    }

    // Called by the state machine when the light should be turned on
    turnOn() {
        this.lightHtmlObject.style.backgroundColor = "yellow";
        this.lightHtmlObject.style.color = "black"; // text color
        this.lightHtmlObject.textContent = "Count: " + this.count;
    }

    turnOff() {
        this.lightHtmlObject.style.backgroundColor = "black";
        this.lightHtmlObject.style.color = "white"; // text color
        this.lightHtmlObject.textContent = "Count: " + this.count;
    }
}
