/* IMPORT */ import { ItemComponent, ItemComponentTypeMap, ItemLockMode, ItemType } from '../index';

/**
 * Defines a collection of items.
 */
export class ItemStack {
    /**
     * @remarks
     * Number of the items in the stack. Valid values range between
     * 1-255. The provided value will be clamped to the item's
     * maximum stack size.
     *
     * This property can't be edited in read-only mode.
     *
     * @throws
     * Throws if the value is outside the range of 1-255.
     */
    amount: number;
    /**
     * @remarks
     * Returns whether the item is stackable. An item is considered
     * stackable if the item's maximum stack size is greater than 1
     * and the item does not contain any custom data or properties.
     *
     */
    readonly isStackable: boolean;
    /**
     * @remarks
     * Gets or sets whether the item is kept on death.
     *
     * This property can't be edited in read-only mode.
     *
     */
    keepOnDeath: boolean;
    /**
     * @remarks
     * Gets or sets the item's lock mode. The default value is
     * `ItemLockMode.none`.
     *
     * This property can't be edited in read-only mode.
     *
     */
    lockMode: ItemLockMode;
    /**
     * @remarks
     * The maximum stack size. This value varies depending on the
     * type of item. For example, torches have a maximum stack size
     * of 64, while eggs have a maximum stack size of 16.
     *
     */
    readonly maxAmount: number;
    /**
     * @remarks
     * Given name of this stack of items. The name tag is displayed
     * when hovering over the item. Setting the name tag to an
     * empty string or `undefined` will remove the name tag.
     *
     * This property can't be edited in read-only mode.
     *
     * @throws
     * Throws if the length exceeds 255 characters.
     */
    nameTag?: string;
    /**
     * @remarks
     * The type of the item.
     *
     */
    readonly 'type': ItemType;
    /**
     * @remarks
     * Identifier of the type of items for the stack. If a
     * namespace is not specified, 'minecraft:' is assumed.
     * Examples include 'wheat' or 'apple'.
     *
     */
    readonly typeId: string;
    /**
     * @remarks
     * Creates a new instance of a stack of items for use in the
     * world.
     *
     * @param itemType
     * Type of item to create. See the {@link
     * @minecraft/vanilla-data.MinecraftItemTypes} enumeration for
     * a list of standard item types in Minecraft experiences.
     * @param amount
     * Number of items to place in the stack, between 1-255. The
     * provided value will be clamped to the item's maximum stack
     * size. Note that certain items can only have one item in the
     * stack.
     * @throws
     * Throws if `itemType` is invalid, or if `amount` is outside
     * the range of 1-255.
     */
    constructor(itemType: ItemType | string, amount?: number);
    /**
     * @remarks
     * Creates an exact copy of the item stack, including any
     * custom data or properties.
     *
     * @returns
     * Returns a copy of this item stack.
     */
    clone(): ItemStack;
    /**
     * @remarks
     * Get the list of block types this item can break in Adventure
     * mode.
     *
     * This function can't be called in read-only mode.
     *
     */
    getCanDestroy(): string[];
    /**
     * @remarks
     * Get the list of block types this item can be placed on in
     * Adventure mode.
     *
     * This function can't be called in read-only mode.
     *
     */
    getCanPlaceOn(): string[];
    /**
     * @remarks
     * Gets a component (that represents additional capabilities)
     * for an item stack.
     *
     * @param componentId
     * The identifier of the component (e.g., 'minecraft:food'). If
     * no namespace prefix is specified, 'minecraft:' is assumed.
     * Available component IDs can be found as part of the {@link
     * ItemComponentTypes} enum.
     * @returns
     * Returns the component if it exists on the item stack,
     * otherwise undefined.
     * @example durability.ts
     * ```typescript
     * // Get the maximum durability of a custom sword item
     * const itemStack = new ItemStack('custom:sword');
     * const durability = itemStack.getComponent(ItemComponentTypes.Durability);
     * const maxDurability = durability.maxDurability;
     * ```
     */
    getComponent<T extends keyof ItemComponentTypeMap>(componentId: T): ItemComponentTypeMap[T] | undefined;
    /**
     * @remarks
     * Returns all components that are both present on this item
     * stack and supported by the API.
     *
     */
    getComponents(): ItemComponent[];
    /**
     * @remarks
     * Returns the lore value - a secondary display string - for an
     * ItemStack.
     *
     * @returns
     * An array of lore lines. If the item does not have lore,
     * returns an empty array.
     */
    getLore(): string[];
    /**
     * @remarks
     * Returns a set of tags associated with this item stack.
     *
     */
    getTags(): string[];
    /**
     * @remarks
     * Returns true if the specified component is present on this
     * item stack.
     *
     * @param componentId
     * The identifier of the component (e.g., 'minecraft:food') to
     * retrieve. If no namespace prefix is specified, 'minecraft:'
     * is assumed.
     */
    hasComponent(componentId: string): boolean;
    /**
     * @remarks
     * Checks whether this item stack has a particular tag
     * associated with it.
     *
     * @param tag
     * Tag to search for.
     * @returns
     * True if the Item Stack has the tag associated with it, else
     * false.
     */
    hasTag(tag: string): boolean;
    /**
     * @remarks
     * Returns whether this item stack can be stacked with the
     * given `itemStack`. This is determined by comparing the item
     * type and any custom data and properties associated with the
     * item stacks. The amount of each item stack is not taken into
     * consideration.
     *
     * @param itemStack
     * ItemStack to check stacking compatability with.
     * @returns
     * True if the Item Stack is stackable with the itemStack
     * passed in.
     */
    isStackableWith(itemStack: ItemStack): boolean;
    /**
     * @remarks
     * The list of block types this item can break in Adventure
     * mode. The block names are displayed in the item's tooltip.
     * Setting the value to undefined will clear the list.
     *
     * This function can't be called in read-only mode.
     *
     * @param blockIdentifiers
     * String list of block types that the item can destroy.
     * @throws
     * Throws if any of the provided block identifiers are invalid.
     * @example example.ts
     * ```typescript
     * // Creates a diamond pickaxe that can destroy cobblestone and obsidian
     * const specialPickaxe = new ItemStack("minecraft:diamond_pickaxe");
     * specialPickaxe.setCanDestroy(["minecraft:cobblestone", "minecraft:obsidian"]);
     * ```
     */
    setCanDestroy(blockIdentifiers?: string[]): void;
    /**
     * @remarks
     * The list of block types this item can be placed on in
     * Adventure mode. This is only applicable to block items. The
     * block names are displayed in the item's tooltip. Setting the
     * value to undefined will clear the list.
     *
     * This function can't be called in read-only mode.
     *
     * @param blockIdentifiers
     * String list of block types that the item can be placed on.
     * @throws
     * Throws if any of the provided block identifiers are invalid.
     * @example example.ts
     * ```typescript
     * // Creates a gold block that can be placed on grass and dirt
     * const specialGoldBlock = new ItemStack("minecraft:gold_block");
     * specialPickaxe.setCanPlaceOn(["minecraft:grass", "minecraft:dirt"]);
     * ```
     */
    setCanPlaceOn(blockIdentifiers?: string[]): void;
    /**
     * @remarks
     * Sets the lore value - a secondary display string - for an
     * ItemStack. The lore list is cleared if set to an empty
     * string or undefined.
     *
     * This function can't be called in read-only mode.
     *
     * @param loreList
     * List of lore lines. Each element in the list represents a
     * new line. The maximum lore line count is 20. The maximum
     * lore line length is 50 characters.
     * @throws This function can throw errors.
     * @example diamondAwesomeSword.ts
     * ```typescript
     *   const diamondAwesomeSword = new mc.ItemStack(mc.MinecraftItemTypes.diamondSword, 1);
     *   let players = mc.world.getAllPlayers();
     *
     *   diamondAwesomeSword.setLore(["§c§lDiamond Sword of Awesome§r", "+10 coolness", "§p+4 shiny§r"]);
     *
     *   // hover over/select the item in your inventory to see the lore.
     *   const inventory = players[0].getComponent("inventory") as mc.EntityInventoryComponent;
     *   inventory.container.setItem(0, diamondAwesomeSword);
     *
     *   let item = inventory.container.getItem(0);
     *
     *   if (item) {
     *     let enchants = item.getComponent("minecraft:enchantments") as mc.ItemEnchantsComponent;
     *     let knockbackEnchant = new mc.Enchantment("knockback", 3);
     *     enchants.enchantments.addEnchantment(knockbackEnchant);
     *   }
     * ```
     * @example multilineLore.ts
     * ```typescript
     * // Set the lore of an item to multiple lines of text
     * const itemStack = new ItemStack("minecraft:diamond_sword");
     * itemStack.setLore(["Line 1", "Line 2", "Line 3"]);
     * ```
     */
    setLore(loreList?: string[]): void;
    /**
     * @beta
     * @remarks
     * Triggers an item type event. For custom items, a number of
     * events are defined in an items' definition for key item
     * behaviors.
     *
     * This function can't be called in read-only mode.
     *
     * @param eventName
     * Name of the item type event to trigger. If a namespace is
     * not specified, minecraft: is assumed.
     */
    triggerEvent(eventName: string): void;
}