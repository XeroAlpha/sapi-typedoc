/* IMPORT */ import { PressurePlatePopAfterEvent } from '..';

/**
 * Manages callbacks that are connected to when a pressure
 * plate is popped.
 */
export class PressurePlatePopAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a pressure plate is
     * popped.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: PressurePlatePopAfterEvent) => void): (arg0: PressurePlatePopAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a pressure plate
     * is popped.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: PressurePlatePopAfterEvent) => void): void;
}
