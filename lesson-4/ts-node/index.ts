// Import the prompt-sync module
import promptConfig from "prompt-sync";
import * as LightSm from "./LightSm";

const prompt = promptConfig({ sigint: true });


console.log("USAGE:");
console.log("  type i <enter> to send INCREASE event to state machine.");
console.log("  type d <enter> to send DIM event to state machine.");
console.log("  type o <enter> to send OFF event to state machine.");
console.log("");
prompt("Hit <enter> to start");
console.log();

let sm = new LightSm.LightSm();
sm.start();

while (true) {
    ReadInputRunSm(sm);
}

function ReadInputRunSm(sm: LightSm.LightSm) {
    console.log(`\nCurrent state: ${LightSm.LightSm.stateIdToString(sm.stateId)}`);

    var line = prompt("Please type 'i', 'd', 'o': ");
    let c = "";

    if (line)
        c = line[0];

    RunSmForChar(sm, c);
}

function RunSmForChar(sm: LightSm.LightSm, c: string) {
    let eventId: LightSm.EventId;

    switch (c) {
        case 'i': eventId = LightSm.EventId.INC; break;
        case 'd': eventId = LightSm.EventId.DIM; break;
        case 'o': eventId = LightSm.EventId.OFF; break;
    }

    if (eventId !== undefined) {
        console.log(`Dispatching event: ${LightSm.LightSm.eventIdToString(eventId)}`);
        sm.dispatchEvent(eventId);
    }
    else {
        console.log("Invalid input. Not running state machine.");
    }
}