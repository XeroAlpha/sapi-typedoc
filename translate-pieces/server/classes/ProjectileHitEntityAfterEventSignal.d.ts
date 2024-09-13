/* IMPORT */ import { ProjectileHitEntityAfterEvent } from '../index';

/**
 * Manages callbacks that are connected to when a projectile
 * hits an entity.
 */
export class ProjectileHitEntityAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a projectile hits
     * an entity.
     *
     * This function can't be called in read-only mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(callback: (arg: ProjectileHitEntityAfterEvent) => void): (arg: ProjectileHitEntityAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a projectile hits
     * an entity.
     *
     * This function can't be called in read-only mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg: ProjectileHitEntityAfterEvent) => void): void;
}