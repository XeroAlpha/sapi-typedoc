/**
 * @beta
 * Rules that if broken on container operations will throw an
 * error.
 */
export interface ContainerRules {
    /**
     * @remarks
     * Defines the items that are exclusively allowed in the
     * container. If empty all items are allowed in the container.
     *
     */
    allowedItems: string[];
    /**
     * @remarks
     * Determines whether other storage items can be placed into
     * the container.
     *
     */
    allowNestedStorageItems: boolean;
    /**
     * @remarks
     * Defines the items that are not allowed in the container.
     *
     */
    bannedItems: string[];
    /**
     * @remarks
     * Defines the maximum allowed total weight of all items in the
     * storage item container. If undefined container has no weight
     * limit.
     *
     */
    weightLimit?: number;
}