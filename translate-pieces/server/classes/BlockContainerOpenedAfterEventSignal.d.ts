/* IMPORT */ import { BlockContainerAccessEventOptions, BlockContainerOpenedAfterEvent } from '..';

/**
 * @beta
 * Manages callbacks that are connected to when a block
 * container is opened.
 */
export class BlockContainerOpenedAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a block container
     * is opened.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(
        callback: (arg0: BlockContainerOpenedAfterEvent) => void,
        options?: BlockContainerAccessEventOptions,
    ): (arg0: BlockContainerOpenedAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a block container
     * is opened.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: BlockContainerOpenedAfterEvent) => void): void;
}
