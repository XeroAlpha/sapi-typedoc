/* IMPORT */ import { PlayerLeaveAfterEvent } from '../index';

/**
 * Provides an adaptable interface for callers to subscribe to
 * an event that fires after a player leaves a world.
 */
export class IPlayerLeaveAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Subscribes to the event.
     *
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: PlayerLeaveAfterEvent) => void): (arg: PlayerLeaveAfterEvent) => void;
    /**
     * @remarks
     * Unsubscribes from the event.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: PlayerLeaveAfterEvent) => void): void;
}