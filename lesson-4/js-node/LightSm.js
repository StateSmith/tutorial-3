// Autogenerated with StateSmith 0.17.1+3dba8261f1470ff8db4b6e247bff1948d68b9351.
// Algorithm: Balanced2. See https://github.com/StateSmith/StateSmith/wiki/Algorithms

"use strict";    
// any text you put in IRenderConfig.FileTop (like this comment) will be written to the generated .h file
import { LightSmBase } from "./LightSmBase.js";


// Generated state machine
export class LightSm extends LightSmBase
{
    static EventId = 
    {
        DIM : 0,
        INC : 1,
        OFF : 2,
    }
    static { Object.freeze(this.EventId); }
    
    static EventIdCount = 3;
    static { Object.freeze(this.EventIdCount); }
    
    static StateId = 
    {
        ROOT : 0,
        OFF : 1,
        ON_GROUP : 2,
        ON_HOT : 3,
        ON1 : 4,
        ON2 : 5,
    }
    static { Object.freeze(this.StateId); }
    
    static StateIdCount = 6;
    static { Object.freeze(this.StateIdCount); }
    
    // Used internally by state machine. Feel free to inspect, but don't modify.
    stateId;
    
    // Variables. Can be used for inputs, outputs, user variables...
    vars = {
        count : 0, // variable for state machine
    };
    
