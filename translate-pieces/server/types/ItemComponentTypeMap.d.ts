/* IMPORT */ import { ItemBlockDynamicPropertiesComponent, ItemBookComponent, ItemCompostableComponent, ItemCooldownComponent, ItemDurabilityComponent, ItemDyeableComponent, ItemEnchantableComponent, ItemFoodComponent, ItemInventoryComponent, ItemPotionComponent } from '..';

export type ItemComponentTypeMap = {
    block_actor_dynamic_properties: ItemBlockDynamicPropertiesComponent;
    book: ItemBookComponent;
    compostable: ItemCompostableComponent;
    cooldown: ItemCooldownComponent;
    durability: ItemDurabilityComponent;
    dyeable: ItemDyeableComponent;
    enchantable: ItemEnchantableComponent;
    food: ItemFoodComponent;
    inventory: ItemInventoryComponent;
    'minecraft:block_actor_dynamic_properties': ItemBlockDynamicPropertiesComponent;
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
