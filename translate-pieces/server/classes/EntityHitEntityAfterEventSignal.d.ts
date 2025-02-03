/* IMPORT */ import { EntityEventOptions, EntityHitEntityAfterEvent } from '../index';

/**
 * 管理实体对另一个实体进行近战攻击时触发的回调。
 * 
 * Manages callbacks that are connected to when an entity makes
 * a melee attack on another entity.
 */
export class EntityHitEntityAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调函数，当一个实体攻击另一个实体时会调用该回调函数。
     * 
     * This function can't be called in read-only mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(
        callback: (arg0: EntityHitEntityAfterEvent) => void,
        options?: EntityEventOptions,
    ): (arg0: EntityHitEntityAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调函数，使其不再在实体进行近战攻击时被调用。
     * 
     * This function can't be called in read-only mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: EntityHitEntityAfterEvent) => void): void;
}