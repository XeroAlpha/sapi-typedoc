import { world, EntityInventoryComponent, EntityComponentTypes, DimensionLocation } from "@minecraft/server";
import { MinecraftEntityTypes } from "@minecraft/vanilla-data";

function moveBetweenContainers(
    targetLocation: DimensionLocation
) {
  const players = world.getAllPlayers();

  const chestCart = targetLocation.dimension.spawnEntity(MinecraftEntityTypes.ChestMinecart, {
    x: targetLocation.x + 1,
    y: targetLocation.y,
    z: targetLocation.z,
  });

  if (players.length > 0) {
    const fromPlayer = players[0];

    const fromInventory = fromPlayer.getComponent(EntityComponentTypes.Inventory) as EntityInventoryComponent;
    const toInventory = chestCart.getComponent(EntityComponentTypes.Inventory) as EntityInventoryComponent;

    if (fromInventory && toInventory && fromInventory.container && toInventory.container) {
      fromInventory.container.moveItem(0, 0, toInventory.container);
    }
  }
}
