/* IMPORT */ import { PlayerUseNameTagAfterEvent } from '..';

/**
 * @beta
 * Manages callbacks that are connected to when a player
 * successfully names an Entity with a named Name Tag item.
 */
export class PlayerUseNameTagAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Subscribes the specified callback to a player use name tag
     * after event.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: PlayerUseNameTagAfterEvent) => void): (arg0: PlayerUseNameTagAfterEvent) => void;
    /**
     * @remarks
     * Removes the specified callback from a player use name tag
     * after event.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: PlayerUseNameTagAfterEvent) => void): void;
}
