/* IMPORT */ import { EntityItemDropAfterEvent, EntityItemDropEventOptions } from '..';

/**
 * @rc
 * Manages callbacks that are connected to when an entity has
 * dropped items.
 */
export class EntityItemDropAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when an entity has
     * dropped items.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(
        callback: (arg0: EntityItemDropAfterEvent) => void,
        options?: EntityItemDropEventOptions,
    ): (arg0: EntityItemDropAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an entity has
     * dropped items.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: EntityItemDropAfterEvent) => void): void;
}
