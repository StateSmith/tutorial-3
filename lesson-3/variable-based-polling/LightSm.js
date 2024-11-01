// Autogenerated with StateSmith 0.17.1+3dba8261f1470ff8db4b6e247bff1948d68b9351.
// Algorithm: Balanced2. See https://github.com/StateSmith/StateSmith/wiki/Algorithms

// Generated state machine
class LightSm
{
    static EventId = 
    {
        DO : 0, // The `do` event is special. State event handlers do not consume this event (ancestors all get it too) unless a transition occurs.
    }
    static { Object.freeze(this.EventId); }
    
    static EventIdCount = 1;
    static { Object.freeze(this.EventIdCount); }
    
    static StateId = 
    {
        ROOT : 0,
        OFF : 1,
        OFF_READY : 2,
        OFF_TIMED_OUT : 3,
        ON1 : 4,
    }
    static { Object.freeze(this.StateId); }
    
    static StateIdCount = 5;
    static { Object.freeze(this.StateIdCount); }
    
    // Used internally by state machine. Feel free to inspect, but don't modify.
    stateId;
    
    // Variables. Can be used for inputs, outputs, user variables...
    vars = {
        // INPUTs
        input_active: false,
        timer_ms: 0, // state machine clears this value as needed
        // OUTPUTs from the state machine
        font_color: "white",
        bg_color: "grey",
        count: 0,
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
                
                // Finish transition by calling pseudo state transition function.
                this.#OFF_InitialState_transition();
                return; // event processing immediately stops when a transition finishes. No other behaviors for this state are checked.
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
                // state and ancestors have no handler for `do` event.
                break;
            
            // STATE: OFF
            case LightSm.StateId.OFF:
                // state and ancestors have no handler for `do` event.
                break;
            
            // STATE: OFF_READY
            case LightSm.StateId.OFF_READY:
                this.#OFF_READY_do(); 
                break;
            
            // STATE: OFF_TIMED_OUT
            case LightSm.StateId.OFF_TIMED_OUT:
                this.#OFF_TIMED_OUT_do(); 
                break;
            
            // STATE: ON1
            case LightSm.StateId.ON1:
                this.#ON1_do(); 
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
                
                case LightSm.StateId.OFF_READY: this.#OFF_READY_exit(); break;
                
                case LightSm.StateId.OFF_TIMED_OUT: this.#OFF_TIMED_OUT_exit(); break;
                
                case LightSm.StateId.ON1: this.#ON1_exit(); break;
                
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
        // uml: enter / { count++; }
        {
            // Step 1: execute action `count++;`
            this.vars.count++;
        } // end of behavior for OFF
        
        // OFF behavior
        // uml: enter / { font_color = "white"; }
        {
            // Step 1: execute action `font_color = "white";`
            this.vars.font_color = "white";
        } // end of behavior for OFF
        
        // OFF behavior
        // uml: enter / { bg_color = "black"; }
        {
            // Step 1: execute action `bg_color = "black";`
            this.vars.bg_color = "black";
        } // end of behavior for OFF
    }
    
    #OFF_exit()
    {
        this.stateId = LightSm.StateId.ROOT;
    }
    
