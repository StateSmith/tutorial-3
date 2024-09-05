// Autogenerated with StateSmith 0.13.2+aa5928542b575391637cb5e1a7821184f6c3932c.
// Algorithm: Balanced2. See https://github.com/StateSmith/StateSmith/wiki/Algorithms

// Whatever you put in this `FileTop` section will end up 
// being printed at the top of every generated code file.

#include "LightSm.h"
#include <stdbool.h> // required for `consume_event` flag
#include <string.h> // for memset
#include "Light.h" // user include. required for Light functions.
#include <iostream> // user include. required for printf.


// This function is used when StateSmith doesn't know what the active leaf state is at
// compile time due to sub states or when multiple states need to be exited.
static void exit_up_to_state_handler(LightSm* sm, LightSm_StateId desired_state);

static void ROOT_enter(LightSm* sm);

static void OFF_enter(LightSm* sm);

static void OFF_exit(LightSm* sm);

static void OFF_inc(LightSm* sm);

static void ON_GROUP_enter(LightSm* sm);

static void ON_GROUP_exit(LightSm* sm);

static void ON_GROUP_off(LightSm* sm);

static void ON_HOT_enter(LightSm* sm);

static void ON_HOT_exit(LightSm* sm);

static void ON_HOT_dim(LightSm* sm);

static void ON1_enter(LightSm* sm);

static void ON1_exit(LightSm* sm);

static void ON1_dim(LightSm* sm);

static void ON1_inc(LightSm* sm);

static void ON2_enter(LightSm* sm);

static void ON2_exit(LightSm* sm);

static void ON2_dim(LightSm* sm);

static void ON2_inc(LightSm* sm);


// State machine constructor. Must be called before start or dispatch event functions. Not thread safe.
void LightSm_ctor(LightSm* sm)
{
    memset(sm, 0, sizeof(*sm));
}

// Starts the state machine. Must be called before dispatching events. Not thread safe.
void LightSm_start(LightSm* sm)
{
    ROOT_enter(sm);
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
            OFF_enter(sm);
            
            // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            return;
        } // end of behavior for ROOT.<InitialState>
    } // end of behavior for ROOT
}

// Dispatches an event to the state machine. Not thread safe.
// Note! This function assumes that the `event_id` parameter is valid.
void LightSm_dispatch_event(LightSm* sm, LightSm_EventId event_id)
{
    switch (sm->state_id)
    {
        // STATE: LightSm
        case LightSm_StateId_ROOT:
            switch (event_id)
            {
                // Events not handled by this state:
                case LightSm_EventId_INC: break;
                case LightSm_EventId_OFF: break;
                case LightSm_EventId_DIM: break;
            }
            break;
        
        // STATE: OFF
        case LightSm_StateId_OFF:
            switch (event_id)
            {
                case LightSm_EventId_INC: OFF_inc(sm); break;
                // Events not handled by this state:
                case LightSm_EventId_OFF: break;
                case LightSm_EventId_DIM: break;
            }
            break;
        
        // STATE: ON_GROUP
        case LightSm_StateId_ON_GROUP:
            switch (event_id)
            {
                case LightSm_EventId_OFF: ON_GROUP_off(sm); break;
                // Events not handled by this state:
                case LightSm_EventId_INC: break;
                case LightSm_EventId_DIM: break;
            }
            break;
        
        // STATE: ON_HOT
        case LightSm_StateId_ON_HOT:
            switch (event_id)
            {
                case LightSm_EventId_DIM: ON_HOT_dim(sm); break;
                // Events not handled by this state:
                case LightSm_EventId_INC: break;
                case LightSm_EventId_OFF: ON_GROUP_off(sm); break; // First ancestor handler for this event
            }
            break;
        
        // STATE: ON1
        case LightSm_StateId_ON1:
            switch (event_id)
            {
                case LightSm_EventId_INC: ON1_inc(sm); break;
                case LightSm_EventId_DIM: ON1_dim(sm); break;
                // Events not handled by this state:
                case LightSm_EventId_OFF: ON_GROUP_off(sm); break; // First ancestor handler for this event
            }
            break;
        
        // STATE: ON2
        case LightSm_StateId_ON2:
            switch (event_id)
            {
                case LightSm_EventId_INC: ON2_inc(sm); break;
                case LightSm_EventId_DIM: ON2_dim(sm); break;
                // Events not handled by this state:
                case LightSm_EventId_OFF: ON_GROUP_off(sm); break; // First ancestor handler for this event
            }
            break;
    }
    
}

