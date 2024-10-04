const specialPickaxe = new ItemStack('minecraft:diamond_pickaxe');
specialPickaxe.setCanDestroy(['minecraft:cobblestone', 'minecraft:obsidian']);

// Creates a diamond pickaxe that can destroy cobblestone and obsidian
import { ItemStack, Player } from '@minecraft/server';
import { MinecraftItemTypes } from '@minecraft/vanilla-data';

function giveRestrictedPickaxe(player: Player) {
    const specialPickaxe = new ItemStack(MinecraftItemTypes.DiamondPickaxe);
    specialPickaxe.setCanPlaceOn([MinecraftItemTypes.Cobblestone, MinecraftItemTypes.Obsidian]);

    const inventory = player.getComponent('inventory');
    if (inventory === undefined || inventory.container === undefined) {
        return;
    }

    inventory.container.addItem(specialPickaxe);
}
