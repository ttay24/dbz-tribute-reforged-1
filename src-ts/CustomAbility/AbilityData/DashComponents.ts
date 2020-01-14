import { Dash } from "CustomAbility/AbilityComponent/Dash";

export const DashComponents = [
  {
    name: "dash ground point 5dist",
    repeatInterval: 1, 
    startTick: 0,
    endTick: -1,    
    targetDirection: Dash.DIRECTION_TARGET_POINT,
    isFlying: false,
    useLastCastPoint: false,
    distance: 5,
  },
  {
    name: "dash ground point 10dist",
    repeatInterval: 1, 
    startTick: 0,
    endTick: -1,    
    targetDirection: Dash.DIRECTION_TARGET_POINT,
    isFlying: false,
    useLastCastPoint: false,
    distance: 10,
  },
  {
    name: "dash ground point 15dist",
    repeatInterval: 1, 
    startTick: 0,
    endTick: -1,    
    targetDirection: Dash.DIRECTION_TARGET_POINT,
    isFlying: false,
    useLastCastPoint: false,
    distance: 15,
  },
  {
    name: "dash ground point 20dist",
    repeatInterval: 1, 
    startTick: 0,
    endTick: -1,    
    targetDirection: Dash.DIRECTION_TARGET_POINT,
    isFlying: false,
    useLastCastPoint: false,
    distance: 20,
  },
  {
    name: "dash ground point 25dist",
    repeatInterval: 1, 
    startTick: 0,
    endTick: -1,    
    targetDirection: Dash.DIRECTION_TARGET_POINT,
    isFlying: false,
    useLastCastPoint: false,
    distance: 25,
  },
  {
    name: "dash ground point 30dist",
    repeatInterval: 1, 
    startTick: 0,
    endTick: -1,    
    targetDirection: Dash.DIRECTION_TARGET_POINT,
    isFlying: false,
    useLastCastPoint: false,
    distance: 30,
  },
  {
    name: "dash ground point 35dist",
    repeatInterval: 1, 
    startTick: 0,
    endTick: -1,    
    targetDirection: Dash.DIRECTION_TARGET_POINT,
    isFlying: false,
    useLastCastPoint: false,
    distance: 35,
  },
  {
    name: "dash ground point 40dist",
    repeatInterval: 1, 
    startTick: 0,
    endTick: -1,    
    targetDirection: Dash.DIRECTION_TARGET_POINT,
    isFlying: false,
    useLastCastPoint: false,
    distance: 40,
  },
  {
    name: "dash ground point 45dist",
    repeatInterval: 1, 
    startTick: 0,
    endTick: -1,    
    targetDirection: Dash.DIRECTION_TARGET_POINT,
    isFlying: false,
    useLastCastPoint: false,
    distance: 45,
  },
  {
    name: "dash ground point 50dist",
    repeatInterval: 1, 
    startTick: 0,
    endTick: -1,    
    targetDirection: Dash.DIRECTION_TARGET_POINT,
    isFlying: false,
    useLastCastPoint: false,
    distance: 50,
  },
  // ----------------------------
  {
    name: "dash ground point dragon fist",
    repeatInterval: 1, 
    startTick: 0,
    endTick: -1,    
    targetDirection: Dash.DIRECTION_TARGET_POINT,
    isFlying: false,
    useLastCastPoint: false,
    distance: 30,
  },
  {
    name: "dash ground point super dragon flight",
    repeatInterval: 1, 
    startTick: 0,
    endTick: 28,    
    targetDirection: Dash.DIRECTION_TARGET_POINT,
    isFlying: false,
    useLastCastPoint: false,
    distance: 30,
  },
  {
    name: "dash ground point tyrant lancer",
    repeatInterval: 1, 
    startTick: 0,
    endTick: 25,    
    targetDirection: Dash.DIRECTION_TARGET_POINT,
    isFlying: false,
    useLastCastPoint: false,
    distance: 25,
  },
  {
    name: "dash ground target rebellion spear",
    repeatInterval: 1, 
    startTick: 0,
    endTick: -1,
    targetDirection: Dash.DIRECTION_TARGET_POINT,
    isFlying: true,
    useLastCastPoint: false,
    distance: 15,
  },
  {
    name: "dash ground point saiyan spirit",
    repeatInterval: 1, 
    startTick: 0,
    endTick: 20,    
    targetDirection: Dash.DIRECTION_TARGET_POINT,
    isFlying: false,
    useLastCastPoint: false,
    distance: 35,
  },
  {
    name: "dash ground point saiyan spirit pushback",
    repeatInterval: 1, 
    startTick: 20,
    endTick: 27,    
    targetDirection: Dash.DIRECTION_TARGET_POINT,
    isFlying: false,
    useLastCastPoint: false,
    distance: -40,
  },
  {
    name: "dash ground point reliable friend",
    repeatInterval: 1, 
    startTick: 0,
    endTick: -1,    
    targetDirection: Dash.DIRECTION_TARGET_POINT,
    isFlying: false,
    useLastCastPoint: true,
    distance: 30,
  },
  {
    name: "dash ground point ss deadly hammer",
    repeatInterval: 1, 
    startTick: 0,
    endTick: 25,    
    targetDirection: Dash.DIRECTION_TARGET_POINT,
    isFlying: false,
    useLastCastPoint: false,
    distance: 25,
  },
  // energy punch
  {
    name: "dash ground point energy punch",
    repeatInterval: 1, 
    startTick: 0,
    endTick: 20,    
    targetDirection: Dash.DIRECTION_TARGET_POINT,
    isFlying: false,
    useLastCastPoint: false,
    distance: 25,
  },
  {
    name: "dash ground point gigantic roar pushback",
    repeatInterval: 1, 
    startTick: 0,
    endTick: 12,    
    targetDirection: Dash.DIRECTION_TARGET_POINT,
    isFlying: false,
    useLastCastPoint: false,
    distance: -25,
  },
  // flying dash forwards facing
  {
    name: "dash flying forward 5dist",
    repeatInterval: 1, 
    startTick: 0,
    endTick: -1,    
    targetDirection: Dash.DIRECTION_SOURCE_FORWARD,
    isFlying: true,
    useLastCastPoint: false,
    distance: 5,
  },
  // big bang kamehameha bang 
  {
    name: "dash flying forward big bang kamehameha",
    repeatInterval: 1, 
    startTick: 0,
    endTick: 20,    
    targetDirection: Dash.DIRECTION_SOURCE_FORWARD,
    isFlying: true,
    useLastCastPoint: false,
    distance: 25,
  },
  // hellzone grenade delayed dash to target unit
  {
    name: "dash flying point hellzone grenade",
    repeatInterval: 1, 
    startTick: 0,
    endTick: 66,
    targetDirection: Dash.DIRECTION_SOURCE_FORWARD,
    isFlying: true,
    useLastCastPoint: false,
    distance: 25,
  },
  {
    name: "dash flying unit hellzone grenade",
    repeatInterval: 1, 
    startTick: 99,
    endTick: -1,
    targetDirection: Dash.DIRECTION_UNIT_TARGET,
    isFlying: true,
    useLastCastPoint: false,
    distance: 35,
  },
  // ----------------------------
  {
    name: "dash ground point nova chariot",
    repeatInterval: 1, 
    startTick: 0,
    endTick: -1,    
    targetDirection: Dash.DIRECTION_TARGET_POINT,
    isFlying: false,
    useLastCastPoint: false,
    distance: 30,
  },
  // behind you
  {
    name: "dash ground point behind you pushback",
    repeatInterval: 1, 
    startTick: 0,
    endTick: 10,    
    targetDirection: Dash.DIRECTION_TARGET_POINT,
    isFlying: false,
    useLastCastPoint: false,
    distance: -30,
  },
  // saibaman bomb
  {
    name: "dash ground unit saibaman bomb",
    repeatInterval: 1, 
    startTick: 0,
    endTick: -1,    
    targetDirection: Dash.DIRECTION_UNIT_TARGET,
    isFlying: false,
    useLastCastPoint: true,
    distance: 37,
  },
  // power level sharing
  {
    name: "dash forward power level sharing",
    repeatInterval: 1, 
    startTick: 0,
    endTick: -1,    
    targetDirection: Dash.DIRECTION_SOURCE_FORWARD,
    isFlying: false,
    useLastCastPoint: false,
    distance: 2,
  },
]