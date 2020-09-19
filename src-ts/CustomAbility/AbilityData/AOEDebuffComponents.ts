export module Debuffs {
  export const THUNDERBOLT_ORDER_ID = 852095;
  export const STUN_MICRO = FourCC('A08K')
  export const STUN_HALF_SECOND = FourCC('A0NR');
  export const STUN_ONE_SECOND = FourCC('A0IY');
  export const STUN_TWO_SECOND = FourCC('A0I7');
  export const STUN_THREE_SECOND = FourCC('A08H');
  export const STUN_FROZEN_EIS_SHENRON = FourCC('A0PA');

  export const CURSE_ORDER_ID = 852190;
  export const DEMONS_MARK = FourCC("A0O7");
  export const FROST_CLAWS_BLIND = FourCC("A0P6");
  export const BLINDING_WOLF_FANG_FIST = FourCC("A0S8");

  export const SLOW_ORDER_ID = 852075;
  export const HEROS_SONG = FourCC("A0I6");
  export const EIS_FROSTBITE = FourCC("A0P5");
  export const KROWN_TOSS = FourCC("A0P9");
  export const MILKY_CANNON = FourCC("A0PU");
  export const DRAGON_THUNDER = FourCC("A0QT");
  export const SPIRIT_BALL = FourCC("A0SA");
  export const BLEED_ZAMASU = FourCC("A0I4");

  export const ENTANGLING_ROOTS_ORDER_ID = 852171;
  export const CIRCLE_FLASH = FourCC("A0R6");
}

