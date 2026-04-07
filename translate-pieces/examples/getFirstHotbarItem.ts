import { world, EntityInventoryComponent, DimensionLocation } from "@minecraft/server";

function getFirstHotbarItem(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
  for (const player of world.getAllPlayers()) {
    const inventory = player.getComponent(EntityInventoryComponent.componentId) as EntityInventoryComponent;
    if (inventory && inventory.container) {
      const firstItem = inventory.container.getItem(0);

      if (firstItem) {
        log("First item in hotbar is: " + firstItem.typeId);
      }

      return inventory.container.getItem(0);
    }
    return undefined;
  }
}
