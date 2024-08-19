// Autogenerated with StateSmith 0.12.0-alpha+99dbe30d387ec88bb0e251bea536ac8980235987.
// Algorithm: Balanced1. See https://github.com/StateSmith/StateSmith/wiki/Algorithms

// Generated state machine
class LightSm
{
    static EventId = 
    {
        DO : 0, // The `do` event is special. State event handlers do not consume this event (ancestors all get it too) unless a transition occurs.
        DIM : 1,
        INC : 2,
        OFF : 3,
    }
    static { Object.freeze(this.EventId); }
    
    static EventIdCount = 4;
    static { Object.freeze(this.EventIdCount); }
    
    static StateId = 
    {
        ROOT : 0,
        OFF : 1,
        ON_GROUP : 2,
        ON1 : 3,
        ON2 : 4,
        ON3 : 5,
    }
    static { Object.freeze(this.StateId); }
    
    static StateIdCount = 6;
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
        this.#currentEventHandlers[LightSm.EventId.INC] = this.#OFF_inc;
        
        // OFF behavior
        // uml: enter / { off(); }
        {
            // Step 1: execute action `off();`
            off();
        } // end of behavior for OFF
    }
    
    #OFF_exit()
    {
        // adjust function pointers for this state's exit
        this.#currentStateExitHandler = this.#ROOT_exit;
        this.#currentEventHandlers[LightSm.EventId.INC] = null;  // no ancestor listens to this event
    }
    
    #OFF_inc()
    {
        // No ancestor state handles `inc` event.
        
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
            this.stateId = LightSm.StateId.ON1;
            // No ancestor handles event. Can skip nulling `ancestorEventHandler`.
            return;
        } // end of behavior for OFF
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state ON_GROUP
    ////////////////////////////////////////////////////////////////////////////////
    
    #ON_GROUP_enter()
    {
        // setup trigger/event handlers
        this.#currentStateExitHandler = this.#ON_GROUP_exit;
        this.#currentEventHandlers[LightSm.EventId.OFF] = this.#ON_GROUP_off;
    }
    
    #ON_GROUP_exit()
    {
        // adjust function pointers for this state's exit
        this.#currentStateExitHandler = this.#ROOT_exit;
        this.#currentEventHandlers[LightSm.EventId.OFF] = null;  // no ancestor listens to this event
    }
    
    #ON_GROUP_off()
    {
        // No ancestor state handles `off` event.
        
        // ON_GROUP behavior
        // uml: OFF TransitionTo(OFF)
        {
            // Step 1: Exit states until we reach `ROOT` state (Least Common Ancestor for transition).
            this.#exitUpToStateHandler(this.#ROOT_exit);
            
            // Step 2: Transition action: ``.
            
            // Step 3: Enter/move towards transition target `OFF`.
            this.#OFF_enter();
            
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            this.stateId = LightSm.StateId.OFF;
            // No ancestor handles event. Can skip nulling `ancestorEventHandler`.
            return;
        } // end of behavior for ON_GROUP
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state ON1
    ////////////////////////////////////////////////////////////////////////////////
    
    #ON1_enter()
    {
        // setup trigger/event handlers
        this.#currentStateExitHandler = this.#ON1_exit;
        this.#currentEventHandlers[LightSm.EventId.DIM] = this.#ON1_dim;
        this.#currentEventHandlers[LightSm.EventId.INC] = this.#ON1_inc;
        
        // ON1 behavior
        // uml: enter / { blueLaser(); }
        {
            // Step 1: execute action `blueLaser();`
            blueLaser();
        } // end of behavior for ON1
    }
    
    #ON1_exit()
    {
        // adjust function pointers for this state's exit
        this.#currentStateExitHandler = this.#ON_GROUP_exit;
        this.#currentEventHandlers[LightSm.EventId.DIM] = null;  // no ancestor listens to this event
        this.#currentEventHandlers[LightSm.EventId.INC] = null;  // no ancestor listens to this event
    }
    
    #ON1_dim()
    {
        // No ancestor state handles `dim` event.
        
        // ON1 behavior
        // uml: DIM TransitionTo(OFF)
        {
            // Step 1: Exit states until we reach `ROOT` state (Least Common Ancestor for transition).
            this.#exitUpToStateHandler(this.#ROOT_exit);
            
            // Step 2: Transition action: ``.
            
            // Step 3: Enter/move towards transition target `OFF`.
            this.#OFF_enter();
            
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            this.stateId = LightSm.StateId.OFF;
            // No ancestor handles event. Can skip nulling `ancestorEventHandler`.
            return;
        } // end of behavior for ON1
    }
    
    #ON1_inc()
    {
        // No ancestor state handles `inc` event.
        
        // ON1 behavior
        // uml: INC TransitionTo(ON2)
        {
            // Step 1: Exit states until we reach `ON_GROUP` state (Least Common Ancestor for transition).
            this.#ON1_exit();
            
            // Step 2: Transition action: ``.
            
            // Step 3: Enter/move towards transition target `ON2`.
            this.#ON2_enter();
            
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            this.stateId = LightSm.StateId.ON2;
            // No ancestor handles event. Can skip nulling `ancestorEventHandler`.
            return;
        } // end of behavior for ON1
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state ON2
    ////////////////////////////////////////////////////////////////////////////////
    
    #ON2_enter()
    {
        // setup trigger/event handlers
        this.#currentStateExitHandler = this.#ON2_exit;
        this.#currentEventHandlers[LightSm.EventId.DIM] = this.#ON2_dim;
        this.#currentEventHandlers[LightSm.EventId.INC] = this.#ON2_inc;
        
        // ON2 behavior
        // uml: enter / { yellowLaser(); }
        {
            // Step 1: execute action `yellowLaser();`
            yellowLaser();
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
        // adjust function pointers for this state's exit
        this.#currentStateExitHandler = this.#ON_GROUP_exit;
        this.#currentEventHandlers[LightSm.EventId.DIM] = null;  // no ancestor listens to this event
        this.#currentEventHandlers[LightSm.EventId.INC] = null;  // no ancestor listens to this event
    }
    
    #ON2_dim()
    {
        // No ancestor state handles `dim` event.
        
        // ON2 behavior
        // uml: DIM TransitionTo(ON1)
        {
            // Step 1: Exit states until we reach `ON_GROUP` state (Least Common Ancestor for transition).
            this.#ON2_exit();
            
            // Step 2: Transition action: ``.
            
            // Step 3: Enter/move towards transition target `ON1`.
            this.#ON1_enter();
            
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            this.stateId = LightSm.StateId.ON1;
            // No ancestor handles event. Can skip nulling `ancestorEventHandler`.
            return;
        } // end of behavior for ON2
    }
    
    #ON2_inc()
    {
        // No ancestor state handles `inc` event.
        
        // ON2 behavior
        // uml: 1. INC / { count++; }
        {
            // Step 1: execute action `count++;`
            this.vars.count++;
            
            // Step 2: determine if ancestor gets to handle event next.
            // No ancestor handles event. Can skip nulling `ancestorEventHandler`.
        } // end of behavior for ON2
        
        // ON2 behavior
        // uml: INC [count >= 3] TransitionTo(ON3)
        if (this.vars.count >= 3)
        {
            // Step 1: Exit states until we reach `ON_GROUP` state (Least Common Ancestor for transition).
            this.#ON2_exit();
            
            // Step 2: Transition action: ``.
            
            // Step 3: Enter/move towards transition target `ON3`.
            this.#ON3_enter();
            
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            this.stateId = LightSm.StateId.ON3;
            // No ancestor handles event. Can skip nulling `ancestorEventHandler`.
            return;
        } // end of behavior for ON2
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////
    // event handlers for state ON3
    ////////////////////////////////////////////////////////////////////////////////
    
    #ON3_enter()
    {
        // setup trigger/event handlers
        this.#currentStateExitHandler = this.#ON3_exit;
        this.#currentEventHandlers[LightSm.EventId.DIM] = this.#ON3_dim;
        this.#currentEventHandlers[LightSm.EventId.DO] = this.#ON3_do;
        
        // ON3 behavior
        // uml: enter / { redLaser(); }
        {
            // Step 1: execute action `redLaser();`
            redLaser();
        } // end of behavior for ON3
        
        // ON3 behavior
        // uml: enter / { count = 5 * 2; }
        {
            // Step 1: execute action `count = 5 * 2;`
            this.vars.count = 5 * 2;
        } // end of behavior for ON3
    }
    
    #ON3_exit()
    {
        // adjust function pointers for this state's exit
        this.#currentStateExitHandler = this.#ON_GROUP_exit;
        this.#currentEventHandlers[LightSm.EventId.DIM] = null;  // no ancestor listens to this event
        this.#currentEventHandlers[LightSm.EventId.DO] = null;  // no ancestor listens to this event
    }
    
    #ON3_dim()
    {
        // No ancestor state handles `dim` event.
        
        // ON3 behavior
        // uml: DIM TransitionTo(ON2)
        {
            // Step 1: Exit states until we reach `ON_GROUP` state (Least Common Ancestor for transition).
            this.#ON3_exit();
            
            // Step 2: Transition action: ``.
            
            // Step 3: Enter/move towards transition target `ON2`.
            this.#ON2_enter();
            
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            this.stateId = LightSm.StateId.ON2;
            // No ancestor handles event. Can skip nulling `ancestorEventHandler`.
            return;
        } // end of behavior for ON3
    }
    
    #ON3_do()
    {
        // No ancestor state handles `do` event.
        
        // ON3 behavior
        // uml: 1. do / { count--; }
        {
            // Step 1: execute action `count--;`
            this.vars.count--;
            
            // Step 2: determine if ancestor gets to handle event next.
            // Don't consume special `do` event.
        } // end of behavior for ON3
        
        // ON3 behavior
        // uml: do [count <= 0] TransitionTo(OFF)
        if (this.vars.count <= 0)
        {
            // Step 1: Exit states until we reach `ROOT` state (Least Common Ancestor for transition).
            this.#exitUpToStateHandler(this.#ROOT_exit);
            
            // Step 2: Transition action: ``.
            
            // Step 3: Enter/move towards transition target `OFF`.
            this.#OFF_enter();
            
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            this.stateId = LightSm.StateId.OFF;
            // No ancestor handles event. Can skip nulling `ancestorEventHandler`.
            return;
        } // end of behavior for ON3
    }
    
    // Thread safe.
    static stateIdToString(id)
    {
        switch (id)
        {
            case LightSm.StateId.ROOT: return "ROOT";
            case LightSm.StateId.OFF: return "OFF";
            case LightSm.StateId.ON_GROUP: return "ON_GROUP";
            case LightSm.StateId.ON1: return "ON1";
            case LightSm.StateId.ON2: return "ON2";
            case LightSm.StateId.ON3: return "ON3";
            default: return "?";
        }
    }
    
    // Thread safe.
    static eventIdToString(id)
    {
        switch (id)
        {
            case LightSm.EventId.DIM: return "DIM";
            case LightSm.EventId.DO: return "DO";
            case LightSm.EventId.INC: return "INC";
            case LightSm.EventId.OFF: return "OFF";
            default: return "?";
        }
    }
}
