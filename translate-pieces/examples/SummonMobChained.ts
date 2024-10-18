import { DimensionLocation } from "@minecraft/server";

function summonMobChained(targetLocation: DimensionLocation) {
  const armorStandArray = targetLocation.dimension.getEntities({
    type: "armor_stand",
  });
  const playerArray = targetLocation.dimension.getPlayers({
    location: { x: 0, y: -60, z: 0 },
    closest: 4,
    maxDistance: 15,
  });
  armorStandArray.forEach((entity) => {
    playerArray.forEach((player) => {
      targetLocation.dimension.spawnEntity("pig", {
        x: player.location.x + 1,
        y: player.location.y,
        z: player.location.z,
      });
    });
  });
}
