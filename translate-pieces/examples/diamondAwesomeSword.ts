import { EntityComponentTypes, ItemStack, Player } from '@minecraft/server';
import { MinecraftItemTypes } from '@minecraft/vanilla-data';

function giveAwesomeSword(player: Player) {
    const diamondAwesomeSword = new ItemStack(MinecraftItemTypes.DiamondSword, 1);
    diamondAwesomeSword.setLore([
        '§c§lDiamond Sword of Awesome§r',
         '+10 coolness', '§p+4 shiny§r'
    ]);

    // hover over/select the item in your inventory to see the lore.
    const inventory = player.getComponent(EntityComponentTypes.Inventory);
    if (inventory === undefined || inventory.container === undefined) {
        return;
    }

    inventory.container.setItem(0, diamondAwesomeSword);
}
