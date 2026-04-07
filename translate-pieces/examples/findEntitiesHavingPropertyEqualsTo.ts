import { EntityQueryOptions, DimensionLocation } from "@minecraft/server";

function findEntitiesHavingPropertyEqualsTo(
    targetLocation: DimensionLocation
) {
  // Minecraft bees have a has_nectar boolean property
  const queryOption: EntityQueryOptions = {
    propertyOptions: [{ propertyId: "minecraft:has_nectar", value: { equals: true } }],
  };

  const entities = targetLocation.dimension.getEntities(queryOption);
}
