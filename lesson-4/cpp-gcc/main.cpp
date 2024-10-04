#include <iostream>
#include <string>

#include "LightSm.h"

////////////////////////////////////////////////////////////////////////////////
// prototypes
////////////////////////////////////////////////////////////////////////////////

static void read_input_run_state_machine(LightSm& sm);
static char read_char_from_line(void);


////////////////////////////////////////////////////////////////////////////////
// functions
////////////////////////////////////////////////////////////////////////////////

int main(void)
{
    LightSm sm;

    std::cout << "---------------------------------------\n\n";
    std::cout << "USAGE:\n";
    std::cout << "  type i <enter> to send INCREASE event to state machine.\n";
    std::cout << "  type d <enter> to send DIM event to state machine.\n";
    std::cout << "  type o <enter> to send OFF event to state machine.\n";
    std::cout << "\n";
    std::cout << "Hit <enter> to start\n";

    read_char_from_line();

    // setup and start state machine
    LightSm_ctor(&sm);
    LightSm_start(&sm);

    while (true)
    {
        read_input_run_state_machine(sm);
    }

    return 0;
}

static void read_input_run_state_machine(LightSm& sm)
{
    bool valid_input = true;
    enum LightSm_EventId event_id = LightSm_EventId_OFF;

    std::cout << "\nCurrent state: " << LightSm_state_id_to_string(sm.state_id) << "\n";
    std::cout << "Please type 'i', 'd', 'o': ";

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
        std::cout << "Dispatching event: " << LightSm_event_id_to_string(event_id) << "\n";
        LightSm_dispatch_event(&sm, event_id);
    }
    else
    {
        std::cout << "Invalid input. Not running state machine.\n";
    }
}

static char read_char_from_line(void)
{
    std::string line;
    std::getline(std::cin, line);

    if (line.length() == 0)
    {
        return '\0';
    }

    return line[0];
}
