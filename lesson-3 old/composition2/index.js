"use strict";
const light = new Light();

document.addEventListener('DOMContentLoaded', () => {
    light.start();

    document.getElementById("inc").onclick = () => light.inc();
    document.getElementById("dim").onclick = () => light.dim();
    document.getElementById("off").onclick = () => light.off();
});