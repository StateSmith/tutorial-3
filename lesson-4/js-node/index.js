#!/usr/bin/env node
import promptConfig from "prompt-sync";
import { LightSm } from "./LightSm.js";

const prompt = promptConfig({ sigint: true });

console.log("USAGE:");
console.log("  type i <enter> to send INCREASE event to state machine.");
console.log("  type d <enter> to send DIM event to state machine.");
console.log("  type o <enter> to send OFF event to state machine.");
console.log("");
prompt("Hit <enter> to start");
console.log();

let sm = new LightSm();
sm.start();

while (true)
{
    ReadInputRunSm(sm);
}

/**
 * @param {LightSm} sm
 */
function ReadInputRunSm(sm)
{
    var line = prompt("");
    let c = "";

    if (line)
        c = line[0];

    RunSmForChar(sm, c);
}

/**
 * @param {LightSm} sm
 * @param {string} c
 */
function RunSmForChar(sm, c)
{
    let eventId = null;

    switch (c)
    {
        case 'i': eventId = LightSm.EventId.INC; break;
        case 'd': eventId = LightSm.EventId.DIM; break;
        case 'o': eventId = LightSm.EventId.OFF; break;
    }

    if (eventId !== null)
    {
        sm.dispatchEvent(eventId);
    }
    else
    {
        console.log("What you trying to pull!? I ain't not silly AI. Feed me proper input please :)");
    }
}