/* IMPORT */ import { EntityDieAfterEvent, EntityEventOptions } from '../index';

/**
 * 支持注册一个事件，该事件会在实体死亡后触发。
 *
 * Supports registering for an event that fires after an entity
 * has died.
 */
export class EntityDieAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 订阅一个事件，当实体死亡时触发。
     *
     * Subscribes to an event that fires when an entity dies.
     *
     * 此函数不能在只读模式下调用。
     *
     * This function can't be called in read-only mode.
     *
     * 此函数可以在早期执行模式下调用。
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 实体死亡时调用的函数。
     *
     * Function to call when an entity dies.
     * @param options
     * 订阅触发时的额外过滤选项。
     *
     * Additional filtering options for when the subscription
     * fires.
     * @returns
     * 返回一个闭包，可用于后续取消订阅的调用。
     *
     * Returns the closure that can be used in future downstream
     * calls to unsubscribe.
     */
    subscribe(
        callback: (arg0: EntityDieAfterEvent) => void,
        options?: EntityEventOptions,
    ): (arg0: EntityDieAfterEvent) => void;
    /**
     * @remarks
     * 停止调用此事件，当实体死亡时不再触发你的函数。
     *
     * Stops this event from calling your function when an entity
     * dies.
     *
     * 此函数不能在只读模式下调用。
     *
     * This function can't be called in read-only mode.
     *
     * 此函数可以在早期执行模式下调用。
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: EntityDieAfterEvent) => void): void;
}