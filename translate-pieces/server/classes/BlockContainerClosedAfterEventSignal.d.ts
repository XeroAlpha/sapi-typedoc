/* IMPORT */ import { BlockContainerAccessEventOptions, BlockContainerClosedAfterEvent } from '..';

/**
 * @beta
 * Manages callbacks that are connected to when a block
 * container is closed.
 */
export class BlockContainerClosedAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a block container
     * is closed.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(
        callback: (arg0: BlockContainerClosedAfterEvent) => void,
        options?: BlockContainerAccessEventOptions,
    ): (arg0: BlockContainerClosedAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a block container
     * is closed.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: BlockContainerClosedAfterEvent) => void): void;
}
