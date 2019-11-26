export const SfxComponents = [
  // copy from here
  { 
    name: "sfx zanzo dash", 
    repeatInterval: 0,
    sfxList: [
      {
        model: "WindCircleFaster.mdl",
        repeatInterval: 0,
        group: 0,
        scale: 1.1,
        startHeight: 0,
        endHeight: 0,
        extraDirectionalYaw: 0,
        color: {
          x: 255,
          y: 255,
          z: 255,
        },
        persistent: false,
        attachmentPoint: "",
      },
    ],
    attachedSfxList: [
      // note: attached sfx cant alter scale, height, yaw, 
      // only repeat, color, persistent, attachment for now
      {
        model: "DustWindFasterExact.mdl",
        repeatInterval: 0,
        group: 0,
        scale: 1.0,
        startHeight: 0,
        endHeight: 0,
        extraDirectionalYaw: 0,
        color: {
          x: 255,
          y: 255,
          z: 255,
        },
        persistent: false,
        attachmentPoint: "origin",
      },
    ],
  },
  // to here, and replace with unique name
  { 
    name: "sfx blue hurricane", 
    repeatInterval: 1,
    sfxList: [
      {
        model: "WindCircleFaster.mdl",
        repeatInterval: 25,
        group: 0,
        scale: 1.1,
        startHeight: 0,
        endHeight: 0,
        extraDirectionalYaw: 0,
        color: {
          x: 255,
          y: 255,
          z: 255,
        },
        persistent: false,
        attachmentPoint: "",
      },
    ],
    attachedSfxList: [
      {
        model: "Abilities\\Spells\\Other\\Tornado\\TornadoElemental.mdl",
        repeatInterval: 75,
        group: 0,
        scale: 1.0,
        startHeight: 0,
        endHeight: 0,
        extraDirectionalYaw: 0,
        color: {
          x: 55,
          y: 155,
          z: 255,
        },
        persistent: false,
        attachmentPoint: "origin",
      },
      {
        model: "Objects\Spawnmodels\Naga\NagaDeath\NagaDeath.mdl",
        repeatInterval: 50,
        group: 0,
        scale: 1.0,
        startHeight: 0,
        endHeight: 0,
        extraDirectionalYaw: 0,
        color: {
          x: 55,
          y: 105,
          z: 255,
        },
        persistent: false,
        attachmentPoint: "origin",
      },
    ],
  },
  // --------------------------------------------
  { 
    name: "sfx beam blue", 
    repeatInterval: 1,
    sfxList: [
      {
        model: "Abilities\\Spells\\Undead\\FrostNova\\FrostNovaTarget.mdl",
        repeatInterval: 8,
        group: 0,
        scale: 1.2,
        startHeight: 0,
        endHeight: 0,
        extraDirectionalYaw: 0,
        color: {
          x: 255,
          y: 255,
          z: 255,
        },
        persistent: false,
        attachmentPoint: "",
      },
      {
        model: "Abilities\\Spells\\Undead\\ReplenishMana\\ReplenishManaCasterOverhead.mdl",
        repeatInterval: -1,
        group: 0,
        scale: 1.2,
        startHeight: 0,
        endHeight: 0,
        extraDirectionalYaw: 0,
        color: {
          x: 205,
          y: 205,
          z: 255,
        },
        persistent: false,
        attachmentPoint: "",
      },
    ],
    attachedSfxList: [
      {
        model: "Abilities\\Weapons\\FrostWyrmMissile\\FrostWyrmMissile.mdl",
        repeatInterval: 5,
        group: 0,
        scale: 1.0,
        startHeight: 0,
        endHeight: 0,
        extraDirectionalYaw: 0,
        color: {
          x: 105,
          y: 155,
          z: 255,
        },
        persistent: false,
        attachmentPoint: "origin",
      },
    ],
  },
  // --------------------------------------------
  { 
    name: "sfx beam purple", 
    repeatInterval: 1,
    sfxList: [
      {
        model: "Abilities\\Spells\\Undead\\OrbOfDeath\\AnnihilationMissile.mdl",
        repeatInterval: 2,
        group: 0,
        scale: 1.2,
        startHeight: 0,
        endHeight: 0,
        extraDirectionalYaw: 0,
        color: {
          x: 255,
          y: 255,
          z: 255,
        },
        persistent: true,
        attachmentPoint: "",
      },
      {
        model: "Abilities\\Spells\\Human\\Thunderclap\\ThunderClapCaster.mdl",
        repeatInterval: -1,
        group: 0,
        scale: 1.2,
        startHeight: 0,
        endHeight: 0,
        extraDirectionalYaw: 0,
        color: {
          x: 255,
          y: 155,
          z: 255,
        },
        persistent: false,
        attachmentPoint: "",
      },
    ],
    attachedSfxList: [
      {
        model: "Abilities\Spells\Orc\Purge\PurgeBuffTarget.mdl",
        repeatInterval: 5,
        group: 0,
        scale: 1.0,
        startHeight: 0,
        endHeight: 0,
        extraDirectionalYaw: 0,
        color: {
          x: 105,
          y: 155,
          z: 255,
        },
        persistent: false,
        attachmentPoint: "overhead",
      },
    ],
  },
  // --------------------------------------------
  { 
    name: "sfx beam red", 
    repeatInterval: 1,
    sfxList: [
      {
        model: "Abilities\\Weapons\\VengeanceMissile\\VengeanceMissile.mdl",
        repeatInterval: 2,
        group: 0,
        scale: 1.3,
        startHeight: 75,
        endHeight: 75,
        extraDirectionalYaw: 0,
        color: {
          x: 255,
          y: 205,
          z: 155,
        },
        persistent: false,
        attachmentPoint: "",
      },
      {
        model: "Abilities\\Spells\\Other\\Volcano\\VolcanoMissile.mdl",
        repeatInterval: 4,
        group: 0,
        scale: 0.6,
        startHeight: 0,
        endHeight: 0,
        extraDirectionalYaw: 0,
        color: {
          x: 255,
          y: 205,
          z: 155,
        },
        persistent: false,
        attachmentPoint: "",
      },
      {
        model: "NuclearExplosion.mdl",
        repeatInterval: -1,
        group: 0,
        scale: 0.5,
        startHeight: 0,
        endHeight: 0,
        extraDirectionalYaw: 0,
        color: {
          x: 255,
          y: 205,
          z: 155,
        },
        persistent: false,
        attachmentPoint: "",
      },
    ],
    attachedSfxList: [
      {
        model: "Abilities\\Weapons\\PhoenixMissile\\Phoenix_Missile_mini.mdl",
        repeatInterval: 0,
        group: 0,
        scale: 1.0,
        startHeight: 0,
        endHeight: 0,
        extraDirectionalYaw: 0,
        color: {
          x: 255,
          y: 255,
          z: 255,
        },
        persistent: true,
        attachmentPoint: "origin",
      },
      {
        model: "Abilities\\Weapons\\LordofFlameMissile\\LordofFlameMissile.mdl",
        repeatInterval: 0,
        group: 0,
        scale: 1.0,
        startHeight: 0,
        endHeight: 0,
        extraDirectionalYaw: 0,
        color: {
          x: 255,
          y: 205,
          z: 55,
        },
        persistent: true,
        attachmentPoint: "origin",
      },
    ],
  },
  // --------------------------------------------
  { 
    name: "sfx kamehameha", 
    repeatInterval: 1,
    sfxList: [
      {
        model: "Abilities\\Spells\\Other\\Charm\\CharmTarget.mdl",
        repeatInterval: 3,
        group: 0,
        scale: 1.2,
        startHeight: 0,
        endHeight: 0,
        extraDirectionalYaw: 0,
        color: {
          x: 255,
          y: 255,
          z: 255,
        },
        persistent: false,
        attachmentPoint: "",
      },
      {
        model: "Abilities\\Spells\\Undead\\ReplenishMana\\ReplenishManaCasterOverhead.mdl",
        repeatInterval: -1,
        group: 0,
        scale: 1.5,
        startHeight: 0,
        endHeight: 0,
        extraDirectionalYaw: 0,
        color: {
          x: 205,
          y: 205,
          z: 255,
        },
        persistent: false,
        attachmentPoint: "",
      },
    ],
    attachedSfxList: [
      {
        model: "Abilities\\Spells\\Human\\Feedback\\SpellBreakerAttack.mdl",
        repeatInterval: 5,
        group: 0,
        scale: 1.0,
        startHeight: 0,
        endHeight: 0,
        extraDirectionalYaw: 0,
        color: {
          x: 105,
          y: 155,
          z: 255,
        },
        persistent: false,
        attachmentPoint: "origin",
      },
    ],
  },
  // --------------------------------------------
  { 
    name: "sfx blue wind aura", 
    repeatInterval: 0,
    sfxList: [
      {
        model: "WindCircleFaster.mdl",
        repeatInterval: 0,
        group: 0,
        scale: 1.5,
        startHeight: 0,
        endHeight: 0,
        extraDirectionalYaw: 0,
        color: {
          x: 255,
          y: 255,
          z: 255,
        },
        persistent: false,
        attachmentPoint: "",
      },
      {
        model: "Abilities\\Spells\\Other\\Charm\\CharmTarget.mdl",
        repeatInterval: 0,
        group: 0,
        scale: 1.5,
        startHeight: 0,
        endHeight: 0,
        extraDirectionalYaw: 0,
        color: {
          x: 155,
          y: 205,
          z: 255,
        },
        persistent: false,
        attachmentPoint: "",
      },
    ],
    attachedSfxList: [],
  },
  // --------------------------------------------
  { 
    name: "sfx beam spirit bomb", 
    repeatInterval: 1,
    sfxList: [
      {
        model: "WindCircleFaster.mdl",
        repeatInterval: 10,
        group: 0,
        scale: 1.3,
        startHeight: 0,
        endHeight: 0,
        extraDirectionalYaw: 0,
        color: {
          x: 255,
          y: 255,
          z: 255,
        },
        persistent: false,
        attachmentPoint: "",
      },
      {
        model: "Abilities\\Spells\\Human\\Feedback\\ArcaneTowerAttack.mdl",
        repeatInterval: 5,
        group: 0,
        scale: 2,
        startHeight: 0,
        endHeight: 0,
        extraDirectionalYaw: 0,
        color: {
          x: 55,
          y: 155,
          z: 255,
        },
        persistent: false,
        attachmentPoint: "",
      },
      {
        model: "Abilities\\Spells\\Items\\SpellShieldAmulet\\SpellShieldCaster.mdl",
        repeatInterval: 2,
        group: 0,
        scale: 1.5,
        startHeight: 0,
        endHeight: 0,
        extraDirectionalYaw: 0,
        color: {
          x: 55,
          y: 155,
          z: 255,
        },
        persistent: false,
        attachmentPoint: "",
      },
      {
        model: "Abilities\\Spells\\Items\\TomeOfRetraining\\TomeOfRetrainingCaster.mdl",
        repeatInterval: -1,
        group: 0,
        scale: 4,
        startHeight: 0,
        endHeight: 0,
        extraDirectionalYaw: 0,
        color: {
          x: 25,
          y: 105,
          z: 225,
        },
        persistent: false,
        attachmentPoint: "",
      },
      {
        model: "Abilities\\Spells\\Human\\Thunderclap\\ThunderClapCaster.mdl",
        repeatInterval: -1,
        group: 0,
        scale: 2,
        startHeight: 0,
        endHeight: 0,
        extraDirectionalYaw: 0,
        color: {
          x: 255,
          y: 255,
          z: 225,
        },
        persistent: false,
        attachmentPoint: "",
      },
    ],
    attachedSfxList: [
      {
        model: "Abilities\\Spells\\Other\\Drain\\ManaDrainCaster.mdl",
        repeatInterval: 0,
        group: 0,
        scale: 1.0,
        startHeight: 0,
        endHeight: 0,
        extraDirectionalYaw: 0,
        color: {
          x: 55,
          y: 155,
          z: 255,
        },
        persistent: true,
        attachmentPoint: "origin",
      },
    ],
  },
  // --------------------------------------------
  { 
    name: "sfx dragon fist", 
    repeatInterval: 1,
    sfxList: [
      {
        model: "WindCircleFaster.mdl",
        repeatInterval: 0,
        group: 0,
        scale: 0.8,
        startHeight: 0,
        endHeight: 0,
        extraDirectionalYaw: 0,
        color: {
          x: 255,
          y: 255,
          z: 255,
        },
        persistent: false,
        attachmentPoint: "",
      },
      {
        model: "Abilities\\Weapons\\DemolisherFireMissile\\DemolisherFireMissile.mdl",
        repeatInterval: -1,
        group: 0,
        scale: 2,
        startHeight: 0,
        endHeight: 0,
        extraDirectionalYaw: 0,
        color: {
          x: 255,
          y: 255,
          z: 225,
        },
        persistent: false,
        attachmentPoint: "",
      },
      {
        model: "Abilities\\Spells\\Other\\Doom\\DoomTarget.mdl",
        repeatInterval: 4,
        group: 0,
        scale: 1.5,
        startHeight: 0,
        endHeight: 0,
        extraDirectionalYaw: 0,
        color: {
          x: 255,
          y: 255,
          z: 225,
        },
        persistent: false,
        attachmentPoint: "",
      },
    ],
    attachedSfxList: [
      {
        model: "Abilities\\Weapons\\PhoenixMissile\\Phoenix_Missile_mini.mdl",
        repeatInterval: 0,
        group: 0,
        scale: 1.0,
        startHeight: 0,
        endHeight: 0,
        extraDirectionalYaw: 0,
        color: {
          x: 255,
          y: 255,
          z: 255,
        },
        persistent: true,
        attachmentPoint: "overhead",
      },
      {
        model: "Abilities\\Spells\\Other\\Doom\\DoomTarget.mdl",
        repeatInterval: 0,
        group: 0,
        scale: 1.0,
        startHeight: 0,
        endHeight: 0,
        extraDirectionalYaw: 0,
        color: {
          x: 255,
          y: 255,
          z: 255,
        },
        persistent: true,
        attachmentPoint: "origin",
      },
      {
        model: "units\\human\\phoenix\\phoenix.mdl",
        repeatInterval: 0,
        group: 0,
        scale: 2,
        startHeight: 0,
        endHeight: 0,
        extraDirectionalYaw: 0,
        color: {
          x: 255,
          y: 255,
          z: 225,
        },
        persistent: false,
        attachmentPoint: "chest",
      },
    ],
  },
  // --------------------------------------------
];