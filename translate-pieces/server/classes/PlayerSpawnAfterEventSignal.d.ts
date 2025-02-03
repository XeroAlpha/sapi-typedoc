/* IMPORT */ import { PlayerSpawnAfterEvent } from '../index';

/**
 * Registers an event when a player is spawned (or re-spawned
 * after death) and fully ready within the world.
 */
export class PlayerSpawnAfterEventSignal {
    private constructor();
    /**
     * @beta
     * @remarks
     * Registers a new event receiver for this particular type of
     * event.
     *
     * This function can't be called in read-only mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(callback: (arg0: PlayerSpawnAfterEvent) => void): (arg0: PlayerSpawnAfterEvent) => void;
    /**
     * @beta
     * @remarks
     * De-registers an event receiver for the player spawn event.
     *
     * This function can't be called in read-only mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: PlayerSpawnAfterEvent) => void): void;
}