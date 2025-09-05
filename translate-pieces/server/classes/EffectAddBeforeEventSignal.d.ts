/* IMPORT */ import { EffectAddBeforeEvent } from '..';

/**
 * Manages callbacks that are connected to when an effect is
 * added to an entity.
 */
export class EffectAddBeforeEventSignal {
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
    subscribe(callback: (arg0: EffectAddBeforeEvent) => void): (arg0: EffectAddBeforeEvent) => void;
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
    unsubscribe(callback: (arg0: EffectAddBeforeEvent) => void): void;
}
