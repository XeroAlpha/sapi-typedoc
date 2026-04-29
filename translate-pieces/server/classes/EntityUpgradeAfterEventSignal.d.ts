/* IMPORT */ import { EntityDataDrivenTriggerEventOptions, EntityUpgradeAfterEvent } from '..';

/**
 * @beta
 * Contains event registration related to firing of a data
 * driven entity version upgrade.
 */
export class EntityUpgradeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called after a data driven
     * entity version upgrade is triggered.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(
        callback: (arg0: EntityUpgradeAfterEvent) => void,
        options?: EntityDataDrivenTriggerEventOptions,
    ): (arg0: EntityUpgradeAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback that will be called after a data driven
     * entity version upgrade is triggered.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: EntityUpgradeAfterEvent) => void): void;
}
