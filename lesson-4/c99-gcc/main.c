#include <stdio.h>
#include <stdlib.h>
#include <stdint.h>
#include <stdbool.h>
#include "LightSm.h"

////////////////////////////////////////////////////////////////////////////////
// prototypes
////////////////////////////////////////////////////////////////////////////////

static void read_input_run_state_machine(LightSm *sm);
static char read_char_from_line(void);


////////////////////////////////////////////////////////////////////////////////
// functions
////////////////////////////////////////////////////////////////////////////////

int main(void)
{
    LightSm sm;

    printf("---------------------------------------\n\n");

    printf("USAGE:\n");
    printf("  type i <enter> to send INC event to state machine.\n");
    printf("  type d <enter> to send DIM event to state machine.\n");
    printf("  type o <enter> to send OFF event to state machine.\n");
    printf("\n");
    printf("Hit <enter> to start\n");
    read_char_from_line();

    // setup and start state machine
    LightSm_ctor(&sm);
    LightSm_start(&sm);

    while (true)
    {
        read_input_run_state_machine(&sm);
    }

    return 0;
}

static void read_input_run_state_machine(LightSm *sm)
{
    bool valid_input = true;
    enum LightSm_EventId event_id = LightSm_EventId_OFF;

    printf("\nCurrent state: %s\n", LightSm_state_id_to_string(sm->state_id));
    printf("Please type 'i', 'd', 'o': ");

    char c = read_char_from_line();
    switch (c)
    {
        case 'i': event_id = LightSm_EventId_INC; break;
        case 'd': event_id = LightSm_EventId_DIM; break;
        case 'o': event_id = LightSm_EventId_OFF; break;
        default: valid_input = false; break;
    }

    if (valid_input)
    {
        printf("Dispatching event: %s\n", LightSm_event_id_to_string(event_id));
        LightSm_dispatch_event(sm, event_id);
    }
    else
    {
        printf("Invalid input. Not running state machine.\n");
    }
}

// blocks while waiting for input
static char read_char_from_line(void)
{
    static char s_buf[100];
    char* c_ptr = fgets(s_buf, sizeof(s_buf), stdin);

    if (c_ptr == NULL)
    {
        return '\0';
    }

    return *c_ptr;
}
