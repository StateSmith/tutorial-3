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
    static LightSm sm;

    std::cout << "---------------------------------------\n\n";
    std::cout << "USAGE:\n";
    std::cout << "  type i <enter> to send INCREASE event to state machine.\n";
    std::cout << "  type d <enter> to send DIM event to state machine.\n";
    std::cout << "  type o <enter> to send OFF event to state machine.\n";
    std::cout << "\n";
    std::cout << "Hit <enter> to start\n";

    read_char_from_line();

    // setup and start state machine
    sm.start();

    while (true)
    {
        read_input_run_state_machine(sm);
    }

    return 0;
}


static void read_input_run_state_machine(LightSm& sm)
{
    bool valid_input = true;
    enum LightSm::EventId event_id = LightSm::EventId_OFF;

    char c = read_char_from_line();
    switch (c)
    {
        case 'i': event_id = LightSm::EventId_INC; break;
        case 'd': event_id = LightSm::EventId_DIM; break;
        case 'o': event_id = LightSm::EventId_OFF; break;
        default: valid_input = false; break;
    }

    if (valid_input)
    {
        sm.dispatch_event(event_id);
    }
    else
    {
        std::cout << "What you trying to pull!? Bad input.\n";
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
