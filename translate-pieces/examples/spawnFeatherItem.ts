import { ItemStack, DimensionLocation } from "@minecraft/server";
import { MinecraftItemTypes } from "@minecraft/vanilla-data";

function spawnFeatherItem(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
  const featherItem = new ItemStack(MinecraftItemTypes.Feather, 1);

  targetLocation.dimension.spawnItem(featherItem, targetLocation);
  log(`New feather created at ${targetLocation.x}, ${targetLocation.y}, ${targetLocation.z}!`);
}
