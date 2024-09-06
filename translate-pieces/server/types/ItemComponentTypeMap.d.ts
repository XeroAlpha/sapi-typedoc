/* IMPORT */ import { ItemCooldownComponent, ItemDurabilityComponent, ItemDyeableComponent, ItemEnchantableComponent, ItemFoodComponent, ItemPotionComponent } from '../index';

/**
 * @beta
 */
export type ItemComponentTypeMap = {
    cooldown: ItemCooldownComponent;
    durability: ItemDurabilityComponent;
    dyeable: ItemDyeableComponent;
    enchantable: ItemEnchantableComponent;
    food: ItemFoodComponent;
    'minecraft:cooldown': ItemCooldownComponent;
    'minecraft:durability': ItemDurabilityComponent;
    'minecraft:dyeable': ItemDyeableComponent;
    'minecraft:enchantable': ItemEnchantableComponent;
    'minecraft:food': ItemFoodComponent;
    'minecraft:potion': ItemPotionComponent;
    potion: ItemPotionComponent;
};