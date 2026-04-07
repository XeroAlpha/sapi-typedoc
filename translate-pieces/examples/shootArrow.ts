import { DimensionLocation, EntityProjectileComponent } from "@minecraft/server";

function shootArrow(targetLocation: DimensionLocation) {
  const velocity = { x: 0, y: 1, z: 5 };

  const arrow = targetLocation.dimension.spawnEntity("minecraft:arrow", {
    x: targetLocation.x,
    y: targetLocation.y + 2,
    z: targetLocation.z,
  });

  const projectileComp = arrow.getComponent("minecraft:projectile") as EntityProjectileComponent;

  projectileComp?.shoot(velocity);
}
