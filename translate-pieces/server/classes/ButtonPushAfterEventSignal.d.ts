/* IMPORT */ import { ButtonPushAfterEvent } from '..';

/**
 * Manages callbacks that are connected to when a button is
 * pushed.
 * @seeExample buttonPushEvent.ts
 */
export class ButtonPushAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a button is pushed.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: ButtonPushAfterEvent) => void): (arg0: ButtonPushAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a button is
     * pushed.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: ButtonPushAfterEvent) => void): void;
}
