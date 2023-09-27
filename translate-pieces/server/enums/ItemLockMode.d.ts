/**
 * @beta
 * Describes how an an item can be moved within a container.
 */
export enum ItemLockMode {
    /**
     * @beta
     * @remarks
     * The item cannot be dropped or crafted with.
     *
     */
    inventory = 'inventory',
    /**
     * @beta
     * @remarks
     * The item has no container restrictions.
     *
     */
    none = 'none',
    /**
     * @beta
     * @remarks
     * The item cannot be moved from its slot, dropped or crafted
     * with.
     *
     */
    slot = 'slot',
}