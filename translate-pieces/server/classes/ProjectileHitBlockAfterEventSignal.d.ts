/* IMPORT */ import { ProjectileHitBlockAfterEvent } from '..';

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
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: ProjectileHitBlockAfterEvent) => void): (arg0: ProjectileHitBlockAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a projectile hits
     * a block.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: ProjectileHitBlockAfterEvent) => void): void;
}
