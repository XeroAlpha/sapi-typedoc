/* IMPORT */ import { ItemComponent, Player } from '..';

/**
 * When present on an item, this item has a cooldown effect
 * when used by entities.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemCooldownComponent extends ItemComponent {
    private constructor();
    /**
     * @remarks
     * Represents the cooldown category that this item is
     * associated with.
     *
     * @throws
     */
    readonly cooldownCategory: string;
    /**
     * @remarks
     * Amount of time, in ticks, it will take this item to
     * cooldown.
     *
     * @throws
     */
    readonly cooldownTicks: number;
    static readonly componentId = 'minecraft:cooldown';
    /**
     * @remarks
     * @worldMutation
     *
     * @throws
     */
    getCooldownTicksRemaining(player: Player): number;
    /**
     * @remarks
     * Will return true if the item is the cooldown category passed
     * in and false otherwise.
     *
     * @worldMutation
     *
     * @param cooldownCategory
     * The cooldown category that might be associated with this
     * item.
     * @returns
     * True if the item is the given cooldown category.
     * @throws
     */
    isCooldownCategory(cooldownCategory: string): boolean;
    /**
     * @remarks
     * Starts a new cooldown period for this item.
     *
     * @worldMutation
     *
     * @throws
     */
    startCooldown(player: Player): void;
}
