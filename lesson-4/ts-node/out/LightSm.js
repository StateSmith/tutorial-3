"use strict";
// Autogenerated with StateSmith 0.16.0+33b97786003f067f9b746ce5870937de5ee23d56.
// Algorithm: Balanced2. See https://github.com/StateSmith/StateSmith/wiki/Algorithms
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.LightSm = exports.Vars = exports.StateIdCount = exports.StateId = exports.EventIdCount = exports.EventId = void 0;
// any text you put in IRenderConfig.FileTop (like this comment) will be written to the generated .h file
var LightSmBase_1 = require("./LightSmBase");
var EventId;
(function (EventId) {
    EventId[EventId["DIM"] = 0] = "DIM";
    EventId[EventId["INC"] = 1] = "INC";
    EventId[EventId["OFF"] = 2] = "OFF";
})(EventId || (exports.EventId = EventId = {}));
exports.EventIdCount = 3;
var StateId;
(function (StateId) {
    StateId[StateId["ROOT"] = 0] = "ROOT";
    StateId[StateId["OFF"] = 1] = "OFF";
    StateId[StateId["ON_GROUP"] = 2] = "ON_GROUP";
    StateId[StateId["ON_HOT"] = 3] = "ON_HOT";
    StateId[StateId["ON1"] = 4] = "ON1";
    StateId[StateId["ON2"] = 5] = "ON2";
})(StateId || (exports.StateId = StateId = {}));
exports.StateIdCount = 6;
// State machine variables. Can be used for inputs, outputs, user variables...
var Vars = /** @class */ (function () {
    function Vars() {
        this.count = 0; // Variable for state machine. Must end with a semicolon for TypeScript.
    }
    return Vars;
}());
exports.Vars = Vars;
// Generated state machine
var LightSm = /** @class */ (function (_super) {
    __extends(LightSm, _super);
    function LightSm() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Variables. Can be used for inputs, outputs, user variables...
        _this.vars = new Vars();
        return _this;
    }
    // State machine constructor. Must be called before start or dispatch event functions. Not thread safe.
    LightSm.prototype.LightSm = function () {
    };
    // Starts the state machine. Must be called before dispatching events. Not thread safe.
    LightSm.prototype.start = function () {
        this.ROOT_enter();
        // ROOT behavior
        // uml: TransitionTo(ROOT.<InitialState>)
        {
            // Step 1: Exit states until we reach `ROOT` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
            // Step 2: Transition action: ``.
            // Step 3: Enter/move towards transition target `ROOT.<InitialState>`.
            // ROOT.<InitialState> is a pseudo state and cannot have an `enter` trigger.
            // ROOT.<InitialState> behavior
            // uml: TransitionTo(OFF)
            {
                // Step 1: Exit states until we reach `ROOT` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
                // Step 2: Transition action: ``.
                // Step 3: Enter/move towards transition target `OFF`.
                this.OFF_enter();
                // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
                return;
            } // end of behavior for ROOT.<InitialState>
        } // end of behavior for ROOT
    };
    // Dispatches an event to the state machine. Not thread safe.
    // Note! This function assumes that the `eventId` parameter is valid.
    LightSm.prototype.dispatchEvent = function (eventId) {
        switch (this.stateId) {
            // STATE: LightSm
            case StateId.ROOT:
                // No events handled by this state (or its ancestors).
                break;
            // STATE: OFF
            case StateId.OFF:
                switch (eventId) {
                    case EventId.INC:
                        this.OFF_inc();
                        break;
                }
                break;
            // STATE: ON_GROUP
            case StateId.ON_GROUP:
                switch (eventId) {
                    case EventId.OFF:
                        this.ON_GROUP_off();
                        break;
                }
                break;
            // STATE: ON_HOT
            case StateId.ON_HOT:
                switch (eventId) {
                    case EventId.DIM:
                        this.ON_HOT_dim();
                        break;
                    case EventId.OFF:
                        this.ON_GROUP_off();
                        break; // First ancestor handler for this event
                }
                break;
            // STATE: ON1
            case StateId.ON1:
                switch (eventId) {
                    case EventId.INC:
                        this.ON1_inc();
                        break;
                    case EventId.DIM:
                        this.ON1_dim();
                        break;
                    case EventId.OFF:
                        this.ON_GROUP_off();
                        break; // First ancestor handler for this event
                }
                break;
            // STATE: ON2
            case StateId.ON2:
                switch (eventId) {
                    case EventId.INC:
                        this.ON2_inc();
                        break;
                    case EventId.DIM:
                        this.ON2_dim();
                        break;
                    case EventId.OFF:
                        this.ON_GROUP_off();
                        break; // First ancestor handler for this event
                }
                break;
        }
    };
    // This function is used when StateSmith doesn't know what the active leaf state is at
    // compile time due to sub states or when multiple states need to be exited.
    LightSm.prototype.exitUpToStateHandler = function (desiredState) {
        while (this.stateId != desiredState) {
            switch (this.stateId) {
                case StateId.OFF:
                    this.OFF_exit();
                    break;
                case StateId.ON_GROUP:
                    this.ON_GROUP_exit();
                    break;
                case StateId.ON_HOT:
                    this.ON_HOT_exit();
                    break;
                case StateId.ON1:
                    this.ON1_exit();
                    break;
                case StateId.ON2:
                    this.ON2_exit();
                    break;
                default: return; // Just to be safe. Prevents infinite loop if state ID memory is somehow corrupted.
            }
        }
    };
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state ROOT
    ////////////////////////////////////////////////////////////////////////////////
    LightSm.prototype.ROOT_enter = function () {
        this.stateId = StateId.ROOT;
    };
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state OFF
    ////////////////////////////////////////////////////////////////////////////////
    LightSm.prototype.OFF_enter = function () {
        this.stateId = StateId.OFF;
        // OFF behavior
        // uml: enter / { console.log("Light is: OFF"); }
        {
            // Step 1: execute action `console.log("Light is: OFF");`
            console.log("Light is: OFF");
        } // end of behavior for OFF
    };
    LightSm.prototype.OFF_exit = function () {
        this.stateId = StateId.ROOT;
    };
    LightSm.prototype.OFF_inc = function () {
        // OFF behavior
        // uml: INC TransitionTo(ON1)
        {
            // Step 1: Exit states until we reach `ROOT` state (Least Common Ancestor for transition).
            this.OFF_exit();
            // Step 2: Transition action: ``.
            // Step 3: Enter/move towards transition target `ON1`.
            this.ON_GROUP_enter();
            this.ON1_enter();
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            return;
        } // end of behavior for OFF
        // No ancestor handles this event.
    };
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state ON_GROUP
    ////////////////////////////////////////////////////////////////////////////////
    LightSm.prototype.ON_GROUP_enter = function () {
        this.stateId = StateId.ON_GROUP;
    };
    LightSm.prototype.ON_GROUP_exit = function () {
        this.stateId = StateId.ROOT;
    };
    LightSm.prototype.ON_GROUP_off = function () {
        // ON_GROUP behavior
        // uml: OFF TransitionTo(OFF)
        {
            // Step 1: Exit states until we reach `ROOT` state (Least Common Ancestor for transition).
            this.exitUpToStateHandler(StateId.ROOT);
            // Step 2: Transition action: ``.
            // Step 3: Enter/move towards transition target `OFF`.
            this.OFF_enter();
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            return;
        } // end of behavior for ON_GROUP
        // No ancestor handles this event.
    };
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state ON_HOT
    ////////////////////////////////////////////////////////////////////////////////
    LightSm.prototype.ON_HOT_enter = function () {
        this.stateId = StateId.ON_HOT;
        // ON_HOT behavior
        // uml: enter / { this.lightRed(); }
        {
            // Step 1: execute action `this.lightRed();`
            this.lightRed();
        } // end of behavior for ON_HOT
    };
    LightSm.prototype.ON_HOT_exit = function () {
        this.stateId = StateId.ON_GROUP;
    };
    LightSm.prototype.ON_HOT_dim = function () {
        // ON_HOT behavior
        // uml: DIM TransitionTo(ON2)
        {
            // Step 1: Exit states until we reach `ON_GROUP` state (Least Common Ancestor for transition).
            this.ON_HOT_exit();
            // Step 2: Transition action: ``.
            // Step 3: Enter/move towards transition target `ON2`.
            this.ON2_enter();
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            return;
        } // end of behavior for ON_HOT
        // No ancestor handles this event.
    };
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state ON1
    ////////////////////////////////////////////////////////////////////////////////
    LightSm.prototype.ON1_enter = function () {
        this.stateId = StateId.ON1;
        // ON1 behavior
        // uml: enter / { this.lightBlue(); }
        {
            // Step 1: execute action `this.lightBlue();`
            this.lightBlue();
        } // end of behavior for ON1
    };
    LightSm.prototype.ON1_exit = function () {
        this.stateId = StateId.ON_GROUP;
    };
    LightSm.prototype.ON1_dim = function () {
        // ON1 behavior
        // uml: DIM TransitionTo(OFF)
        {
            // Step 1: Exit states until we reach `ROOT` state (Least Common Ancestor for transition).
            this.exitUpToStateHandler(StateId.ROOT);
            // Step 2: Transition action: ``.
            // Step 3: Enter/move towards transition target `OFF`.
            this.OFF_enter();
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            return;
        } // end of behavior for ON1
        // No ancestor handles this event.
    };
    LightSm.prototype.ON1_inc = function () {
        // ON1 behavior
        // uml: INC TransitionTo(ON2)
        {
            // Step 1: Exit states until we reach `ON_GROUP` state (Least Common Ancestor for transition).
            this.ON1_exit();
            // Step 2: Transition action: ``.
            // Step 3: Enter/move towards transition target `ON2`.
            this.ON2_enter();
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            return;
        } // end of behavior for ON1
        // No ancestor handles this event.
    };
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state ON2
    ////////////////////////////////////////////////////////////////////////////////
    LightSm.prototype.ON2_enter = function () {
        this.stateId = StateId.ON2;
        // ON2 behavior
        // uml: enter / { this.lightYellow(); }
        {
            // Step 1: execute action `this.lightYellow();`
            this.lightYellow();
        } // end of behavior for ON2
        // ON2 behavior
        // uml: enter / { count = 0; }
        {
            // Step 1: execute action `count = 0;`
            this.vars.count = 0;
        } // end of behavior for ON2
    };
    LightSm.prototype.ON2_exit = function () {
        this.stateId = StateId.ON_GROUP;
    };
    LightSm.prototype.ON2_dim = function () {
        // ON2 behavior
        // uml: DIM TransitionTo(ON1)
        {
            // Step 1: Exit states until we reach `ON_GROUP` state (Least Common Ancestor for transition).
            this.ON2_exit();
            // Step 2: Transition action: ``.
            // Step 3: Enter/move towards transition target `ON1`.
            this.ON1_enter();
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            return;
        } // end of behavior for ON2
        // No ancestor handles this event.
    };
    LightSm.prototype.ON2_inc = function () {
        // ON2 behavior
        // uml: 1. INC / { count++; }
        {
            // Step 1: execute action `count++;`
            this.vars.count++;
        } // end of behavior for ON2
        // ON2 behavior
        // uml: 2. INC / { console.log("vars.count: " + count); }
        {
            // Step 1: execute action `console.log("vars.count: " + count);`
            console.log("vars.count: " + this.vars.count);
        } // end of behavior for ON2
        // ON2 behavior
        // uml: INC [count >= 3] TransitionTo(ON_HOT)
        if (this.vars.count >= 3) {
            // Step 1: Exit states until we reach `ON_GROUP` state (Least Common Ancestor for transition).
            this.ON2_exit();
            // Step 2: Transition action: ``.
            // Step 3: Enter/move towards transition target `ON_HOT`.
            this.ON_HOT_enter();
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            return;
        } // end of behavior for ON2
        // No ancestor handles this event.
    };
    // Thread safe.
    LightSm.stateIdToString = function (id) {
        switch (id) {
            case StateId.ROOT: return "ROOT";
            case StateId.OFF: return "OFF";
            case StateId.ON_GROUP: return "ON_GROUP";
            case StateId.ON_HOT: return "ON_HOT";
            case StateId.ON1: return "ON1";
            case StateId.ON2: return "ON2";
            default: return "?";
        }
    };
    // Thread safe.
    LightSm.eventIdToString = function (id) {
        switch (id) {
            case EventId.DIM: return "DIM";
            case EventId.INC: return "INC";
            case EventId.OFF: return "OFF";
            default: return "?";
        }
    };
    return LightSm;
}(LightSmBase_1.LightSmBase));
exports.LightSm = LightSm;
//# sourceMappingURL=LightSm.js.map