/* IMPORT */ import { ItemDefinitionTriggeredBeforeEvent } from '../index';

/**
 * @beta
 * Manages callbacks that are connected to an item's definition
 * and components changing.
 */
export class ItemDefinitionBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when an item's
     * definition and components change.
     *
     * This function can't be called in read-only mode.
     *
     */
    subscribe(
        callback: (arg: ItemDefinitionTriggeredBeforeEvent) => void,
    ): (arg: ItemDefinitionTriggeredBeforeEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an item's
     * definition and components change.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ItemDefinitionTriggeredBeforeEvent) => void): void;
}