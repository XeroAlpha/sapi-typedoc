/* IMPORT */ import { Entity, EntityComponent, ProjectileShootOptions, Vector3 } from '../index';

/**
 * @beta
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityProjectileComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     *
     */
    airInertia: number;
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     *
     */
    catchFireOnHurt: boolean;
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     *
     */
    critParticlesOnProjectileHurt: boolean;
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     *
     */
    destroyOnProjectileHurt: boolean;
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     *
     */
    gravity: number;
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     *
     */
    hitEntitySound?: string;
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     *
     */
    hitGroundSound?: string;
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     *
     */
    hitParticle?: string;
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     *
     */
    lightningStrikeOnHit: boolean;
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     *
     */
    liquidInertia: number;
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     *
     */
    onFireTime: number;
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     *
     */
    owner?: Entity;
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     *
     */
    shouldBounceOnHit: boolean;
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     *
     */
    stopOnHit: boolean;
    static readonly componentId = 'minecraft:projectile';
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    shoot(velocity: Vector3, options?: ProjectileShootOptions): void;
}