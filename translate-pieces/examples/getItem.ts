// A function that gets a copy of the first item in the player's hotbar
import { Player, EntityInventoryComponent, ItemStack } from '@minecraft/server';

function getFirstHotbarItem(player: Player): ItemStack | undefined {
    const inventory = player.getComponent(EntityInventoryComponent.componentId);
    if (inventory && inventory.container) {
        return inventory.container.getItem(0);
    }
    return undefined;
}
