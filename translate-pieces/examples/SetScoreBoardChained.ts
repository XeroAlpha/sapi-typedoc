import { world, DimensionLocation } from "@minecraft/server";

function setScoreboardChained(
    targetLocation: DimensionLocation
) {
  const objective = world.scoreboard.addObjective("scoreObjective1", "dummy");
  targetLocation.dimension
    .getEntities({
      type: "armor_stand",
      name: "myArmorStand",
    })
    .forEach((entity) => {
      if (entity.scoreboardIdentity !== undefined) {
        objective.setScore(entity.scoreboardIdentity, -1);
      }
    });
}
