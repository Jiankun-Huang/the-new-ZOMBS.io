export default [
  {
    name: "body",
    default: {},
    send: false
  },
  {
    name: "uid",
    default: 0,
    send: true
  },
  {
    name: "position",
    default: {
      x: 0,
      y: 0
    },
    send: true
  },
  {
    name: "yaw",
    default: 0,
    send: true
  },
  {
    name: "health",
    default: 100,
    send: true
  },
  {
    name: "maxHealth",
    default: 100,
    send: true
  },
  {
    name: "damage",
    default: 10,
    send: true
  },
  {
    name: "height",
    default: 32,
    send: false
  },
  {
    name: "width",
    default: 32,
    send: false
  },
  {
    name: "collisionRadius",
    default: 55,
    send: false
  },
  {
    name: "model",
    default: "NeutralCamp",
    send: true
  },
  {
    name: "entityClass",
    default: "Prop",
    send: true
  },
  {
    name: "dead",
    default: 0,
    send: true
  },
  {
    name: "timeDead",
    default: 0,
    send: true
  },
  {
    name: "slowed",
    default: 0,
    send: false
  },
  {
    name: "stunned",
    default: 0,
    send: false
  },
  {
    name: "timeBetweenRespawns",
    default: 1000,
    send: false
  },
  {
    name: "hasRespawned",
    default: false,
    send: false
  },
  {
    name: "neutralCount",
    default: 0,
    send: false
  },
  {
    name: "neutrals",
    default: [],
    send: false
  },
  {
    name: "isStatic",
    default: true,
    send: false
  }
]
