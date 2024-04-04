/* IMPORT */ import { EffectAddBeforeEvent } from '../index';

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
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: EffectAddBeforeEvent) => void): (arg: EffectAddBeforeEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an effect is added
     * to an entity.
     *
     * This function can't be called in read-only mode.
     *
     */
    unsubscribe(callback: (arg: EffectAddBeforeEvent) => void): void;
}