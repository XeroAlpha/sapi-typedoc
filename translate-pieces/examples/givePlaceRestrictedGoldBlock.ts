import { world, ItemStack, EntityInventoryComponent, EntityComponentTypes, DimensionLocation } from "@minecraft/server";
import { MinecraftItemTypes } from "@minecraft/vanilla-data";

function givePlaceRestrictedGoldBlock(
    targetLocation: DimensionLocation
) {
  for (const player of world.getAllPlayers()) {
    const specialGoldBlock = new ItemStack(MinecraftItemTypes.GoldBlock);
    specialGoldBlock.setCanPlaceOn([MinecraftItemTypes.GrassBlock, MinecraftItemTypes.Dirt]);

    const inventory = player.getComponent(EntityComponentTypes.Inventory) as EntityInventoryComponent;
    if (inventory === undefined || inventory.container === undefined) {
      return;
    }

    inventory.container.addItem(specialGoldBlock);
  }
}
