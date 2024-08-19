// Autogenerated with StateSmith 0.12.0-alpha+99dbe30d387ec88bb0e251bea536ac8980235987.
// Algorithm: Balanced1. See https://github.com/StateSmith/StateSmith/wiki/Algorithms

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
    
    // Used internally by state machine. Don't modify.
    #ancestorEventHandler;
    
    // Used internally by state machine. Don't modify.
    #currentEventHandlers = Array(LightSm.EventIdCount).fill(undefined);
    
    // Used internally by state machine. Don't modify.
    #currentStateExitHandler;
    
    // Variables. Can be used for inputs, outputs, user variables...
    vars = {
        // needs to be set before running the state machine
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
                this.stateId = LightSm.StateId.OFF;
                // No ancestor handles event. Can skip nulling `ancestorEventHandler`.
                return;
            } // end of behavior for ROOT.<InitialState>
        } // end of behavior for ROOT
    }
    
    // Dispatches an event to the state machine. Not thread safe.
    dispatchEvent(eventId)
    {
        let behaviorFunc = this.#currentEventHandlers[eventId];
        
        while (behaviorFunc != null)
        {
            this.#ancestorEventHandler = null;
            behaviorFunc.call(this);
            behaviorFunc = this.#ancestorEventHandler;
        }
    }
    
    // This function is used when StateSmith doesn't know what the active leaf state is at
    // compile time due to sub states or when multiple states need to be exited.
    #exitUpToStateHandler(desiredStateExitHandler)
    {
        while (this.#currentStateExitHandler != desiredStateExitHandler)
        {
            this.#currentStateExitHandler.call(this);
        }
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state ROOT
    ////////////////////////////////////////////////////////////////////////////////
    
    #ROOT_enter()
    {
        // setup trigger/event handlers
        this.#currentStateExitHandler = this.#ROOT_exit;
    }
    
    #ROOT_exit()
    {
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state OFF
    ////////////////////////////////////////////////////////////////////////////////
    
    #OFF_enter()
    {
        // setup trigger/event handlers
        this.#currentStateExitHandler = this.#OFF_exit;
        this.#currentEventHandlers[LightSm.EventId.ON_PRESS] = this.#OFF_on_press;
        
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
        // adjust function pointers for this state's exit
        this.#currentStateExitHandler = this.#ROOT_exit;
        this.#currentEventHandlers[LightSm.EventId.ON_PRESS] = null;  // no ancestor listens to this event
    }
    
    #OFF_on_press()
    {
        // No ancestor state handles `on_press` event.
        
        // OFF behavior
        // uml: ON_PRESS TransitionTo(ON1)
        {
            // Step 1: Exit states until we reach `ROOT` state (Least Common Ancestor for transition).
            this.#OFF_exit();
            
            // Step 2: Transition action: ``.
            
            // Step 3: Enter/move towards transition target `ON1`.
            this.#ON1_enter();
            
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            this.stateId = LightSm.StateId.ON1;
            // No ancestor handles event. Can skip nulling `ancestorEventHandler`.
            return;
        } // end of behavior for OFF
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state ON1
    ////////////////////////////////////////////////////////////////////////////////
    
    #ON1_enter()
    {
        // setup trigger/event handlers
        this.#currentStateExitHandler = this.#ON1_exit;
        this.#currentEventHandlers[LightSm.EventId.DO] = this.#ON1_do;
        this.#currentEventHandlers[LightSm.EventId.OFF_PRESS] = this.#ON1_off_press;
        
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
        // adjust function pointers for this state's exit
        this.#currentStateExitHandler = this.#ROOT_exit;
        this.#currentEventHandlers[LightSm.EventId.DO] = null;  // no ancestor listens to this event
        this.#currentEventHandlers[LightSm.EventId.OFF_PRESS] = null;  // no ancestor listens to this event
    }
    
    #ON1_do()
    {
        // No ancestor state handles `do` event.
        
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
            this.stateId = LightSm.StateId.OFF;
            // No ancestor handles event. Can skip nulling `ancestorEventHandler`.
            return;
        } // end of behavior for ON1
    }
    
    #ON1_off_press()
    {
        // No ancestor state handles `off_press` event.
        
        // ON1 behavior
        // uml: OFF_PRESS TransitionTo(OFF)
        {
            // Step 1: Exit states until we reach `ROOT` state (Least Common Ancestor for transition).
            this.#ON1_exit();
            
            // Step 2: Transition action: ``.
            
            // Step 3: Enter/move towards transition target `OFF`.
            this.#OFF_enter();
            
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            this.stateId = LightSm.StateId.OFF;
            // No ancestor handles event. Can skip nulling `ancestorEventHandler`.
            return;
        } // end of behavior for ON1
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
