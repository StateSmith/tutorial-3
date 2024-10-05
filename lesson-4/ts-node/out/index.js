"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import the prompt-sync module
var prompt_sync_1 = __importDefault(require("prompt-sync"));
var LightSm = __importStar(require("./LightSm"));
var prompt = (0, prompt_sync_1.default)({ sigint: true });
console.log("USAGE:");
console.log("  type i <enter> to send INCREASE event to state machine.");
console.log("  type d <enter> to send DIM event to state machine.");
console.log("  type o <enter> to send OFF event to state machine.");
console.log("");
prompt("Hit <enter> to start");
console.log();
var sm = new LightSm.LightSm();
sm.start();
while (true) {
    ReadInputRunSm(sm);
}
function ReadInputRunSm(sm) {
    console.log("\nCurrent state: ".concat(LightSm.LightSm.stateIdToString(sm.stateId)));
    var line = prompt("Please type 'i', 'd', 'o': ");
    var c = "";
    if (line)
        c = line[0];
    RunSmForChar(sm, c);
}
function RunSmForChar(sm, c) {
    var eventId;
    switch (c) {
        case 'i':
            eventId = LightSm.EventId.INC;
            break;
        case 'd':
            eventId = LightSm.EventId.DIM;
            break;
        case 'o':
            eventId = LightSm.EventId.OFF;
            break;
    }
    if (eventId !== undefined) {
        console.log("Dispatching event: ".concat(LightSm.LightSm.eventIdToString(eventId)));
        sm.dispatchEvent(eventId);
    }
    else {
        console.log("Invalid input. Not running state machine.");
    }
}
//# sourceMappingURL=index.js.map