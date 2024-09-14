// hand written file
"use strict";

// Base class for the state machine
class LightSmBase {
    // public variable for state machine
    count = 0;
    
    // HTML object that we will color and add text to
    // private variable
    #lightHtmlObject = null;

    // Holds milliseconds when the timer was started
    // private variable
    #timerStartMs = 0;

    setLightHtmlObject(lightHtmlObject) {
        this.#lightHtmlObject = lightHtmlObject;
    }

    resetTimer() {
        this.#timerStartMs = Date.now();
    }

    // Returns true if the timer was started more than 3 seconds ago
    isTimerExpired() {
        return Date.now() - this.#timerStartMs > 3000;
    }

    // Called by the state machine when the light should be turned on
    turnOn() {
        this.#lightHtmlObject.style.backgroundColor = "yellow";
        this.#lightHtmlObject.style.color = "black"; // text color
        this.#lightHtmlObject.textContent = "Count: " + this.count;
    }

    turnOff() {
        this.#lightHtmlObject.style.backgroundColor = "black";
        this.#lightHtmlObject.style.color = "white"; // text color
        this.#lightHtmlObject.textContent = "Count: " + this.count;
    }
}
