export default [
  {
    "Name": "Wall",
    "Class": "Wall",
    "GoldCosts": [0, 5, 30, 60, 80, 100, 250, 800, 1000],
    "WoodCosts": [2, 0, 0, 0, 0, 0, 0, 0, 0],
    "StoneCosts": [0, 2, 0, 0, 0, 0, 0, 0, 0],
    "TokenCosts": [0, 0, 0, 0, 0, 0, 0, 0, 0],
    "Width": 47.99,
    "Height": 47.99,
    "Health": [150, 200, 300, 400, 600, 800, 1500, 2500, 5000],
    "MsBeforeRegen": [10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 1000],
    "HealthRegenPerSecond": [5, 7, 12, 17, 25, 40, 80, 250, 500]
  },
  {
    "Name": "GoldStash",
    "Class": "GoldStash",
    "GoldCosts": [0, 5000, 10000, 16000, 20000, 32000, 100000, 400000, 1000000],
    "WoodCosts": [0, 0, 0, 0, 0, 0, 0, 0, 0],
    "StoneCosts": [0, 0, 0, 0, 0, 0, 0, 0, 0],
    "TokenCosts": [0, 0, 0, 0, 0, 0, 0, 0, 0],
    "Width": 95.99,
    "Height": 95.99,
    "Health": [1500, 1800, 2300, 3000, 5000, 8000, 12000, 20000, 40000],
    "MsBeforeRegen": [10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000],
    "HealthRegenPerSecond": [50, 60, 70, 90, 110, 150, 400, 700, 2000]
  },
  {
    "Name": "GoldMine",
    "Class": "GoldMine",
    "GoldCosts": [0, 200, 300, 600, 800, 1200, 8000, 30000, 80000],
    "WoodCosts": [5, 15, 25, 35, 45, 55, 700, 1600, 2000],
    "StoneCosts": [5, 15, 25, 35, 45, 55, 700, 1600, 2000],
    "TokenCosts": [0, 0, 0, 0, 0, 0, 0, 0, 0],
    "Width": 95.99,
    "Height": 95.99,
    "Health": [150, 250, 350, 500, 800, 1400, 1800, 2800, 4000],
    "GoldPerSecond": [4, 6, 7, 10, 12, 15, 25, 35, 60],
    "MsBeforeRegen": [10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000],
    "HealthRegenPerSecond": [5, 7, 12, 17, 25, 40, 70, 120, 150]
  },
  {
    "Name": "Door",
    "Class": "Door",
    "GoldCosts": [0, 10, 50, 70, 150, 200, 400, 800, 1000],
    "WoodCosts": [5, 5, 0, 0, 0, 0, 0, 0, 0],
    "StoneCosts": [5, 5, 0, 0, 0, 0, 0, 0, 0],
    "TokenCosts": [0, 0, 0, 0, 0, 0, 0, 0, 0],
    "Width": 47.99,
    "Height": 47.99,
    "Health": [150, 200, 300, 500, 700, 1000, 1500, 2000, 4000],
    "MsBeforeRegen": [10000, 10000, 10000, 10000, 10000, 10000, 10000, 1000, 1000],
    "HealthRegenPerSecond": [5, 7, 12, 17, 25, 40, 70, 100, 150]
  },
  {
    "Name": "CannonTower",
    "Class": "Tower",
    "GoldCosts": [0, 100, 200, 600, 1200, 2000, 8000, 35000, 100000],
    "WoodCosts": [15, 25, 30, 40, 60, 80, 300, 800, 2000],
    "StoneCosts": [15, 25, 40, 50, 80, 120, 300, 800, 2000],
    "TokenCosts": [0, 0, 0, 0, 0, 0, 0, 0, 0],
    "TowerRadius": [500, 500, 500, 500, 600, 600, 600, 600, 700],
    "MsBetweenFires": [1000, 769, 625, 500, 400, 350, 250, 250, 200],
    "Height": 95.99,
    "Width": 95.99,
    "Health": [150, 200, 400, 800, 1200, 1600, 2200, 3600, 5000],
    "MsBeforeRegen": [10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000],
    "HealthRegenPerSecond": [2, 5, 10, 20, 40, 80, 110, 150, 200],
    "DamageToZombies": [20, 30, 50, 70, 120, 150, 200, 300, 500],
    "DamageToPlayers": [5, 5, 5, 5, 5, 5, 6, 8, 8],
    "DamageToPets": [5, 5, 5, 5, 5, 5, 6, 8, 8],
    "DamageToNeutrals": [250, 350, 450, 550, 650, 750, 850, 1000, 2000],
    "ProjectileLifetime": [1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000],
    "ProjectileVelocity": [60, 65, 70, 70, 75, 80, 100, 140, 170],
    "ProjectileName": "CannonTowerProjectile",
    "ProjectileAoe": [true, true, true, true, true, true, true, true, true],
    "ProjectileAoeRadius": [250, 250, 250, 250, 250, 250, 250, 250, 250],
    "ProjectileCollisionRadius": [10, 10, 10, 10, 10, 10, 10, 10, 10],
    "ProjectileCount": [1, 1, 1, 1, 1, 1, 1, 1, 1]
  },
  {
    "Name": "ArrowTower",
    "Class": "Tower",
    "GoldCosts": [0, 100, 200, 600, 1200, 2000, 8000, 35000, 100000],
    "WoodCosts": [5, 25, 30, 40, 50, 70, 300, 800, 2000],
    "StoneCosts": [5, 20, 30, 40, 60, 80, 300, 800, 2000],
    "TokenCosts": [0, 0, 0, 0, 0, 0, 0, 0, 0],
    "TowerRadius": [600, 650, 700, 750, 800, 850, 900, 1000, 2000],
    "MsBetweenFires": [400, 333, 285, 250, 250, 250, 250, 250, 200],
    "Height": 95.99,
    "Width": 95.99,
    "Health": [150, 200, 400, 800, 1200, 1600, 2200, 3600, 5000],
    "MsBeforeRegen": [10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000],
    "HealthRegenPerSecond": [2, 5, 10, 20, 40, 80, 110, 150, 200],
    "DamageToZombies": [20, 40, 70, 120, 180, 250, 400, 500, 700],
    "DamageToPlayers": [5, 5, 5, 5, 5, 5, 6, 6, 7],
    "DamageToPets": [5, 5, 5, 5, 5, 5, 6, 6, 7],
    "DamageToNeutrals": [250, 350, 450, 550, 650, 750, 850, 1000, 2000],
    "ProjectileLifetime": [1300, 1300, 1300, 1300, 1300, 1300, 1300, 1300, 1300],
    "ProjectileVelocity": [60, 65, 70, 70, 75, 80, 120, 140, 150],
    "ProjectileName": "ArrowTowerProjectile",
    "ProjectileAoe": [false, false, false, false, false, false, false, false, false],
    "ProjectileCollisionRadius": [10, 10, 10, 10, 10, 10, 10, 10, 10],
    "ProjectileCount": [1, 1, 1, 1, 1, 1, 1, 1, 1]
  },
  {
    "Name": "Harvester",
    "Class": "Harvester",
    "GoldCosts": [0, 100, 200, 600, 1200, 2000, 8000, 10000, 20000],
    "WoodCosts": [5, 25, 30, 40, 50, 70, 300, 600, 1000],
    "StoneCosts": [5, 20, 30, 40, 60, 80, 300, 600, 1000],
    "TokenCosts": [0, 0, 0, 0, 0, 0, 0, 0, 0],
    "Height": 95.99,
    "Width": 95.99,
    "Health": [150, 200, 400, 800, 1200, 1600, 2200, 2800, 4000],
    "MsBeforeRegen": [10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000],
    "HealthRegenPerSecond": [2, 5, 10, 20, 40, 80, 110, 130, 150],
    "HarvestAmount": [2.5, 4.65, 4.55, 7.2, 8.25, 10, 13.5, 16, 20],
    "HarvestCooldown": [1500, 1400, 1300, 1200, 1100, 1000, 900, 800, 500],
    "HarvestMax": [400, 800, 1200, 1600, 2000, 2400, 2800, 3600, 5000],
    "HarvestRange": [300, 300, 300, 300, 300, 300, 300, 300, 300],
    "DepositCostPerMinute": [200, 300, 350, 500, 600, 700, 1200, 1400, 1600],
    "DepositMax": [800, 1200, 1400, 2000, 2400, 2800, 4800, 6000, 10000],
    "MaxYawDeviation": [70, 70, 70, 70, 70, 70, 70, 70, 70]
  },
  {
    "Name": "BombTower",
    "Class": "Tower",
    "GoldCosts": [0, 100, 200, 600, 1200, 2000, 8000, 35000, 100000],
    "WoodCosts": [10, 25, 40, 50, 80, 120, 300, 800, 2000],
    "StoneCosts": [10, 25, 40, 50, 80, 120, 300, 800, 2000],
    "TokenCosts": [0, 0, 0, 0, 0, 0, 0, 0, 0],
    "TowerRadius": [1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000],
    "MsBetweenFires": [1000, 1000, 1000, 1000, 1000, 1000, 900, 900, 800],
    "Height": 95.99,
    "Width": 95.99,
    "Health": [150, 200, 400, 800, 1200, 1600, 2200, 3600, 5000],
    "MsBeforeRegen": [10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000],
    "HealthRegenPerSecond": [2, 5, 10, 20, 40, 80, 110, 150, 200],
    "DamageToZombies": [30, 60, 100, 140, 200, 600, 1200, 1600, 2000],
    "DamageToPlayers": [10, 10, 10, 10, 10, 10, 10, 10, 10],
    "DamageToPets": [10, 10, 10, 10, 10, 10, 10, 10, 10],
    "DamageToNeutrals": [250, 350, 450, 550, 650, 750, 850, 1000, 2000],
    "ProjectileLifetime": [1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000],
    "ProjectileVelocity": [20, 20, 20, 20, 20, 20, 20, 20, 20],
    "ProjectileName": "BombTowerProjectile",
    "ProjectileAoe": [true, true, true, true, true, true, true, true, true],
    "ProjectileIgnoresCollisions": [true, true, true, true, true, true, true, true, true],
    "ProjectileAoeRadius": [250, 250, 250, 250, 250, 250, 250, 250, 250],
    "ProjectileCollisionRadius": [10, 10, 10, 10, 10, 10, 10, 10, 10],
    "ProjectileMaxRange": [1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000],
    "ProjectileCount": [1, 1, 1, 1, 1, 1, 1, 1, 1]
  },
  {
    "Name": "MagicTower",
    "Class": "MagicTower",
    "GoldCosts": [0, 100, 200, 600, 1200, 2000, 8000, 35000, 100000],
    "WoodCosts": [15, 25, 40, 50, 70, 100, 300, 800, 2000],
    "StoneCosts": [15, 25, 40, 50, 70, 100, 300, 800, 2000],
    "TokenCosts": [0, 0, 0, 0, 0, 0, 0, 0, 0],
    "TowerRadius": [400, 400, 400, 400, 400, 400, 400, 400, 400],
    "MsBetweenFires": [800, 800, 700, 600, 500, 400, 300, 300, 200],
    "Height": 95.99,
    "Width": 95.99,
    "Health": [150, 200, 400, 800, 1200, 1600, 2200, 3600, 5000],
    "MsBeforeRegen": [10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000],
    "HealthRegenPerSecond": [2, 5, 10, 20, 40, 80, 110, 150, 200],
    "DamageToZombies": [10, 20, 40, 50, 70, 80, 120, 160, 300],
    "DamageToPlayers": [5, 5, 5, 5, 5, 5, 5, 5, 5],
    "DamageToPets": [5, 5, 5, 5, 5, 5, 5, 5, 5],
    "DamageToNeutrals": [250, 350, 450, 550, 650, 750, 850, 1000, 2000],
    "ProjectileLifetime": [500, 500, 500, 500, 500, 500, 500, 500, 500],
    "ProjectileVelocity": [45, 45, 45, 45, 45, 45, 45, 45, 45],
    "ProjectileName": "MageTowerProjectile",
    "ProjectileAoe": [true, true, true, true, true, true, true, true, true],
    "ProjectileAoeRadius": [100, 100, 100, 100, 100, 100, 100, 100, 100],
    "ProjectileCollisionRadius": [10, 10, 10, 10, 10, 10, 10, 10, 10],
    "ProjectileCount": [3, 3, 3, 3, 3, 3, 3, 3, 3]
  },
  {
    "Name": "MeleeTower",
    "Class": "MeleeTower",
    "GoldCosts": [0, 100, 200, 600, 1200, 2000, 8000, 35000, 100000],
    "WoodCosts": [10, 25, 30, 40, 50, 70, 300, 800, 2000],
    "StoneCosts": [10, 20, 30, 40, 60, 80, 300, 800, 2000],
    "TokenCosts": [0, 0, 0, 0, 0, 0, 0, 0, 0],
    "TowerRadius": [110, 110, 110, 110, 110, 110, 110, 110, 110],
    "MsBetweenFires": [400, 333, 285, 250, 250, 250, 250, 250, 200],
    "Height": 95.99,
    "Width": 95.99,
    "Health": [200, 400, 800, 1200, 1600, 2200, 4000, 9000, 10000],
    "MsBeforeRegen": [10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000],
    "HealthRegenPerSecond": [2, 5, 10, 20, 40, 80, 220, 350, 500],
    "DamageToZombies": [80, 120, 200, 280, 500, 1000, 2000, 3000, 5000],
    "DamageToPlayers": [5, 5, 5, 5, 5, 5, 6, 6, 7],
    "DamageToPets": [5, 5, 5, 5, 5, 5, 6, 6, 7],
    "DamageToNeutrals": [250, 350, 450, 550, 650, 750, 850, 1000, 2000],
    "MaxYawDeviation": [30, 30, 30, 30, 30, 30, 30, 30, 30]
  },
  {
    "Name": "SlowTrap",
    "Class": "Trap",
    "GoldCosts": [0, 100, 200, 400, 600, 800, 1000, 1500, 2000],
    "WoodCosts": [5, 25, 30, 40, 50, 70, 300, 800, 2000],
    "StoneCosts": [5, 20, 30, 40, 60, 80, 300, 800, 2000],
    "TokenCosts": [0, 0, 0, 0, 0, 0, 0, 0, 0],
    "Height": 47.99,
    "Width": 47.99,
    "Health": [150, 200, 400, 800, 1200, 1600, 2200, 3000, 5000],
    "MsBeforeRegen": [10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000],
    "HealthRegenPerSecond": [2, 5, 10, 20, 40, 80, 110, 150, 200],
    "SlowDuration": [2500, 2500, 2500, 3000, 3000, 3250, 3500, 4000, 5000],
    "SlowAmount": [0.4, 0.45, 0.5, 0.55, 0.6, 0.65, 0.7, 0.7, 1]
  }
]