import { DimensionLocation } from "@minecraft/server";

function blockConditional(targetLocation: DimensionLocation) {
  targetLocation.dimension
    .getEntities({
      type: "fox",
    })
    .filter((entity) => {
      const block = targetLocation.dimension.getBlock({
        x: entity.location.x,
        y: entity.location.y - 1,
        z: entity.location.z,
      });

      return block !== undefined && block.matches("minecraft:stone");
    })
    .forEach((entity) => {
      targetLocation.dimension.spawnEntity("salmon", entity.location);
    });
}
