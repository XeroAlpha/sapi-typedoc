/* IMPORT */ import { EffectAddAfterEvent, EntityEventOptions } from '..';

/**
 * Manages callbacks that are connected to when an effect is
 * added to an entity.
 */
export class EffectAddAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when an effect is added
     * to an entity.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(
        callback: (arg0: EffectAddAfterEvent) => void,
        options?: EntityEventOptions,
    ): (arg0: EffectAddAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an effect is added
     * to an entity.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: EffectAddAfterEvent) => void): void;
}
