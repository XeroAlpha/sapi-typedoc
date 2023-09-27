/**
 * @beta
 * A set of events that fire before an actual action occurs. In
 * most cases, you can potentially cancel or modify the
 * impending event. Note that in before events any APIs that
 * modify gameplay state will not function and will throw an
 * error. (e.g., dimension.spawnEntity)
 */
export class WorldBeforeEvents {
    private constructor();
    /**
     * @beta
     * @remarks
     * This event is triggered after a chat message has been
     * broadcast or sent to players.
     *
     */
    readonly chatSend: ChatSendBeforeEventSignal;
    /**
     * @beta
     * @remarks
     * This event is fired when an entity event has been triggered
     * that will update the component definition state of an
     * entity.
     *
     */
    readonly dataDrivenEntityTriggerEvent: DataDrivenEntityTriggerBeforeEventSignal;
    /**
     * @beta
     * @remarks
     * Fires before an entity is removed from the world (for
     * example, unloaded or removed after being killed.)
     *
     */
    readonly entityRemove: EntityRemoveBeforeEventSignal;
    /**
     * @beta
     * @remarks
     * This event is fired after an explosion occurs.
     *
     */
    readonly explosion: ExplosionBeforeEventSignal;
    /**
     * @beta
     * @remarks
     * For custom items, this event is triggered when the
     * fundamental set of defined components for the item change.
     * Note that this event is only fired for custom data-driven
     * items.
     *
     */
    readonly itemDefinitionEvent: ItemDefinitionBeforeEventSignal;
    /**
     * @remarks
     * This event fires when an item is successfully used by a
     * player.
     *
     */
    readonly itemUse: ItemUseBeforeEventSignal;
    /**
     * @remarks
     * This event fires when an item is used on a block by a
     * player.
     *
     */
    readonly itemUseOn: ItemUseOnBeforeEventSignal;
    /**
     * @beta
     * @remarks
     * This event fires when a piston expands or retracts.
     *
     */
    readonly pistonActivate: PistonActivateBeforeEventSignal;
    /**
     * @beta
     * @remarks
     * This event fires before a block is broken by a player.
     *
     */
    readonly playerBreakBlock: PlayerBreakBlockBeforeEventSignal;
    /**
     * @beta
     * @remarks
     * Fires before a player is about to change dimensions.
     *
     */
    readonly playerDimensionChange: PlayerDimensionChangeBeforeEventSignal;
    /**
     * @beta
     */
    readonly playerInteractWithBlock: PlayerInteractWithBlockBeforeEventSignal;
    /**
     * @beta
     */
    readonly playerInteractWithEntity: PlayerInteractWithEntityBeforeEventSignal;
    /**
     * @beta
     * @remarks
     * This event fires before a block is placed by a player.
     *
     */
    readonly playerPlaceBlock: PlayerPlaceBlockBeforeEventSignal;
}