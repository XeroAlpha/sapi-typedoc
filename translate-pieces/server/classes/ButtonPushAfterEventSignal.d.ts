/* IMPORT */ import { ButtonPushAfterEvent } from '../index';

/**
 * Manages callbacks that are connected to when a button is
 * pushed.
 * @seeExample buttonPushEvent.ts
 */
export class ButtonPushAfterEventSignal {
    private constructor();
    /**
     * @beta
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
     * @beta
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