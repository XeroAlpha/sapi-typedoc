/* IMPORT */ import { SoundCompletedAfterEvent } from '..';

/**
 * @beta
 * Manages callbacks that are invoked when a tracked sound's
 * declared duration elapses.
 */
export class SoundCompletedAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be invoked when a tracked sound's
     * declared duration elapses.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: SoundCompletedAfterEvent) => void): (arg0: SoundCompletedAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being invoked when a tracked sound's
     * declared duration elapses.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: SoundCompletedAfterEvent) => void): void;
}