    #OFF_InitialState_transition()
    {
        // OFF.<InitialState> behavior
        // uml: TransitionTo(OFF_READY)
        {
            // Step 1: Exit states until we reach `OFF` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
            
            // Step 2: Transition action: ``.
            
            // Step 3: Enter/move towards transition target `OFF_READY`.
            this.#OFF_READY_enter();
            
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            return;
        } // end of behavior for OFF.<InitialState>
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state OFF_READY
    ////////////////////////////////////////////////////////////////////////////////
    
    #OFF_READY_enter()
    {
        this.stateId = LightSm.StateId.OFF_READY;
    }
    
    #OFF_READY_exit()
    {
        this.stateId = LightSm.StateId.OFF;
    }
    
    #OFF_READY_do()
    {
        // OFF_READY behavior
        // uml: do [input_active] TransitionTo(ON1)
        if (this.vars.input_active)
        {
            // Step 1: Exit states until we reach `ROOT` state (Least Common Ancestor for transition).
            this.#exitUpToStateHandler(LightSm.StateId.ROOT);
            
            // Step 2: Transition action: ``.
            
            // Step 3: Enter/move towards transition target `ON1`.
            this.#ON1_enter();
            
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            return;
        } // end of behavior for OFF_READY
        
        // No ancestor handles this event.
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state OFF_TIMED_OUT
    ////////////////////////////////////////////////////////////////////////////////
    
    #OFF_TIMED_OUT_enter()
    {
        this.stateId = LightSm.StateId.OFF_TIMED_OUT;
    }
    
    #OFF_TIMED_OUT_exit()
    {
        this.stateId = LightSm.StateId.OFF;
    }
    
    #OFF_TIMED_OUT_do()
    {
        // OFF_TIMED_OUT behavior
        // uml: do [! input_active] TransitionTo(OFF_READY)
        if (! this.vars.input_active)
        {
            // Step 1: Exit states until we reach `OFF` state (Least Common Ancestor for transition).
            this.#OFF_TIMED_OUT_exit();
            
            // Step 2: Transition action: ``.
            
            // Step 3: Enter/move towards transition target `OFF_READY`.
            this.#OFF_READY_enter();
            
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            return;
        } // end of behavior for OFF_TIMED_OUT
        
        // No ancestor handles this event.
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state ON1
    ////////////////////////////////////////////////////////////////////////////////
    
    #ON1_enter()
    {
        this.stateId = LightSm.StateId.ON1;
        
        // ON1 behavior
        // uml: enter / { font_color = "black"; }
        {
            // Step 1: execute action `font_color = "black";`
            this.vars.font_color = "black";
        } // end of behavior for ON1
        
        // ON1 behavior
        // uml: enter / { bg_color = "yellow"; }
        {
            // Step 1: execute action `bg_color = "yellow";`
            this.vars.bg_color = "yellow";
        } // end of behavior for ON1
        
        // ON1 behavior
        // uml: enter / { timer_ms = 0; }
        {
            // Step 1: execute action `timer_ms = 0;`
            this.vars.timer_ms = 0;
        } // end of behavior for ON1
    }
    
    #ON1_exit()
    {
        this.stateId = LightSm.StateId.ROOT;
    }
    
    #ON1_do()
    {
        // ON1 behavior
        // uml: do [! input_active] TransitionTo(OFF)
        if (! this.vars.input_active)
        {
            // Step 1: Exit states until we reach `ROOT` state (Least Common Ancestor for transition).
            this.#ON1_exit();
            
            // Step 2: Transition action: ``.
            
            // Step 3: Enter/move towards transition target `OFF`.
            this.#OFF_enter();
            
            // Finish transition by calling pseudo state transition function.
            this.#OFF_InitialState_transition();
            return; // event processing immediately stops when a transition finishes. No other behaviors for this state are checked.
        } // end of behavior for ON1
        
        // ON1 behavior
        // uml: do [timer_ms > 3000] TransitionTo(OFF_TIMED_OUT)
        if (this.vars.timer_ms > 3000)
        {
            // Step 1: Exit states until we reach `ROOT` state (Least Common Ancestor for transition).
            this.#ON1_exit();
            
            // Step 2: Transition action: ``.
            
            // Step 3: Enter/move towards transition target `OFF_TIMED_OUT`.
            this.#OFF_enter();
            this.#OFF_TIMED_OUT_enter();
            
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            return;
        } // end of behavior for ON1
        
        // No ancestor handles this event.
    }
    
    // Thread safe.
    static stateIdToString(id)
    {
        switch (id)
        {
            case LightSm.StateId.ROOT: return "ROOT";
            case LightSm.StateId.OFF: return "OFF";
            case LightSm.StateId.OFF_READY: return "OFF_READY";
            case LightSm.StateId.OFF_TIMED_OUT: return "OFF_TIMED_OUT";
            case LightSm.StateId.ON1: return "ON1";
            default: return "?";
        }
    }
    
    // Thread safe.
    static eventIdToString(id)
    {
        switch (id)
        {
            case LightSm.EventId.DO: return "DO";
            default: return "?";
        }
    }
}
