// Creates a gold block that can be placed on grass and dirt
import { ItemStack, Player, EntityComponentTypes } from '@minecraft/server';
import { MinecraftItemTypes } from '@minecraft/vanilla-data';

function giveRestrictedGoldBlock(player: Player) {
    const specialGoldBlock = new ItemStack(MinecraftItemTypes.GoldBlock);
    specialGoldBlock.setCanPlaceOn([MinecraftItemTypes.Grass, MinecraftItemTypes.Dirt]);

    const inventory = player.getComponent(EntityComponentTypes.Inventory);
    if (inventory === undefined || inventory.container === undefined) {
        return;
    }

    inventory.container.addItem(specialGoldBlock);
}
