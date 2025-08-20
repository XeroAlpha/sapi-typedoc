/**
 * The types of item components that are accessible via
 * function ItemStack.getComponent.
 */
export enum ItemComponentTypes {
    /**
     * @rc
     * @remarks
     * The minecraft:book component.
     *
     */
    Book = 'minecraft:book',
    Compostable = 'minecraft:compostable',
    /**
     * @remarks
     * The minecraft:cooldown component.
     *
     */
    Cooldown = 'minecraft:cooldown',
    /**
     * @remarks
     * The minecraft:durability component.
     *
     */
    Durability = 'minecraft:durability',
    Dyeable = 'minecraft:dyeable',
    /**
     * @remarks
     * The minecraft:enchantable component.
     *
     */
    Enchantable = 'minecraft:enchantable',
    /**
     * @remarks
     * The minecraft:food component.
     *
     */
    Food = 'minecraft:food',
    /**
     * @beta
     */
    Inventory = 'minecraft:inventory',
    /**
     * @beta
     */
    Potion = 'minecraft:potion',
}