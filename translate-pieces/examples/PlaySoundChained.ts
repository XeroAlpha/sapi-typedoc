import { DimensionLocation } from "@minecraft/server";

function playSoundChained(targetLocation: DimensionLocation) {
  const targetPlayers = targetLocation.dimension.getPlayers();
  const originEntities = targetLocation.dimension.getEntities({
    type: "armor_stand",
    name: "myArmorStand",
    tags: ["dummyTag1"],
    excludeTags: ["dummyTag2"],
  });

  originEntities.forEach((entity) => {
    targetPlayers.forEach((player) => {
      player.playSound("raid.horn");
    });
  });
}
