// Autogenerated with StateSmith 0.16.0+33b97786003f067f9b746ce5870937de5ee23d56.
// Algorithm: Balanced2. See https://github.com/StateSmith/StateSmith/wiki/Algorithms

// Generated state machine
class LightSm
{
    static EventId = 
    {
        DO : 0, // The `do` event is special. State event handlers do not consume this event (ancestors all get it too) unless a transition occurs.
        OFF_PRESS : 1,
        ON_PRESS : 2,
    }
    static { Object.freeze(this.EventId); }
    
    static EventIdCount = 3;
    static { Object.freeze(this.EventIdCount); }
    
    static StateId = 
    {
        ROOT : 0,
        OFF : 1,
        ON1 : 2,
    }
    static { Object.freeze(this.StateId); }
    
    static StateIdCount = 3;
    static { Object.freeze(this.StateIdCount); }
    
    // Used internally by state machine. Feel free to inspect, but don't modify.
    stateId;
    
    // Variables. Can be used for inputs, outputs, user variables...
    vars = {
        /**
         * The context object that provides functions and variables to the state machine.
         * This state machine variable must be set before starting the state machine.
         * @type {LightSmContext}
         */
        ctx: null,
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
                    case LightSm.EventId.ON_PRESS: this.#OFF_on_press(); break;
                }
                break;
            
            // STATE: ON1
            case LightSm.StateId.ON1:
                switch (eventId)
                {
                    case LightSm.EventId.OFF_PRESS: this.#ON1_off_press(); break;
                    case LightSm.EventId.DO: this.#ON1_do(); break;
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
        // uml: enter / { ctx.count++; }
        {
            // Step 1: execute action `ctx.count++;`
            this.vars.ctx.count++;
        } // end of behavior for OFF
        
        // OFF behavior
        // uml: enter / { ctx.turnOff(); }
        {
            // Step 1: execute action `ctx.turnOff();`
            this.vars.ctx.turnOff();
        } // end of behavior for OFF
    }
    
    #OFF_exit()
    {
        this.stateId = LightSm.StateId.ROOT;
    }
    
    #OFF_on_press()
    {
        // OFF behavior
        // uml: ON_PRESS TransitionTo(ON1)
        {
            // Step 1: Exit states until we reach `ROOT` state (Least Common Ancestor for transition).
            this.#OFF_exit();
            
            // Step 2: Transition action: ``.
            
            // Step 3: Enter/move towards transition target `ON1`.
            this.#ON1_enter();
            
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            return;
        } // end of behavior for OFF
        
        // No ancestor handles this event.
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state ON1
    ////////////////////////////////////////////////////////////////////////////////
    
    #ON1_enter()
    {
        this.stateId = LightSm.StateId.ON1;
        
        // ON1 behavior
        // uml: enter / { ctx.turnOn(); }
        {
            // Step 1: execute action `ctx.turnOn();`
            this.vars.ctx.turnOn();
        } // end of behavior for ON1
        
        // ON1 behavior
        // uml: enter / { ctx.resetTimer(); }
        {
            // Step 1: execute action `ctx.resetTimer();`
            this.vars.ctx.resetTimer();
        } // end of behavior for ON1
    }
    
    #ON1_exit()
    {
        this.stateId = LightSm.StateId.ROOT;
    }
    
    #ON1_do()
    {
        // ON1 behavior
        // uml: do [ctx.isTimerExpired()] TransitionTo(OFF)
        if (this.vars.ctx.isTimerExpired())
        {
            // Step 1: Exit states until we reach `ROOT` state (Least Common Ancestor for transition).
            this.#ON1_exit();
            
            // Step 2: Transition action: ``.
            
            // Step 3: Enter/move towards transition target `OFF`.
            this.#OFF_enter();
            
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            return;
        } // end of behavior for ON1
        
        // No ancestor handles this event.
    }
    
    #ON1_off_press()
    {
        // ON1 behavior
        // uml: OFF_PRESS TransitionTo(OFF)
        {
            // Step 1: Exit states until we reach `ROOT` state (Least Common Ancestor for transition).
            this.#ON1_exit();
            
            // Step 2: Transition action: ``.
            
            // Step 3: Enter/move towards transition target `OFF`.
            this.#OFF_enter();
            
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
            case LightSm.EventId.OFF_PRESS: return "OFF_PRESS";
            case LightSm.EventId.ON_PRESS: return "ON_PRESS";
            default: return "?";
        }
    }
}
