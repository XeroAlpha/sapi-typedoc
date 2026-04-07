import { MolangVariableMap, DimensionLocation } from "@minecraft/server";

function spawnParticle(targetLocation: DimensionLocation) {
  for (let i = 0; i < 100; i++) {
    const molang = new MolangVariableMap();

    molang.setColorRGB("variable.color", { red: Math.random(), green: Math.random(), blue: Math.random() });

    const newLocation = {
      x: targetLocation.x + Math.floor(Math.random() * 8) - 4,
      y: targetLocation.y + Math.floor(Math.random() * 8) - 4,
      z: targetLocation.z + Math.floor(Math.random() * 8) - 4,
    };
    targetLocation.dimension.spawnParticle("minecraft:colored_flame_particle", newLocation, molang);
  }
}
