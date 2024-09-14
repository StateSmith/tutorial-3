// Autogenerated with StateSmith 0.15.1+0972c4996e63923533225bfed0196abcb8a38419.
// Algorithm: Balanced2. See https://github.com/StateSmith/StateSmith/wiki/Algorithms

// Whatever you put in this `FileTop` section will end up 
// being printed at the top of every generated code file.

#pragma once  // You can also specify normal include guard. See https://github.com/StateSmith/StateSmith/issues/112
#include <stdint.h>
// any additional includes you want in the header file


typedef enum LightSm_EventId
{
    LightSm_EventId_DIM = 0,
    LightSm_EventId_INC = 1,
    LightSm_EventId_OFF = 2
} LightSm_EventId;

enum
{
    LightSm_EventIdCount = 3
};

typedef enum LightSm_StateId
{
    LightSm_StateId_ROOT = 0,
    LightSm_StateId_OFF = 1,
    LightSm_StateId_ON_GROUP = 2,
    LightSm_StateId_ON_HOT = 3,
    LightSm_StateId_ON1 = 4,
    LightSm_StateId_ON2 = 5
} LightSm_StateId;

enum
{
    LightSm_StateIdCount = 6
};


// Generated state machine
// forward declaration
typedef struct LightSm LightSm;

// State machine variables. Can be used for inputs, outputs, user variables...
typedef struct LightSm_Vars
{
    uint16_t count; // this var can be referenced in diagram
} LightSm_Vars;


// State machine constructor. Must be called before start or dispatch event functions. Not thread safe.
void LightSm_ctor(LightSm* sm);

// Starts the state machine. Must be called before dispatching events. Not thread safe.
void LightSm_start(LightSm* sm);

// Dispatches an event to the state machine. Not thread safe.
// Note! This function assumes that the `event_id` parameter is valid.
void LightSm_dispatch_event(LightSm* sm, LightSm_EventId event_id);

// Thread safe.
char const * LightSm_state_id_to_string(LightSm_StateId id);

// Thread safe.
char const * LightSm_event_id_to_string(LightSm_EventId id);

// Generated state machine
struct LightSm
{
    // Used internally by state machine. Feel free to inspect, but don't modify.
    LightSm_StateId state_id;
    
    // Variables. Can be used for inputs, outputs, user variables...
    LightSm_Vars vars;
};

