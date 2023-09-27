/**
 * @beta
 * Contains information related to a projectile hitting an
 * entity.
 */
export class ProjectileHitEntityAfterEvent {
    private constructor();
    /**
     * @remarks
     * Dimension where this projectile hit took place.
     *
     */
    readonly dimension: Dimension;
    /**
     * @remarks
     * Direction vector of the projectile as it hit an entity.
     *
     */
    readonly hitVector: Vector3;
    /**
     * @remarks
     * Location where the projectile hit occurred.
     *
     */
    readonly location: Vector3;
    /**
     * @remarks
     * Entity for the projectile that hit an entity.
     *
     */
    readonly projectile: Entity;
    /**
     * @remarks
     * Optional source entity that fired the projectile.
     *
     */
    readonly source?: Entity;
    /**
     * @remarks
     * Contains additional information about an entity that was
     * hit.
     *
     * This function can't be called in read-only mode.
     *
     */
    getEntityHit(): EntityHitInformation;
}