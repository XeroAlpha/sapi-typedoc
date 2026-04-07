import { world, ItemStack, EntityInventoryComponent, DimensionLocation } from "@minecraft/server";
import { MinecraftItemTypes } from "@minecraft/vanilla-data";

function giveDestroyRestrictedPickaxe(
    targetLocation: DimensionLocation
) {
  for (const player of world.getAllPlayers()) {
    const specialPickaxe = new ItemStack(MinecraftItemTypes.DiamondPickaxe);
    specialPickaxe.setCanDestroy([MinecraftItemTypes.Cobblestone, MinecraftItemTypes.Obsidian]);

    const inventory = player.getComponent("inventory") as EntityInventoryComponent;
    if (inventory === undefined || inventory.container === undefined) {
      return;
    }

    inventory.container.addItem(specialPickaxe);
  }
}
