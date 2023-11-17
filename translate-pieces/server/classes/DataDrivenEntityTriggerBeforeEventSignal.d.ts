/* IMPORT */ import { DataDrivenEntityTriggerBeforeEvent, EntityDataDrivenTriggerEventOptions } from '../index';

/**
 * @beta
 * Contains information related to firing of a data driven
 * entity event - for example, the minecraft:ageable_grow_up
 * event on a chicken.
 */
export class DataDrivenEntityTriggerBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called before a data driven
     * entity event is triggered.
     *
     * This function can't be called in read-only mode.
     *
     */
    subscribe(
        callback: (arg: DataDrivenEntityTriggerBeforeEvent) => void,
        options?: EntityDataDrivenTriggerEventOptions,
    ): (arg: DataDrivenEntityTriggerBeforeEvent) => void;
    /**
     * @remarks
     * Removes a callback that will be called before a data driven
     * entity event is triggered.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: DataDrivenEntityTriggerBeforeEvent) => void): void;
}