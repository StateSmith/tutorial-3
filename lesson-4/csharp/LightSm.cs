// Autogenerated with StateSmith 0.13.2+aa5928542b575391637cb5e1a7821184f6c3932c.
// Algorithm: Balanced2. See https://github.com/StateSmith/StateSmith/wiki/Algorithms

#nullable enable

using System;


namespace LightController
{
    // Generated state machine
    public class LightSm : LightSmBase
    {
        public enum EventId
        {
            DIM = 0,
            INC = 1,
            OFF = 2,
        }

        public const int EventIdCount = 3;

        public enum StateId
        {
            ROOT = 0,
            OFF = 1,
            ON_GROUP = 2,
            ON_HOT = 3,
            ON1 = 4,
            ON2 = 5,
        }

        public const int StateIdCount = 6;

        // Used internally by state machine. Feel free to inspect, but don't modify.
        public StateId stateId;

        // State machine constructor. Must be called before start or dispatch event functions. Not thread safe.
        public LightSm()
        {
        }

        // Starts the state machine. Must be called before dispatching events. Not thread safe.
        public void Start()
        {
            ROOT_enter();
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
                    OFF_enter();

                    // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
                    return;
                } // end of behavior for ROOT.<InitialState>
            } // end of behavior for ROOT
        }

        // Dispatches an event to the state machine. Not thread safe.
        // Note! This function assumes that the `eventId` parameter is valid.
        public void DispatchEvent(EventId eventId)
        {
            switch (this.stateId)
            {
                // STATE: LightSm
                case StateId.ROOT:
                    switch (eventId)
                    {
                        // Events not handled by this state:
                        case EventId.INC: break;
                        case EventId.OFF: break;
                        case EventId.DIM: break;
                    }
                    break;

                // STATE: OFF
                case StateId.OFF:
                    switch (eventId)
                    {
                        case EventId.INC: OFF_inc(); break;
                        // Events not handled by this state:
                        case EventId.OFF: break;
                        case EventId.DIM: break;
                    }
                    break;

                // STATE: ON_GROUP
                case StateId.ON_GROUP:
                    switch (eventId)
                    {
                        case EventId.OFF: ON_GROUP_off(); break;
                        // Events not handled by this state:
                        case EventId.INC: break;
                        case EventId.DIM: break;
                    }
                    break;

                // STATE: ON_HOT
                case StateId.ON_HOT:
                    switch (eventId)
                    {
                        case EventId.DIM: ON_HOT_dim(); break;
                        // Events not handled by this state:
                        case EventId.INC: break;
                        case EventId.OFF: ON_GROUP_off(); break; // First ancestor handler for this event
                    }
                    break;

                // STATE: ON1
                case StateId.ON1:
                    switch (eventId)
                    {
                        case EventId.INC: ON1_inc(); break;
                        case EventId.DIM: ON1_dim(); break;
                        // Events not handled by this state:
                        case EventId.OFF: ON_GROUP_off(); break; // First ancestor handler for this event
                    }
                    break;

                // STATE: ON2
                case StateId.ON2:
                    switch (eventId)
                    {
                        case EventId.INC: ON2_inc(); break;
                        case EventId.DIM: ON2_dim(); break;
                        // Events not handled by this state:
                        case EventId.OFF: ON_GROUP_off(); break; // First ancestor handler for this event
                    }
                    break;
            }

        }

        // This function is used when StateSmith doesn't know what the active leaf state is at
        // compile time due to sub states or when multiple states need to be exited.
        private void ExitUpToStateHandler(StateId desiredState)
        {
            while (this.stateId != desiredState)
            {
                switch (this.stateId)
                {
                    case StateId.OFF: OFF_exit(); break;

                    case StateId.ON_GROUP: ON_GROUP_exit(); break;

                    case StateId.ON_HOT: ON_HOT_exit(); break;

                    case StateId.ON1: ON1_exit(); break;

                    case StateId.ON2: ON2_exit(); break;

                    default: return;  // Just to be safe. Prevents infinite loop if state ID memory is somehow corrupted.
                }
            }
        }


        ////////////////////////////////////////////////////////////////////////////////
        // event handlers for state ROOT
        ////////////////////////////////////////////////////////////////////////////////

        private void ROOT_enter()
        {
            this.stateId = StateId.ROOT;
        }


        ////////////////////////////////////////////////////////////////////////////////
        // event handlers for state OFF
        ////////////////////////////////////////////////////////////////////////////////

        private void OFF_enter()
        {
            this.stateId = StateId.OFF;

            // OFF behavior
            // uml: enter / { Console.WriteLine("Light is: OFF"); }
            {
                // Step 1: execute action `Console.WriteLine("Light is: OFF");`
                Console.WriteLine("Light is: OFF");
            } // end of behavior for OFF
        }

        private void OFF_exit()
        {
            this.stateId = StateId.ROOT;
        }

        private void OFF_inc()
        {
            // OFF behavior
            // uml: INC TransitionTo(ON1)
            {
                // Step 1: Exit states until we reach `ROOT` state (Least Common Ancestor for transition).
                OFF_exit();

                // Step 2: Transition action: ``.

                // Step 3: Enter/move towards transition target `ON1`.
                ON_GROUP_enter();
                ON1_enter();

                // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
                return;
            } // end of behavior for OFF

            // No ancestor handles this event.
        }


        ////////////////////////////////////////////////////////////////////////////////
        // event handlers for state ON_GROUP
        ////////////////////////////////////////////////////////////////////////////////

        private void ON_GROUP_enter()
        {
            this.stateId = StateId.ON_GROUP;
        }

        private void ON_GROUP_exit()
        {
            this.stateId = StateId.ROOT;
        }

        private void ON_GROUP_off()
        {
            // ON_GROUP behavior
            // uml: OFF TransitionTo(OFF)
            {
                // Step 1: Exit states until we reach `ROOT` state (Least Common Ancestor for transition).
                ExitUpToStateHandler(StateId.ROOT);

                // Step 2: Transition action: ``.

                // Step 3: Enter/move towards transition target `OFF`.
                OFF_enter();

                // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
                return;
            } // end of behavior for ON_GROUP

            // No ancestor handles this event.
        }


        ////////////////////////////////////////////////////////////////////////////////
        // event handlers for state ON_HOT
        ////////////////////////////////////////////////////////////////////////////////

        private void ON_HOT_enter()
        {
            this.stateId = StateId.ON_HOT;

            // ON_HOT behavior
            // uml: enter / { LightRed(); }
            {
                // Step 1: execute action `LightRed();`
                LightRed();
            } // end of behavior for ON_HOT
        }

        private void ON_HOT_exit()
        {
            this.stateId = StateId.ON_GROUP;
        }

        private void ON_HOT_dim()
        {
            // ON_HOT behavior
            // uml: DIM TransitionTo(ON2)
            {
                // Step 1: Exit states until we reach `ON_GROUP` state (Least Common Ancestor for transition).
                ON_HOT_exit();

                // Step 2: Transition action: ``.

                // Step 3: Enter/move towards transition target `ON2`.
                ON2_enter();

                // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
                return;
            } // end of behavior for ON_HOT

            // No ancestor handles this event.
        }


        ////////////////////////////////////////////////////////////////////////////////
        // event handlers for state ON1
        ////////////////////////////////////////////////////////////////////////////////

        private void ON1_enter()
        {
            this.stateId = StateId.ON1;

            // ON1 behavior
            // uml: enter / { LightBlue(); }
            {
                // Step 1: execute action `LightBlue();`
                LightBlue();
            } // end of behavior for ON1
        }

        private void ON1_exit()
        {
            this.stateId = StateId.ON_GROUP;
        }

        private void ON1_dim()
        {
            // ON1 behavior
            // uml: DIM TransitionTo(OFF)
            {
                // Step 1: Exit states until we reach `ROOT` state (Least Common Ancestor for transition).
                ExitUpToStateHandler(StateId.ROOT);

                // Step 2: Transition action: ``.

                // Step 3: Enter/move towards transition target `OFF`.
                OFF_enter();

                // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
                return;
            } // end of behavior for ON1

            // No ancestor handles this event.
        }

        private void ON1_inc()
        {
            // ON1 behavior
            // uml: INC TransitionTo(ON2)
            {
                // Step 1: Exit states until we reach `ON_GROUP` state (Least Common Ancestor for transition).
                ON1_exit();

                // Step 2: Transition action: ``.

                // Step 3: Enter/move towards transition target `ON2`.
                ON2_enter();

                // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
                return;
            } // end of behavior for ON1

            // No ancestor handles this event.
        }


        ////////////////////////////////////////////////////////////////////////////////
        // event handlers for state ON2
        ////////////////////////////////////////////////////////////////////////////////

        private void ON2_enter()
        {
            this.stateId = StateId.ON2;

            // ON2 behavior
            // uml: enter / { LightYellow(); }
            {
                // Step 1: execute action `LightYellow();`
                LightYellow();
            } // end of behavior for ON2

            // ON2 behavior
            // uml: enter / { count = 0; }
            {
                // Step 1: execute action `count = 0;`
                count = 0;
            } // end of behavior for ON2
        }

        private void ON2_exit()
        {
            this.stateId = StateId.ON_GROUP;
        }

        private void ON2_dim()
        {
            // ON2 behavior
            // uml: DIM TransitionTo(ON1)
            {
                // Step 1: Exit states until we reach `ON_GROUP` state (Least Common Ancestor for transition).
                ON2_exit();

                // Step 2: Transition action: ``.

                // Step 3: Enter/move towards transition target `ON1`.
                ON1_enter();

                // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
                return;
            } // end of behavior for ON2

            // No ancestor handles this event.
        }

        private void ON2_inc()
        {
            // ON2 behavior
            // uml: 1. INC / { count++; }
            {
                // Step 1: execute action `count++;`
                count++;
            } // end of behavior for ON2

            // ON2 behavior
            // uml: 2. INC / { Console.WriteLine("    Count: " + count); }
            {
                // Step 1: execute action `Console.WriteLine("    Count: " + count);`
                Console.WriteLine("    Count: " + count);
            } // end of behavior for ON2

            // ON2 behavior
            // uml: INC [count >= 3] TransitionTo(ON_HOT)
            if (count >= 3)
            {
                // Step 1: Exit states until we reach `ON_GROUP` state (Least Common Ancestor for transition).
                ON2_exit();

                // Step 2: Transition action: ``.

                // Step 3: Enter/move towards transition target `ON_HOT`.
                ON_HOT_enter();

                // Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
                return;
            } // end of behavior for ON2

            // No ancestor handles this event.
        }

        // Thread safe.
        public static string StateIdToString(StateId id)
        {
            switch (id)
            {
                case StateId.ROOT: return "ROOT";
                case StateId.OFF: return "OFF";
                case StateId.ON_GROUP: return "ON_GROUP";
                case StateId.ON_HOT: return "ON_HOT";
                case StateId.ON1: return "ON1";
                case StateId.ON2: return "ON2";
                default: return "?";
            }
        }

        // Thread safe.
        public static string EventIdToString(EventId id)
        {
            switch (id)
            {
                case EventId.DIM: return "DIM";
                case EventId.INC: return "INC";
                case EventId.OFF: return "OFF";
                default: return "?";
            }
        }
    }
}
