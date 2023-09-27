/**
 * @beta
 * As part of the Healable component, represents a specific
 * item that can be fed to an entity to cause health effects.
 */
export class FeedItem {
    private constructor();
    /**
     * @remarks
     * The amount of health this entity gains when fed this item.
     * This number is an integer starting at 0. Sample values can
     * go as high as 40.
     *
     */
    readonly healAmount: number;
    /**
     * @remarks
     * Identifier of type of item that can be fed. If a namespace
     * is not specified, 'minecraft:' is assumed. Example values
     * include 'wheat' or 'golden_apple'.
     *
     */
    readonly item: string;
    /**
     * @remarks
     * As part of the Healable component, an optional collection of
     * side effects that can occur from being fed an item.
     *
     */
    getEffects(): FeedItemEffect[];
}