/**
 * Optional arguments for
 * @minecraft/server.EntityProjectileComponent.shoot.
 */
export interface ProjectileShootOptions {
    /**
     * @remarks
     * Controls the accuracy of the shot. A value of 0 is perfect
     * accuracy.
     *
     */
    uncertainty?: number;
}