// A function that swaps an item from one slot of the player's inventory to another player's inventory
import { Player, EntityComponentTypes } from '@minecraft/server';

function swapBetweenPlayers(slotId: number, fromPlayer: Player, toPlayer: Player) {
    const fromInventory = fromPlayer.getComponent(EntityComponentTypes.Inventory);
    const toInventory = toPlayer.getComponent(EntityComponentTypes.Inventory);

    if (fromInventory && toInventory && fromInventory.container && toInventory.container) {
        fromInventory.container.swapItems(slotId, slotId, toInventory.container);
    }
}
