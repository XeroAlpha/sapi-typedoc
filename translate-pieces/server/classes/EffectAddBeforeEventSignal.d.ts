/**
 * 管理当效果被添加到实体时连接的回调函数。
 * 
 * Manages callbacks that are connected to when an effect is
 * added to an entity.
 */
export class EffectAddBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调函数，当效果被添加到实体时会调用该回调函数。
     *
     * This function can't be called in read-only mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(callback: (arg0: EffectAddBeforeEvent) => void): (arg0: EffectAddBeforeEvent) => void;
    /**
     * @remarks
     * 移除一个回调函数，使其不再在效果被添加到实体时调用。
     *
     * This function can't be called in read-only mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: EffectAddBeforeEvent) => void): void;
}