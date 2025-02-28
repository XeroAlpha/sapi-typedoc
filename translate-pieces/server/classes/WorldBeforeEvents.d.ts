/* IMPORT */ import { ChatSendBeforeEventSignal, EffectAddBeforeEventSignal, EntityRemoveBeforeEventSignal, ExplosionBeforeEventSignal, ItemUseBeforeEventSignal, PlayerBreakBlockBeforeEventSignal, PlayerGameModeChangeBeforeEventSignal, PlayerInteractWithBlockBeforeEventSignal, PlayerInteractWithEntityBeforeEventSignal, PlayerLeaveBeforeEventSignal, PlayerPlaceBlockBeforeEventSignal, WeatherChangeBeforeEventSignal } from '../index';

/**
 * 表示一系列触发于实际动作发生之前的事件。通常来说，即将触发的事件可被修改或取消。
 * 但请注意，在 before 类事件过程中，能够改变游戏状态的 API 将失效，试图调用将会抛出错误。
 * （例如：dimension.spawnEntity）
 * 
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
     * @earlyExecution
     *
     * @seeExample customCommand.ts
     */
    readonly chatSend: ChatSendBeforeEventSignal;
    /**
     * @remarks
     * This event is triggered after an event has been added to an
     * entity.
     *
     * @earlyExecution
     *
     */
    readonly effectAdd: EffectAddBeforeEventSignal;
    /**
     * @remarks
     * Fires before an entity is removed from the world (for
     * example, unloaded or removed after being killed.)
     *
     * @earlyExecution
     *
     */
    readonly entityRemove: EntityRemoveBeforeEventSignal;
    /**
     * @remarks
     * This event is fired after an explosion occurs.
     *
     * @earlyExecution
     *
     */
    readonly explosion: ExplosionBeforeEventSignal;
    /**
     * @remarks
     * This event fires when an item is successfully used by a
     * player.
     *
     * @earlyExecution
     *
     */
    readonly itemUse: ItemUseBeforeEventSignal;
    /**
     * @remarks
     * This event fires before a block is broken by a player.
     *
     * @earlyExecution
     *
     */
    readonly playerBreakBlock: PlayerBreakBlockBeforeEventSignal;
    /**
     * @remarks
     * @earlyExecution
     *
     */
    readonly playerGameModeChange: PlayerGameModeChangeBeforeEventSignal;
    /**
     * @remarks
     * Fires before a player interacts with a block.
     *
     * @earlyExecution
     *
     */
    readonly playerInteractWithBlock: PlayerInteractWithBlockBeforeEventSignal;
    /**
     * @remarks
     * Fires before a player interacts with an entity.
     *
     * @earlyExecution
     *
     */
    readonly playerInteractWithEntity: PlayerInteractWithEntityBeforeEventSignal;
    /**
     * @remarks
     * Fires when a player leaves the game.
     *
     * @earlyExecution
     *
     */
    readonly playerLeave: PlayerLeaveBeforeEventSignal;
    /**
     * @beta
     * @remarks
     * This event fires before a block is placed by a player.
     *
     * @earlyExecution
     *
     */
    readonly playerPlaceBlock: PlayerPlaceBlockBeforeEventSignal;
    /**
     * @remarks
     * @earlyExecution
     *
     */
    readonly weatherChange: WeatherChangeBeforeEventSignal;
}