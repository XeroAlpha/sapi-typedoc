/* IMPORT */ import { ChatSendBeforeEventSignal, EffectAddBeforeEventSignal, EntityRemoveBeforeEventSignal, ExplosionBeforeEventSignal, ItemUseBeforeEventSignal, ItemUseOnBeforeEventSignal, PlayerBreakBlockBeforeEventSignal, PlayerGameModeChangeBeforeEventSignal, PlayerInteractWithBlockBeforeEventSignal, PlayerInteractWithEntityBeforeEventSignal, PlayerLeaveBeforeEventSignal, PlayerPlaceBlockBeforeEventSignal, WeatherChangeBeforeEventSignal, WorldInitializeBeforeEventSignal } from '../index';

/**
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
     * @remarks
     * This event is triggered after an event has been added to an
     * entity.
     *
     */
    readonly effectAdd: EffectAddBeforeEventSignal;
    /**
     * @remarks
     * Fires before an entity is removed from the world (for
     * example, unloaded or removed after being killed.)
     *
     */
    readonly entityRemove: EntityRemoveBeforeEventSignal;
    /**
     * @remarks
     * This event is fired after an explosion occurs.
     *
     */
    readonly explosion: ExplosionBeforeEventSignal;
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
     * @remarks
     * This event fires before a block is broken by a player.
     *
     */
    readonly playerBreakBlock: PlayerBreakBlockBeforeEventSignal;
    readonly playerGameModeChange: PlayerGameModeChangeBeforeEventSignal;
    /**
     * @rc
     * @remarks
     * Fires before a player interacts with a block.
     *
     */
    readonly playerInteractWithBlock: PlayerInteractWithBlockBeforeEventSignal;
    /**
     * @rc
     * @remarks
     * Fires before a player interacts with an entity.
     *
     */
    readonly playerInteractWithEntity: PlayerInteractWithEntityBeforeEventSignal;
    /**
     * @remarks
     * Fires when a player leaves the game.
     *
     */
    readonly playerLeave: PlayerLeaveBeforeEventSignal;
    /**
     * @beta
     * @remarks
     * This event fires before a block is placed by a player.
     *
     */
    readonly playerPlaceBlock: PlayerPlaceBlockBeforeEventSignal;
    readonly weatherChange: WeatherChangeBeforeEventSignal;
    /**
     * @remarks
     * This event fires immediately when the script environment is
     * initialized on a World. Not all script functionality may be
     * available. For guaranteed access to world state, use the
     * world initialize after event.
     *
     */
    readonly worldInitialize: WorldInitializeBeforeEventSignal;
}