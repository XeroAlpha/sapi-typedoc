/* IMPORT */ import { ItemCooldownComponent, ItemDurabilityComponent, ItemEnchantableComponent, ItemFoodComponent } from '../index';

/**
 * @beta
 */
export type ItemComponentTypeMap = {
    cooldown: ItemCooldownComponent;
    durability: ItemDurabilityComponent;
    enchantable: ItemEnchantableComponent;
    food: ItemFoodComponent;
    'minecraft:cooldown': ItemCooldownComponent;
    'minecraft:durability': ItemDurabilityComponent;
    'minecraft:enchantable': ItemEnchantableComponent;
    'minecraft:food': ItemFoodComponent;
};