// This function is used when StateSmith doesn't know what the active leaf state is at
// compile time due to sub states or when multiple states need to be exited.
static void exit_up_to_state_handler(LightSm* sm, LightSm_StateId desired_state)
{
    while (sm->state_id != desired_state)
    {
        switch (sm->state_id)
        {
            case LightSm_StateId_OFF: OFF_exit(sm); break;
            
            case LightSm_StateId_ON_GROUP: ON_GROUP_exit(sm); break;
            
            case LightSm_StateId_ON_HOT: ON_HOT_exit(sm); break;
            
            case LightSm_StateId_ON1: ON1_exit(sm); break;
            
            case LightSm_StateId_ON2: ON2_exit(sm); break;
            
            default: return;  // Just to be safe. Prevents infinite loop if state ID memory is somehow corrupted.
        }
    }
}


////////////////////////////////////////////////////////////////////////////////
// event handlers for state ROOT
////////////////////////////////////////////////////////////////////////////////

static void ROOT_enter(LightSm* sm)
{
    sm->state_id = LightSm_StateId_ROOT;
}


////////////////////////////////////////////////////////////////////////////////
// event handlers for state OFF
////////////////////////////////////////////////////////////////////////////////

static void OFF_enter(LightSm* sm)
{
    sm->state_id = LightSm_StateId_OFF;
    
    // OFF behavior
    // uml: enter / { std::cout << "Light is OFF" << std::endl; }
    {
        // Step 1: execute action `std::cout << "Light is OFF" << std::endl;`
        std::cout << "Light is OFF" << std::endl;
    } // end of behavior for OFF
}

static void OFF_exit(LightSm* sm)
{
    sm->state_id = LightSm_StateId_ROOT;
}

static void OFF_inc(LightSm* sm)
{
    // OFF behavior
    // uml: INC TransitionTo(ON1)
    {
        // Step 1: Exit states until we reach `ROOT` state (Least Common Ancestor for transition).
        OFF_exit(sm);
        
        // Step 2: Transition action: ``.
        
        // Step 3: Enter/move towards transition target `ON1`.
        ON_GROUP_enter(sm);
        ON1_enter(sm);
        
        // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
        return;
    } // end of behavior for OFF
    
    // No ancestor handles this event.
}


////////////////////////////////////////////////////////////////////////////////
// event handlers for state ON_GROUP
////////////////////////////////////////////////////////////////////////////////

static void ON_GROUP_enter(LightSm* sm)
{
    sm->state_id = LightSm_StateId_ON_GROUP;
}

static void ON_GROUP_exit(LightSm* sm)
{
    sm->state_id = LightSm_StateId_ROOT;
}

static void ON_GROUP_off(LightSm* sm)
{
    // ON_GROUP behavior
    // uml: OFF TransitionTo(OFF)
    {
        // Step 1: Exit states until we reach `ROOT` state (Least Common Ancestor for transition).
        exit_up_to_state_handler(sm, LightSm_StateId_ROOT);
        
        // Step 2: Transition action: ``.
        
        // Step 3: Enter/move towards transition target `OFF`.
        OFF_enter(sm);
        
        // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
        return;
    } // end of behavior for ON_GROUP
    
    // No ancestor handles this event.
}


////////////////////////////////////////////////////////////////////////////////
// event handlers for state ON_HOT
////////////////////////////////////////////////////////////////////////////////

static void ON_HOT_enter(LightSm* sm)
{
    sm->state_id = LightSm_StateId_ON_HOT;
    
    // ON_HOT behavior
    // uml: enter / { Light::red(); }
    {
        // Step 1: execute action `Light::red();`
        Light::red();
    } // end of behavior for ON_HOT
}

static void ON_HOT_exit(LightSm* sm)
{
    sm->state_id = LightSm_StateId_ON_GROUP;
}

static void ON_HOT_dim(LightSm* sm)
{
    // ON_HOT behavior
    // uml: DIM TransitionTo(ON2)
    {
        // Step 1: Exit states until we reach `ON_GROUP` state (Least Common Ancestor for transition).
        ON_HOT_exit(sm);
        
        // Step 2: Transition action: ``.
        
        // Step 3: Enter/move towards transition target `ON2`.
        ON2_enter(sm);
        
        // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
        return;
    } // end of behavior for ON_HOT
    
    // No ancestor handles this event.
}


////////////////////////////////////////////////////////////////////////////////
// event handlers for state ON1
////////////////////////////////////////////////////////////////////////////////

