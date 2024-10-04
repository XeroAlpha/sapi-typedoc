// A function that moves an item from one slot of the player's inventory to another player's inventory
import { Player, EntityComponentTypes } from '@minecraft/server';

function moveBetweenPlayers(slotId: number, fromPlayer: Player, toPlayer: Player) {
    const fromInventory = fromPlayer.getComponent(EntityComponentTypes.Inventory);
    const toInventory = toPlayer.getComponent(EntityComponentTypes.Inventory);

    if (fromInventory && toInventory && fromInventory.container && toInventory.container) {
        fromInventory.container.moveItem(slotId, slotId, toInventory.container);
    }
}
