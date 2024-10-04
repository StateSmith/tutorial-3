# Autogenerated with StateSmith 0.15.1+6f3f27c9be334eeec7dd0a477c6e8bd766e80440.
# Algorithm: Balanced2. See https:#github.com/StateSmith/StateSmith/wiki/Algorithms

import enum
from LightSmBase import LightSmBase


# Generated state machine
class LightSm(LightSmBase):
    class EventId(enum.Enum):
        DIM = 0
        INC = 1
        OFF = 2
    
    
    class StateId(enum.Enum):
        ROOT = 0
        OFF = 1
        ON_GROUP = 2
        ON_HOT = 3
        ON1 = 4
        ON2 = 5
    
    # State machine variables. Can be used for inputs, outputs, user variables...
    class Vars():
        def __init__(self):
            self.count = 0  # this var can be referenced in diagram
            pass
    
    # State machine constructor. Must be called before start or dispatch event functions. Not thread safe.
    def __init__(self):
        # Used internally by state machine. Feel free to inspect, but don't modify.
        self.stateId = None
        
        # Variables. Can be used for inputs, outputs, user variables...
        self.vars = self.Vars()
    
    # Starts the state machine. Must be called before dispatching events. Not thread safe.
    def start(self):
        self._ROOT_enter()
        # ROOT behavior
        # uml: TransitionTo(ROOT.<InitialState>)
        if True:
            # Step 1: Exit states until we reach `ROOT` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
            
            # Step 2: Transition action: ``.
            
            # Step 3: Enter/move towards transition target `ROOT.<InitialState>`.
            # ROOT.<InitialState> is a pseudo state and cannot have an `enter` trigger.
            
            # ROOT.<InitialState> behavior
            # uml: TransitionTo(OFF)
            if True:
                # Step 1: Exit states until we reach `ROOT` state (Least Common Ancestor for transition). Already at LCA, no exiting required.
                
                # Step 2: Transition action: ``.
                
                # Step 3: Enter/move towards transition target `OFF`.
                self._OFF_enter()
                
                # Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
                return
            # end of behavior for ROOT.<InitialState>
        # end of behavior for ROOT
    
    
    # Dispatches an event to the state machine. Not thread safe.
    # Note! This function assumes that the `eventId` parameter is valid.
    def dispatchEvent(self, eventId):
        match self.stateId:
            # STATE: LightSm
            case LightSm.StateId.ROOT:
                pass
            
            # STATE: OFF
            case LightSm.StateId.OFF:
                match eventId:
                    case LightSm.EventId.INC:
                        self._OFF_inc()
            
            # STATE: ON_GROUP
            case LightSm.StateId.ON_GROUP:
                match eventId:
                    case LightSm.EventId.OFF:
                        self._ON_GROUP_off()
            
            # STATE: ON_HOT
            case LightSm.StateId.ON_HOT:
                match eventId:
                    case LightSm.EventId.DIM:
                        self._ON_HOT_dim()
                    case LightSm.EventId.OFF:
                        self._ON_GROUP_off()
            
            # STATE: ON1
            case LightSm.StateId.ON1:
                match eventId:
                    case LightSm.EventId.INC:
                        self._ON1_inc()
                    case LightSm.EventId.DIM:
                        self._ON1_dim()
                    case LightSm.EventId.OFF:
                        self._ON_GROUP_off()
            
            # STATE: ON2
            case LightSm.StateId.ON2:
                match eventId:
                    case LightSm.EventId.INC:
                        self._ON2_inc()
                    case LightSm.EventId.DIM:
                        self._ON2_dim()
                    case LightSm.EventId.OFF:
                        self._ON_GROUP_off()
        
    
    
    # This function is used when StateSmith doesn't know what the active leaf state is at
    # compile time due to sub states or when multiple states need to be exited.
    def _exitUpToStateHandler(self, desiredState):
        while (self.stateId != desiredState):

            match self.stateId:
                case LightSm.StateId.OFF:
                    self._OFF_exit()
                
                case LightSm.StateId.ON_GROUP:
                    self._ON_GROUP_exit()
                
                case LightSm.StateId.ON_HOT:
                    self._ON_HOT_exit()
                
                case LightSm.StateId.ON1:
                    self._ON1_exit()
                
                case LightSm.StateId.ON2:
                    self._ON2_exit()
                
                case _:
                    return  # Just to be safe. Prevents infinite loop if state ID memory is somehow corrupted.
        
    
    
    
    ########################################
    # event handlers for state ROOT
    ########################################
    
    def _ROOT_enter(self):
        self.stateId = LightSm.StateId.ROOT
    
    
    
    ########################################
    # event handlers for state OFF
    ########################################
    
    def _OFF_enter(self):
        self.stateId = LightSm.StateId.OFF
        
        # OFF behavior
        # uml: enter / { print("Light is: OFF") }
        if True:
            # Step 1: execute action `print("Light is: OFF")`
            print("Light is: OFF")
        # end of behavior for OFF
    
    
    def _OFF_exit(self):
        self.stateId = LightSm.StateId.ROOT
    
    
    def _OFF_inc(self):
        # OFF behavior
        # uml: INC TransitionTo(ON1)
        if True:
            # Step 1: Exit states until we reach `ROOT` state (Least Common Ancestor for transition).
            self._OFF_exit()
            
            # Step 2: Transition action: ``.
            
            # Step 3: Enter/move towards transition target `ON1`.
            self._ON_GROUP_enter()
            self._ON1_enter()
            
            # Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            return
        # end of behavior for OFF
        
        # No ancestor handles this event.
    
    
    
    ########################################
    # event handlers for state ON_GROUP
    ########################################
    
    def _ON_GROUP_enter(self):
        self.stateId = LightSm.StateId.ON_GROUP
    
    
    def _ON_GROUP_exit(self):
        self.stateId = LightSm.StateId.ROOT
    
    
    def _ON_GROUP_off(self):
        # ON_GROUP behavior
        # uml: OFF TransitionTo(OFF)
        if True:
            # Step 1: Exit states until we reach `ROOT` state (Least Common Ancestor for transition).
            self._exitUpToStateHandler(LightSm.StateId.ROOT)
            
            # Step 2: Transition action: ``.
            
            # Step 3: Enter/move towards transition target `OFF`.
            self._OFF_enter()
            
            # Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            return
        # end of behavior for ON_GROUP
        
        # No ancestor handles this event.
    
    
    
    ########################################
    # event handlers for state ON_HOT
    ########################################
    
    def _ON_HOT_enter(self):
        self.stateId = LightSm.StateId.ON_HOT
        
        # ON_HOT behavior
        # uml: enter / { self.lightRed() }
        if True:
            # Step 1: execute action `self.lightRed()`
            self.lightRed()
        # end of behavior for ON_HOT
    
    
    def _ON_HOT_exit(self):
        self.stateId = LightSm.StateId.ON_GROUP
    
    
    def _ON_HOT_dim(self):
        # ON_HOT behavior
        # uml: DIM TransitionTo(ON2)
        if True:
            # Step 1: Exit states until we reach `ON_GROUP` state (Least Common Ancestor for transition).
            self._ON_HOT_exit()
            
            # Step 2: Transition action: ``.
            
            # Step 3: Enter/move towards transition target `ON2`.
            self._ON2_enter()
            
            # Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            return
        # end of behavior for ON_HOT
        
        # No ancestor handles this event.
    
    
    
    ########################################
    # event handlers for state ON1
    ########################################
    
    def _ON1_enter(self):
        self.stateId = LightSm.StateId.ON1
        
        # ON1 behavior
        # uml: enter / { self.lightBlue() }
        if True:
            # Step 1: execute action `self.lightBlue()`
            self.lightBlue()
        # end of behavior for ON1
    
    
    def _ON1_exit(self):
        self.stateId = LightSm.StateId.ON_GROUP
    
    
    def _ON1_dim(self):
        # ON1 behavior
        # uml: DIM TransitionTo(OFF)
        if True:
            # Step 1: Exit states until we reach `ROOT` state (Least Common Ancestor for transition).
            self._exitUpToStateHandler(LightSm.StateId.ROOT)
            
            # Step 2: Transition action: ``.
            
            # Step 3: Enter/move towards transition target `OFF`.
            self._OFF_enter()
            
            # Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            return
        # end of behavior for ON1
        
        # No ancestor handles this event.
    
    
    def _ON1_inc(self):
        # ON1 behavior
        # uml: INC TransitionTo(ON2)
        if True:
            # Step 1: Exit states until we reach `ON_GROUP` state (Least Common Ancestor for transition).
            self._ON1_exit()
            
            # Step 2: Transition action: ``.
            
            # Step 3: Enter/move towards transition target `ON2`.
            self._ON2_enter()
            
            # Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            return
        # end of behavior for ON1
        
        # No ancestor handles this event.
    
    
    
    ########################################
    # event handlers for state ON2
    ########################################
    
    def _ON2_enter(self):
        self.stateId = LightSm.StateId.ON2
        
        # ON2 behavior
        # uml: enter / { self.lightYellow() }
        if True:
            # Step 1: execute action `self.lightYellow()`
            self.lightYellow()
        # end of behavior for ON2
        
        # ON2 behavior
        # uml: enter / { count = 0 }
        if True:
            # Step 1: execute action `count = 0`
            self.vars.count = 0
        # end of behavior for ON2
    
    
    def _ON2_exit(self):
        self.stateId = LightSm.StateId.ON_GROUP
    
    
    def _ON2_dim(self):
        # ON2 behavior
        # uml: DIM TransitionTo(ON1)
        if True:
            # Step 1: Exit states until we reach `ON_GROUP` state (Least Common Ancestor for transition).
            self._ON2_exit()
            
            # Step 2: Transition action: ``.
            
            # Step 3: Enter/move towards transition target `ON1`.
            self._ON1_enter()
            
            # Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            return
        # end of behavior for ON2
        
        # No ancestor handles this event.
    
    
    def _ON2_inc(self):
        # ON2 behavior
        # uml: 1. INC / { count += 1 }
        if True:
            # Step 1: execute action `count += 1`
            self.vars.count += 1
        # end of behavior for ON2
        
        # ON2 behavior
        # uml: 2. INC / { print("vars.count: " + str(count)) }
        if True:
            # Step 1: execute action `print("vars.count: " + str(count))`
            print("vars.count: " + str(self.vars.count))
        # end of behavior for ON2
        
        # ON2 behavior
        # uml: INC [count >= 3] TransitionTo(ON_HOT)
        if self.vars.count >= 3:
            # Step 1: Exit states until we reach `ON_GROUP` state (Least Common Ancestor for transition).
            self._ON2_exit()
            
            # Step 2: Transition action: ``.
            
            # Step 3: Enter/move towards transition target `ON_HOT`.
            self._ON_HOT_enter()
            
            # Step 4: complete transition. Ends event dispatch. No other behaviors are checked.
            return
        # end of behavior for ON2
        
        # No ancestor handles this event.
    
    
    # Thread safe.
    @staticmethod
    def stateIdToString(id):
        match id:
            case LightSm.StateId.ROOT: return "ROOT"
            case LightSm.StateId.OFF: return "OFF"
            case LightSm.StateId.ON_GROUP: return "ON_GROUP"
            case LightSm.StateId.ON_HOT: return "ON_HOT"
            case LightSm.StateId.ON1: return "ON1"
            case LightSm.StateId.ON2: return "ON2"
            case _: return "?"
    
    
    # Thread safe.
    @staticmethod
    def eventIdToString(id):
        match id:
            case LightSm.EventId.DIM: return "DIM"
            case LightSm.EventId.INC: return "INC"
            case LightSm.EventId.OFF: return "OFF"
            case _: return "?"
    
