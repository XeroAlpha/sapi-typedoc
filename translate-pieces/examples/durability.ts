// Gives a player a half-damaged diamond sword
import { ItemStack, Player, ItemComponentTypes, EntityComponentTypes } from '@minecraft/server';
import { MinecraftItemTypes } from '@minecraft/vanilla-data';

function giveHurtDiamondSword(player: Player) {
    const hurtDiamondSword = new ItemStack(MinecraftItemTypes.DiamondSword);
    const durabilityComponent = hurtDiamondSword.getComponent(ItemComponentTypes.Durability);
    if (durabilityComponent !== undefined) {
        durabilityComponent.damage = durabilityComponent.maxDurability / 2;
    }

    const inventory = player.getComponent(EntityComponentTypes.Inventory);
    if (inventory === undefined || inventory.container === undefined) {
        return;
    }

    inventory.container.addItem(hurtDiamondSword);
}
