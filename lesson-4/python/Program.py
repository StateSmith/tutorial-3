import sys
from LightSm import LightSm

def read_input_run_sm(sm):
    line = input().strip()
    if len(line) > 0:
        c = line[0]  # Get the first character
        run_sm_for_char(sm, c)
    else:
        run_sm_for_char(sm, '\0')


def run_sm_for_char(sm, c):
    valid_input = True
    event_id = LightSm.EventId.OFF

    if c == 'i':
        event_id = LightSm.EventId.INC
    elif c == 'd':
        event_id = LightSm.EventId.DIM
    elif c == 'o':
        event_id = LightSm.EventId.OFF
    else:
        valid_input = False

    if valid_input:
        sm.dispatchEvent(event_id)
    else:
        print("What you trying to pull!? I ain't no silly AI. Feed me proper input please :)", file=sys.stderr)


if __name__ == "__main__":
    sm = LightSm()

    print("USAGE:")
    print("  type i <enter> to send INC event to state machine.")
    print("  type d <enter> to send DIM event to state machine.")
    print("  type o <enter> to send OFF event to state machine.")
    print("")
    print("Hit <enter> to start")
    input()  # Wait for user to press Enter

    sm.start()

    while True:
        read_input_run_sm(sm)
