// Spawns a bunch of item stacks
import { EnchantmentType, ItemComponentTypes, ItemStack, Player } from '@minecraft/server';
import { MinecraftItemTypes, MinecraftEnchantmentTypes } from '@minecraft/vanilla-data';

function giveFireSword(player: Player) {
    const ironFireSword = new ItemStack(MinecraftItemTypes.DiamondSword, 1);

    const enchantments = ironFireSword?.getComponent(ItemComponentTypes.Enchantable);
    if (enchantments) {
        enchantments.addEnchantment({ type: new EnchantmentType(MinecraftEnchantmentTypes.FireAspect), level: 1 });
    }

    const inventory = player.getComponent('minecraft:inventory');
    if (inventory === undefined || inventory.container === undefined) {
        return;
    }
    inventory.container.setItem(0, ironFireSword);
}
