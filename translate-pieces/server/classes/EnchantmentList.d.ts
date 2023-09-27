/**
 * @beta
 * This class represents a collection of enchantments that can
 * be applied to an item.
 */
export class EnchantmentList implements Iterable<Enchantment> {
    /**
     * @remarks
     * The item slot/type that this collection is applied to.
     *
     */
    readonly slot: number;
    /**
     * @remarks
     * Creates a new EnchantmentList.
     *
     */
    constructor(enchantmentSlot: number);
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    [Symbol.iterator](): Iterator<Enchantment>;
    /**
     * @remarks
     * Attempts to add the enchantment to this collection. Returns
     * true if successful.
     *
     * This function can't be called in read-only mode.
     *
     */
    addEnchantment(enchantment: Enchantment): boolean;
    /**
     * @remarks
     * Returns whether or not the provided EnchantmentInstance can
     * be added to this collection.
     *
     * This function can't be called in read-only mode.
     *
     */
    canAddEnchantment(enchantment: Enchantment): boolean;
    /**
     * @remarks
     * Returns an enchantment associated with a type.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getEnchantment(enchantmentType: EnchantmentType | string): Enchantment | undefined;
    /**
     * @remarks
     * If this collection has an EnchantmentInstance with type,
     * returns the level of the enchantment. Returns 0 if not
     * present.
     *
     * @throws This function can throw errors.
     */
    hasEnchantment(enchantmentType: EnchantmentType | string): number;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    next(): IteratorResult<Enchantment>;
    /**
     * @remarks
     * Removes an EnchantmentInstance with type from this
     * collection if present.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    removeEnchantment(enchantmentType: EnchantmentType | string): void;
}