static void ON1_enter(LightSm* sm)
{
    sm->state_id = LightSm_StateId_ON1;
    
    // ON1 behavior
    // uml: enter / { Light::blue(); }
    {
        // Step 1: execute action `Light::blue();`
        Light::blue();
    } // end of behavior for ON1
}

static void ON1_exit(LightSm* sm)
{
    sm->state_id = LightSm_StateId_ON_GROUP;
}

static void ON1_dim(LightSm* sm)
{
    // ON1 behavior
    // uml: DIM TransitionTo(OFF)
    {
        // Step 1: Exit states until we reach `ROOT` state (Least Common Ancestor for transition).
        exit_up_to_state_handler(sm, LightSm_StateId_ROOT);
        
        // Step 2: Transition action: ``.
        
        // Step 3: Enter/move towards transition target `OFF`.
        OFF_enter(sm);
        
        // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
        return;
    } // end of behavior for ON1
    
    // No ancestor handles this event.
}

static void ON1_inc(LightSm* sm)
{
    // ON1 behavior
    // uml: INC TransitionTo(ON2)
    {
        // Step 1: Exit states until we reach `ON_GROUP` state (Least Common Ancestor for transition).
        ON1_exit(sm);
        
        // Step 2: Transition action: ``.
        
        // Step 3: Enter/move towards transition target `ON2`.
        ON2_enter(sm);
        
        // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
        return;
    } // end of behavior for ON1
    
    // No ancestor handles this event.
}


////////////////////////////////////////////////////////////////////////////////
// event handlers for state ON2
////////////////////////////////////////////////////////////////////////////////

static void ON2_enter(LightSm* sm)
{
    sm->state_id = LightSm_StateId_ON2;
    
    // ON2 behavior
    // uml: enter / { Light::yellow(); }
    {
        // Step 1: execute action `Light::yellow();`
        Light::yellow();
    } // end of behavior for ON2
    
    // ON2 behavior
    // uml: enter / { count = 0; }
    {
        // Step 1: execute action `count = 0;`
        sm->vars.count = 0;
    } // end of behavior for ON2
}

static void ON2_exit(LightSm* sm)
{
    sm->state_id = LightSm_StateId_ON_GROUP;
}

static void ON2_dim(LightSm* sm)
{
    // ON2 behavior
    // uml: DIM TransitionTo(ON1)
    {
        // Step 1: Exit states until we reach `ON_GROUP` state (Least Common Ancestor for transition).
        ON2_exit(sm);
        
        // Step 2: Transition action: ``.
        
        // Step 3: Enter/move towards transition target `ON1`.
        ON1_enter(sm);
        
        // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
        return;
    } // end of behavior for ON2
    
    // No ancestor handles this event.
}

static void ON2_inc(LightSm* sm)
{
    // ON2 behavior
    // uml: 1. INC / { count++; }
    {
        // Step 1: execute action `count++;`
        sm->vars.count++;
    } // end of behavior for ON2
    
    // ON2 behavior
    // uml: 2. INC / { std::cout << "    Count: " << count << std::endl; }
    {
        // Step 1: execute action `std::cout << "    Count: " << count << std::endl;`
        std::cout << "    Count: " << sm->vars.count << std::endl;
    } // end of behavior for ON2
    
    // ON2 behavior
    // uml: INC [count >= 3] TransitionTo(ON_HOT)
    if (sm->vars.count >= 3)
    {
        // Step 1: Exit states until we reach `ON_GROUP` state (Least Common Ancestor for transition).
        ON2_exit(sm);
        
        // Step 2: Transition action: ``.
        
        // Step 3: Enter/move towards transition target `ON_HOT`.
        ON_HOT_enter(sm);
        
        // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
        return;
    } // end of behavior for ON2
    
    // No ancestor handles this event.
}

// Thread safe.
char const * LightSm_state_id_to_string(LightSm_StateId id)
{
    switch (id)
    {
        case LightSm_StateId_ROOT: return "ROOT";
        case LightSm_StateId_OFF: return "OFF";
        case LightSm_StateId_ON_GROUP: return "ON_GROUP";
        case LightSm_StateId_ON_HOT: return "ON_HOT";
        case LightSm_StateId_ON1: return "ON1";
        case LightSm_StateId_ON2: return "ON2";
        default: return "?";
    }
}

// Thread safe.
char const * LightSm_event_id_to_string(LightSm_EventId id)
{
    switch (id)
    {
        case LightSm_EventId_DIM: return "DIM";
        case LightSm_EventId_INC: return "INC";
        case LightSm_EventId_OFF: return "OFF";
        default: return "?";
    }
}
