#include <stdio.h>
#include <stdlib.h>
#include <stdint.h>
#include <stdbool.h>
#include "LightSm.h"

////////////////////////////////////////////////////////////////////////////////
// global vars
////////////////////////////////////////////////////////////////////////////////

static LightSm g_state_machine;


////////////////////////////////////////////////////////////////////////////////
// prototypes
////////////////////////////////////////////////////////////////////////////////

static void read_input_run_state_machine(void);
static char read_char_from_line(void);


////////////////////////////////////////////////////////////////////////////////
// functions
////////////////////////////////////////////////////////////////////////////////

int main(void)
{
    printf("---------------------------------------\n\n");

    printf("USAGE:\n");
    printf("  type i <enter> to send INC event to state machine.\n");
    printf("  type d <enter> to send DIM event to state machine.\n");
    printf("  type o <enter> to send OFF event to state machine.\n");
    printf("\n");
    printf("Hit <enter> to start\n");
    read_char_from_line();

    // setup and start state machine
    LightSm_ctor(&g_state_machine);
    LightSm_start(&g_state_machine);

    while (true)
    {
        read_input_run_state_machine();
    }

    return 0;
}


static void read_input_run_state_machine(void)
{
    bool valid_input = true;
    enum LightSm_EventId event_id = LightSm_EventId_OFF;

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
        LightSm_dispatch_event(&g_state_machine, event_id);
    }
    else
    {
        printf("What you trying to pull!? Bad input.\n");
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