export const AOEDebuffComponents = [
  {
    name: "stun masenko",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    abilityId: Debuffs.STUN_ONE_SECOND,
    orderId: Debuffs.THUNDERBOLT_ORDER_ID,
    aoe: 300,
    keepCasting: false, 
    onlyAffectHeroes: true,
    requireBuff: false,
    buffId: 0,
  },
  {
    name: "stun blazing rush",
    repeatInterval: 1,
    startTick: 20,
    endTick: -1,
    abilityId: Debuffs.STUN_ONE_SECOND,
    orderId: Debuffs.THUNDERBOLT_ORDER_ID,
    aoe: 400,
    keepCasting: false, 
    onlyAffectHeroes: true,
    requireBuff: false,
    buffId: 0,
  },
  {
    name: "stun super saiyan rage",
    repeatInterval: 33,
    startTick: 0,
    endTick: -1,
    abilityId: Debuffs.STUN_MICRO,
    orderId: Debuffs.THUNDERBOLT_ORDER_ID,
    aoe: 200,
    keepCasting: true, 
    onlyAffectHeroes: true,
    requireBuff: false,
    buffId: 0,
  },
  {
    name: "stun saiyan spirit",
    repeatInterval: 1,
    startTick: 3,
    endTick: 22,
    abilityId: Debuffs.STUN_ONE_SECOND,
    orderId: Debuffs.THUNDERBOLT_ORDER_ID,
    aoe: 250,
    keepCasting: false, 
    onlyAffectHeroes: true,
    requireBuff: false,
    buffId: 0,
  },
  {
    name: "stun reliable friend",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    abilityId: Debuffs.STUN_ONE_SECOND,
    orderId: Debuffs.THUNDERBOLT_ORDER_ID,
    aoe: 400,
    keepCasting: false, 
    onlyAffectHeroes: true,
    requireBuff: false,
    buffId: 0,
  },
  {
    name: "stun energy punch",
    repeatInterval: 1,
    startTick: 17,
    endTick: 23,
    abilityId: Debuffs.STUN_ONE_SECOND,
    orderId: Debuffs.THUNDERBOLT_ORDER_ID,
    aoe: 400,
    keepCasting: false, 
    onlyAffectHeroes: true,
    requireBuff: false,
    buffId: 0,
  },
  {
    name: "stun behind you",
    repeatInterval: 1,
    startTick: 5,
    endTick: 15,
    abilityId: Debuffs.STUN_ONE_SECOND,
    orderId: Debuffs.THUNDERBOLT_ORDER_ID,
    aoe: 400,
    keepCasting: false, 
    onlyAffectHeroes: true,
    requireBuff: false,
    buffId: 0,
  },
  {
    name: "debuff heros song brave cannon",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    abilityId: Debuffs.HEROS_SONG,
    orderId: Debuffs.SLOW_ORDER_ID,
    aoe: 400,
    keepCasting: false, 
    onlyAffectHeroes: false,
    requireBuff: false,
    buffId: 0,
  },
  {
    name: "debuff heros song heros flute start",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    abilityId: Debuffs.HEROS_SONG,
    orderId: Debuffs.SLOW_ORDER_ID,
    aoe: 900,
    keepCasting: false, 
    onlyAffectHeroes: false,
    requireBuff: false,
    buffId: 0,
  },
  {
    name: "debuff heros song heros flute continuous",
    repeatInterval: 33,
    startTick: 0,
    endTick: -1,
    abilityId: Debuffs.HEROS_SONG,
    orderId: Debuffs.SLOW_ORDER_ID,
    aoe: 900,
    keepCasting: true, 
    onlyAffectHeroes: false,
    requireBuff: false,
    buffId: 0,
  },
  {
    name: "debuff demons mark rakshasa claw",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    abilityId: Debuffs.DEMONS_MARK,
    orderId: Debuffs.CURSE_ORDER_ID,
    aoe: 250,
    keepCasting: false, 
    onlyAffectHeroes: true,
    requireBuff: false,
    buffId: 0,
  },
  {
    name: "debuff demons mark devil claw",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    abilityId: Debuffs.DEMONS_MARK,
    orderId: Debuffs.CURSE_ORDER_ID,
    aoe: 300,
    keepCasting: false, 
    onlyAffectHeroes: true,
    requireBuff: false,
    buffId: 0,
  },
  {
    name: "debuff krown toss",
    repeatInterval: 1,
    startTick: 0,
    endTick: 50,
    abilityId: Debuffs.KROWN_TOSS,
    orderId: Debuffs.SLOW_ORDER_ID,
    aoe: 250,
    keepCasting: false, 
    onlyAffectHeroes: false,
    requireBuff: false,
    buffId: 0,
  },
  {
    name: "debuff stun kharge",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    abilityId: Debuffs.STUN_ONE_SECOND,
    orderId: Debuffs.THUNDERBOLT_ORDER_ID,
    aoe: 250,
    keepCasting: false, 
    onlyAffectHeroes: true,
    requireBuff: false,
    buffId: 0,
  },
  {
    name: "debuff blind frost claws",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    abilityId: Debuffs.FROST_CLAWS_BLIND,
    orderId: Debuffs.CURSE_ORDER_ID,
    aoe: 275,
    keepCasting: false, 
    onlyAffectHeroes: false,
    requireBuff: false,
    buffId: 0,
  },
  {
    name: "debuff slow frost claws",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    abilityId: Debuffs.EIS_FROSTBITE,
    orderId: Debuffs.SLOW_ORDER_ID,
    aoe: 250,
    keepCasting: false, 
    onlyAffectHeroes: false,
    requireBuff: false,
    buffId: 0,
  },
  {
    name: "debuff slow ice slash",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    abilityId: Debuffs.EIS_FROSTBITE,
    orderId: Debuffs.SLOW_ORDER_ID,
    aoe: 600,
    keepCasting: false, 
    onlyAffectHeroes: false,
    requireBuff: false,
    buffId: 0,
  },
  {
    name: "debuff stun absolute zero finish",
    repeatInterval: 1,
    startTick: 131,
    endTick: -1,
    abilityId: Debuffs.STUN_FROZEN_EIS_SHENRON,
    orderId: Debuffs.THUNDERBOLT_ORDER_ID,
    aoe: 450,
    keepCasting: false, 
    onlyAffectHeroes: true,
    requireBuff: true,
    buffId: FourCC("B02T"),
  },
  {
    name: "debuff stun ice cannon",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    abilityId: Debuffs.STUN_FROZEN_EIS_SHENRON,
    orderId: Debuffs.THUNDERBOLT_ORDER_ID,
    aoe: 600,
    keepCasting: false, 
    onlyAffectHeroes: true,
    requireBuff: true,
    buffId: FourCC("B02T"),
  },
  {
    name: "debuff slow milky cannon",
    repeatInterval: 1,
    startTick: 30,
    endTick: -1,
    abilityId: Debuffs.MILKY_CANNON,
    orderId: Debuffs.SLOW_ORDER_ID,
    aoe: 500,
    keepCasting: false, 
    onlyAffectHeroes: true,
    requireBuff: false,
    buffId: 0,
  },
  {
    name: "debuff stun impaling rush",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    abilityId: Debuffs.STUN_ONE_SECOND,
    orderId: Debuffs.THUNDERBOLT_ORDER_ID,
    aoe: 250,
    keepCasting: false, 
    onlyAffectHeroes: true,
    requireBuff: false,
    buffId: 0,
  },
  {
    name: "debuff stun nova rush",
    repeatInterval: 1,
    startTick: 23,
    endTick: -1,
    abilityId: Debuffs.STUN_ONE_SECOND,
    orderId: Debuffs.THUNDERBOLT_ORDER_ID,
    aoe: 400,
    keepCasting: false, 
    onlyAffectHeroes: true,
    requireBuff: false,
    buffId: 0,
  },
  {
    name: "debuff slow dragon thunder omega",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    abilityId: Debuffs.DRAGON_THUNDER,
    orderId: Debuffs.SLOW_ORDER_ID,
    aoe: 350,
    keepCasting: false, 
    onlyAffectHeroes: false,
    requireBuff: false,
    buffId: 0,
  },
  {
    name: "debuff root circle flash",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    abilityId: Debuffs.CIRCLE_FLASH,
    orderId: Debuffs.ENTANGLING_ROOTS_ORDER_ID,
    aoe: 300,
    keepCasting: false, 
    onlyAffectHeroes: true,
    requireBuff: false,
    buffId: 0,
  },
  {
    name: "debuff stun yamcha r sledgehammer",
    repeatInterval: 1,
    startTick: 12,
    endTick: -1,
    abilityId: Debuffs.STUN_HALF_SECOND,
    orderId: Debuffs.THUNDERBOLT_ORDER_ID,
    aoe: 300,
    keepCasting: false, 
    onlyAffectHeroes: true,
    requireBuff: false,
    buffId: 0,
  },
  {
    name: "debuff stun yamcha r uppercut",
    repeatInterval: 1,
    startTick: 8,
    endTick: -1,
    abilityId: Debuffs.STUN_HALF_SECOND,
    orderId: Debuffs.THUNDERBOLT_ORDER_ID,
    aoe: 300,
    keepCasting: false, 
    onlyAffectHeroes: true,
    requireBuff: false,
    buffId: 0,
  },
  {
    name: "debuff slow yamcha r spirit ball",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    abilityId: Debuffs.SPIRIT_BALL,
    orderId: Debuffs.SLOW_ORDER_ID,
    aoe: 300,
    keepCasting: false, 
    onlyAffectHeroes: false,
    requireBuff: false,
    buffId: 0,
  },
  {
    name: "debuff stun yamcha r neo wolf fang fist",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    abilityId: Debuffs.STUN_ONE_SECOND,
    orderId: Debuffs.THUNDERBOLT_ORDER_ID,
    aoe: 300,
    keepCasting: false, 
    onlyAffectHeroes: true,
    requireBuff: false,
    buffId: 0,
  },
  {
    name: "debuff blind yamcha r blinding wolf fang fist",
    repeatInterval: 1,
    startTick: 0,
    endTick: -1,
    abilityId: Debuffs.BLINDING_WOLF_FANG_FIST,
    orderId: Debuffs.CURSE_ORDER_ID,
    aoe: 300,
    keepCasting: false, 
    onlyAffectHeroes: false,
    requireBuff: false,
    buffId: 0,
  },
  {
    name: "debuff stun lightning surprise",
    repeatInterval: 8,
    startTick: 0,
    endTick: -1,
    abilityId: Debuffs.STUN_HALF_SECOND,
    orderId: Debuffs.THUNDERBOLT_ORDER_ID,
    aoe: 300,
    keepCasting: true, 
    onlyAffectHeroes: true,
    requireBuff: false,
    buffId: 0,
  },
  {
    name: "debuff bleed zamasu",
    repeatInterval: 1,
    startTick: 0,
    endTick: 1,
    abilityId: Debuffs.BLEED_ZAMASU,
    orderId: Debuffs.SLOW_ORDER_ID,
    aoe: 425,
    keepCasting: false, 
    onlyAffectHeroes: true,
    requireBuff: false,
    buffId: 0,
  },
]