    // Starts the state machine. Must be called before dispatching events. Not thread safe.
    start()
    {
        this.#ROOT_enter();
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
                this.#OFF_enter();
                
                // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
                return;
            } // end of behavior for ROOT.<InitialState>
        } // end of behavior for ROOT
    }
    
    // Dispatches an event to the state machine. Not thread safe.
    // Note! This function assumes that the `eventId` parameter is valid.
    dispatchEvent(eventId)
    {
        switch (this.stateId)
        {
            // STATE: LightSm
            case LightSm.StateId.ROOT:
                // No events handled by this state (or its ancestors).
                break;
            
            // STATE: OFF
            case LightSm.StateId.OFF:
                switch (eventId)
                {
                    case LightSm.EventId.INC: this.#OFF_inc(); break;
                }
                break;
            
            // STATE: ON_GROUP
            case LightSm.StateId.ON_GROUP:
                switch (eventId)
                {
                    case LightSm.EventId.OFF: this.#ON_GROUP_off(); break;
                }
                break;
            
            // STATE: ON_HOT
            case LightSm.StateId.ON_HOT:
                switch (eventId)
                {
                    case LightSm.EventId.DIM: this.#ON_HOT_dim(); break;
                    case LightSm.EventId.OFF: this.#ON_GROUP_off(); break; // First ancestor handler for this event
                }
                break;
            
            // STATE: ON1
            case LightSm.StateId.ON1:
                switch (eventId)
                {
                    case LightSm.EventId.INC: this.#ON1_inc(); break;
                    case LightSm.EventId.DIM: this.#ON1_dim(); break;
                    case LightSm.EventId.OFF: this.#ON_GROUP_off(); break; // First ancestor handler for this event
                }
                break;
            
            // STATE: ON2
            case LightSm.StateId.ON2:
                switch (eventId)
                {
                    case LightSm.EventId.INC: this.#ON2_inc(); break;
                    case LightSm.EventId.DIM: this.#ON2_dim(); break;
                    case LightSm.EventId.OFF: this.#ON_GROUP_off(); break; // First ancestor handler for this event
                }
                break;
        }
        
    }
    
    // This function is used when StateSmith doesn't know what the active leaf state is at
    // compile time due to sub states or when multiple states need to be exited.
    #exitUpToStateHandler(desiredState)
    {
        while (this.stateId != desiredState)
        {
            switch (this.stateId)
            {
                case LightSm.StateId.OFF: this.#OFF_exit(); break;
                
                case LightSm.StateId.ON_GROUP: this.#ON_GROUP_exit(); break;
                
                case LightSm.StateId.ON_HOT: this.#ON_HOT_exit(); break;
                
                case LightSm.StateId.ON1: this.#ON1_exit(); break;
                
                case LightSm.StateId.ON2: this.#ON2_exit(); break;
                
                default: return;  // Just to be safe. Prevents infinite loop if state ID memory is somehow corrupted.
            }
        }
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state ROOT
    ////////////////////////////////////////////////////////////////////////////////
    
    #ROOT_enter()
    {
        this.stateId = LightSm.StateId.ROOT;
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state OFF
    ////////////////////////////////////////////////////////////////////////////////
    
    #OFF_enter()
    {
        this.stateId = LightSm.StateId.OFF;
        
        // OFF behavior
        // uml: enter / { console.log("Light is: OFF"); }
        {
            // Step 1: execute action `console.log("Light is: OFF");`
            console.log("Light is: OFF");
        } // end of behavior for OFF
    }
    
    #OFF_exit()
    {
        this.stateId = LightSm.StateId.ROOT;
    }
    
    #OFF_inc()
    {
        // OFF behavior
        // uml: INC TransitionTo(ON1)
        {
            // Step 1: Exit states until we reach `ROOT` state (Least Common Ancestor for transition).
            this.#OFF_exit();
            
            // Step 2: Transition action: ``.
            
            // Step 3: Enter/move towards transition target `ON1`.
            this.#ON_GROUP_enter();
            this.#ON1_enter();
            
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            return;
        } // end of behavior for OFF
        
        // No ancestor handles this event.
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state ON_GROUP
    ////////////////////////////////////////////////////////////////////////////////
    
    #ON_GROUP_enter()
    {
        this.stateId = LightSm.StateId.ON_GROUP;
    }
    
    #ON_GROUP_exit()
    {
        this.stateId = LightSm.StateId.ROOT;
    }
    
    #ON_GROUP_off()
    {
        // ON_GROUP behavior
        // uml: OFF TransitionTo(OFF)
        {
            // Step 1: Exit states until we reach `ROOT` state (Least Common Ancestor for transition).
            this.#exitUpToStateHandler(LightSm.StateId.ROOT);
            
            // Step 2: Transition action: ``.
            
            // Step 3: Enter/move towards transition target `OFF`.
            this.#OFF_enter();
            
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            return;
        } // end of behavior for ON_GROUP
        
        // No ancestor handles this event.
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state ON_HOT
    ////////////////////////////////////////////////////////////////////////////////
    
    #ON_HOT_enter()
    {
        this.stateId = LightSm.StateId.ON_HOT;
        
        // ON_HOT behavior
        // uml: enter / { this.lightRed(); }
        {
            // Step 1: execute action `this.lightRed();`
            this.lightRed();
        } // end of behavior for ON_HOT
    }
    
    #ON_HOT_exit()
    {
        this.stateId = LightSm.StateId.ON_GROUP;
    }
    
    #ON_HOT_dim()
    {
        // ON_HOT behavior
        // uml: DIM TransitionTo(ON2)
        {
            // Step 1: Exit states until we reach `ON_GROUP` state (Least Common Ancestor for transition).
            this.#ON_HOT_exit();
            
            // Step 2: Transition action: ``.
            
            // Step 3: Enter/move towards transition target `ON2`.
            this.#ON2_enter();
            
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            return;
        } // end of behavior for ON_HOT
        
        // No ancestor handles this event.
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state ON1
    ////////////////////////////////////////////////////////////////////////////////
    
    #ON1_enter()
    {
        this.stateId = LightSm.StateId.ON1;
        
        // ON1 behavior
        // uml: enter / { this.lightBlue(); }
        {
            // Step 1: execute action `this.lightBlue();`
            this.lightBlue();
        } // end of behavior for ON1
    }
    
    #ON1_exit()
    {
        this.stateId = LightSm.StateId.ON_GROUP;
    }
    
    #ON1_dim()
    {
        // ON1 behavior
        // uml: DIM TransitionTo(OFF)
        {
            // Step 1: Exit states until we reach `ROOT` state (Least Common Ancestor for transition).
            this.#exitUpToStateHandler(LightSm.StateId.ROOT);
            
            // Step 2: Transition action: ``.
            
            // Step 3: Enter/move towards transition target `OFF`.
            this.#OFF_enter();
            
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            return;
        } // end of behavior for ON1
        
        // No ancestor handles this event.
    }
    
    #ON1_inc()
    {
        // ON1 behavior
        // uml: INC TransitionTo(ON2)
        {
            // Step 1: Exit states until we reach `ON_GROUP` state (Least Common Ancestor for transition).
            this.#ON1_exit();
            
            // Step 2: Transition action: ``.
            
            // Step 3: Enter/move towards transition target `ON2`.
            this.#ON2_enter();
            
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            return;
        } // end of behavior for ON1
        
        // No ancestor handles this event.
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state ON2
    ////////////////////////////////////////////////////////////////////////////////
    
    #ON2_enter()
    {
        this.stateId = LightSm.StateId.ON2;
        
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
    }
    
    #ON2_exit()
    {
        this.stateId = LightSm.StateId.ON_GROUP;
    }
    
    #ON2_dim()
    {
        // ON2 behavior
        // uml: DIM TransitionTo(ON1)
        {
            // Step 1: Exit states until we reach `ON_GROUP` state (Least Common Ancestor for transition).
            this.#ON2_exit();
            
            // Step 2: Transition action: ``.
            
            // Step 3: Enter/move towards transition target `ON1`.
            this.#ON1_enter();
            
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            return;
        } // end of behavior for ON2
        
        // No ancestor handles this event.
    }
    
    #ON2_inc()
    {
        // ON2 behavior
        // uml: 1. INC / { count++; }
        {
            // Step 1: execute action `count++;`
            this.vars.count++;
        } // end of behavior for ON2
        
        // ON2 behavior
        // uml: 2. INC / { console.log("count var: " + count); }
        {
            // Step 1: execute action `console.log("count var: " + count);`
            console.log("count var: " + this.vars.count);
        } // end of behavior for ON2
        
        // ON2 behavior
        // uml: INC [count >= 3] TransitionTo(ON_HOT)
        if (this.vars.count >= 3)
        {
            // Step 1: Exit states until we reach `ON_GROUP` state (Least Common Ancestor for transition).
            this.#ON2_exit();
            
            // Step 2: Transition action: ``.
            
            // Step 3: Enter/move towards transition target `ON_HOT`.
            this.#ON_HOT_enter();
            
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            return;
        } // end of behavior for ON2
        
        // No ancestor handles this event.
    }
    
    // Thread safe.
    static stateIdToString(id)
    {
        switch (id)
        {
            case LightSm.StateId.ROOT: return "ROOT";
            case LightSm.StateId.OFF: return "OFF";
            case LightSm.StateId.ON_GROUP: return "ON_GROUP";
            case LightSm.StateId.ON_HOT: return "ON_HOT";
            case LightSm.StateId.ON1: return "ON1";
            case LightSm.StateId.ON2: return "ON2";
            default: return "?";
        }
    }
    
    // Thread safe.
    static eventIdToString(id)
    {
        switch (id)
        {
            case LightSm.EventId.DIM: return "DIM";
            case LightSm.EventId.INC: return "INC";
            case LightSm.EventId.OFF: return "OFF";
            default: return "?";
        }
    }
}
