#include <iostream>
#include <string>

#include "LightSm.h"

////////////////////////////////////////////////////////////////////////////////
// prototypes
////////////////////////////////////////////////////////////////////////////////

static void readInputRunStateMachine(LightSm& sm);
static char readCharFromLine(void);


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

    readCharFromLine();

    // setup and start state machine
    sm.start();

    while (true)
    {
        readInputRunStateMachine(sm);
    }

    return 0;
}


static void readInputRunStateMachine(LightSm& sm)
{
    bool isValidInput = true;
    enum LightSm::EventId eventId = LightSm::EventId::OFF;

    std::cout << "\nCurrent state: " << LightSm::stateIdToString(sm.stateId) << "\n";
    std::cout << "Please type 'i', 'd', 'o': \n";

    char c = readCharFromLine();
    switch (c)
    {
        case 'i': eventId = LightSm::EventId::INC; break;
        case 'd': eventId = LightSm::EventId::DIM; break;
        case 'o': eventId = LightSm::EventId::OFF; break;
        default: isValidInput = false; break;
    }

    if (isValidInput)
    {
        std::cout << "Dispatching event: " << LightSm::eventIdToString(eventId) << "\n";
        sm.dispatchEvent(eventId);
    }
    else
    {
        std::cout << "Invalid input. Not running state machine.\n";
    }
}

static char readCharFromLine(void)
{
    std::string line;
    std::getline(std::cin, line);

    if (line.length() == 0)
    {
        return '\0';
    }

    return line[0];
}
