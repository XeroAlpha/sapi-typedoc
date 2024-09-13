/* IMPORT */ import { ProjectileHitBlockAfterEvent } from '../index';

/**
 * Manages callbacks that are connected to when a projectile
 * hits a block.
 */
export class ProjectileHitBlockAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a projectile hits a
     * block.
     *
     * This function can't be called in read-only mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(callback: (arg: ProjectileHitBlockAfterEvent) => void): (arg: ProjectileHitBlockAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a projectile hits
     * a block.
     *
     * This function can't be called in read-only mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg: ProjectileHitBlockAfterEvent) => void): void;
}