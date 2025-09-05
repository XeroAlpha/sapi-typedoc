/* IMPORT */ import { ItemBookComponent, ItemCompostableComponent, ItemCooldownComponent, ItemDurabilityComponent, ItemDyeableComponent, ItemEnchantableComponent, ItemFoodComponent, ItemInventoryComponent, ItemPotionComponent } from '..';

export type ItemComponentTypeMap = {
    book: ItemBookComponent;
    compostable: ItemCompostableComponent;
    cooldown: ItemCooldownComponent;
    durability: ItemDurabilityComponent;
    dyeable: ItemDyeableComponent;
    enchantable: ItemEnchantableComponent;
    food: ItemFoodComponent;
    inventory: ItemInventoryComponent;
    'minecraft:book': ItemBookComponent;
    'minecraft:compostable': ItemCompostableComponent;
    'minecraft:cooldown': ItemCooldownComponent;
    'minecraft:durability': ItemDurabilityComponent;
    'minecraft:dyeable': ItemDyeableComponent;
    'minecraft:enchantable': ItemEnchantableComponent;
    'minecraft:food': ItemFoodComponent;
    'minecraft:inventory': ItemInventoryComponent;
    'minecraft:potion': ItemPotionComponent;
    potion: ItemPotionComponent;
};
