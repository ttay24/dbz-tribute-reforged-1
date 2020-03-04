export const TempAbilityComponents = [
  {
    name: "temp ability evil aura", 
    repeatInterval: 1, 
    startTick: 0,
    endTick: -1,
    newAbility: FourCC("A0DW"),
    oldAbility: 0,
    performSwap: false,
    enableAbility: true,
    addAbility: false,
    tempPermanence: false,
    equalizeLevels: false,
  },
  {
    name: "temp ability demonic blade", 
    repeatInterval: 1, 
    startTick: 0,
    endTick: -1,
    newAbility: FourCC("A0OA"),
    oldAbility: FourCC("A0O2"),
    performSwap: true,
    enableAbility: true,
    addAbility: false,
    tempPermanence: false,
    equalizeLevels: true,
  },
  {
    name: "temp ability kannonblast", 
    repeatInterval: 1, 
    startTick: 0,
    endTick: -1,
    newAbility: FourCC("A0OW"),
    oldAbility: FourCC("A0IU"),
    performSwap: true,
    enableAbility: true,
    addAbility: true,
    tempPermanence: false,
    equalizeLevels: true,
  },
  {
    name: "temp ability swap demon mark", 
    repeatInterval: 1, 
    startTick: 0,
    endTick: -1,
    newAbility: FourCC("A0O1"),
    oldAbility: FourCC("A0O0"),
    performSwap: true,
    enableAbility: true,
    addAbility: false,
    tempPermanence: false,
    equalizeLevels: false,
  },
];