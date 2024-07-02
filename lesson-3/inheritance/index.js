"use strict";
const sm = new LightSm();

document.addEventListener('DOMContentLoaded', () => {
    sm.start();

    document.getElementById("inc").onclick = () => sendEventToSm(LightSm.EventId.INC);
    document.getElementById("dim").onclick      = () => sendEventToSm(LightSm.EventId.DIM);
    document.getElementById("off").onclick      = () => sendEventToSm(LightSm.EventId.OFF);
});

/**
 * @param {number} eventId
 */
function sendEventToSm(eventId) {
    sm.dispatchEvent(eventId);
    document.getElementById("count-var").innerText = sm.count + "";
}


