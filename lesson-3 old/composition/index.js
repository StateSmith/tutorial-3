"use strict";
const light = new Light();

document.addEventListener('DOMContentLoaded', () => {
    light.start();

    document.getElementById("inc").onclick = () => sendEventToSm(LightSm.EventId.INC);
    document.getElementById("dim").onclick = () => sendEventToSm(LightSm.EventId.DIM);
    document.getElementById("off").onclick = () => sendEventToSm(LightSm.EventId.OFF);
});

/**
 * @param {number} eventId
 */
function sendEventToSm(eventId) {
    light.dispatchEvent(eventId);
}
