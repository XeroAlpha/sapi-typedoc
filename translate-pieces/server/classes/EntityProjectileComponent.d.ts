/* IMPORT */ import { Entity, EntityComponent, ProjectileShootOptions, Vector3 } from '../index';

/**
 * The projectile component controls the properties of a
 * projectile entity and allows it to be shot in a given
 * direction.
 * This component is present when the entity has the
 * minecraft:projectile component.
 * @example shootArrow.ts
 * ```typescript
 * import { world, Vector3 } from '@minecraft/server';
 *
 * const location: Vector3 = { x: 0, y: -59, z: 0 }; // Replace with the coordinates of where you want to spawn the arrow
 * const velocity: Vector3 = { x: 0, y: 0, z: 5 };
 * const arrow = world.getDimension('overworld').spawnEntity('minecraft:arrow', location);
 * const projectileComp = arrow.getComponent('minecraft:projectile');
 * projectileComp?.shoot(velocity);
 * ```
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityProjectileComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * The fraction of the projectile's speed maintained every tick
     * while traveling through air.
     *
     * This property can't be edited in read-only mode.
     *
     */
    airInertia: number;
    /**
     * @remarks
     * If true, the entity will be set on fire when hurt. The
     * default burn duration is 5 seconds. This duration can be
     * modified via the onFireTime property. The entity will not
     * catch fire if immune or if the entity is wet.
     *
     * This property can't be edited in read-only mode.
     *
     */
    catchFireOnHurt: boolean;
    /**
     * @remarks
     * If true, the projectile will spawn crit particles when hit
     * by a player. E.g. Player attacking a Shulker bullet.
     *
     * This property can't be edited in read-only mode.
     *
     */
    critParticlesOnProjectileHurt: boolean;
    /**
     * @remarks
     * If true, the projectile will be destroyed when it takes
     * damage. E.g. Player attacking a Shulker bullet.
     *
     * This property can't be edited in read-only mode.
     *
     */
    destroyOnProjectileHurt: boolean;
    /**
     * @remarks
     * The gravity applied to the projectile. When the entity is
     * not on the ground, subtracts this amount from the
     * projectile’s change in vertical position every tick. The
     * higher the value, the faster the projectile falls. If
     * negative, the entity will rise instead of fall.
     *
     * This property can't be edited in read-only mode.
     *
     */
    gravity: number;
    /**
     * @remarks
     * The sound that plays when the projectile hits an entity.
     *
     * This property can't be edited in read-only mode.
     *
     */
    hitEntitySound?: string;
    /**
     * @remarks
     * The sound that plays when the projectile hits a block.
     *
     * This property can't be edited in read-only mode.
     *
     */
    hitGroundSound?: string;
    /**
     * @remarks
     * The particle that spawns when the projectile hits something.
     *
     * This property can't be edited in read-only mode.
     *
     */
    hitParticle?: string;
    /**
     * @remarks
     * If true and the weather is thunder and the entity has line
     * of sight to the sky, the entity will be struck by lightning
     * when hit. E.g. A thrown Trident with the Channeling
     * enchantment.
     *
     * This property can't be edited in read-only mode.
     *
     */
    lightningStrikeOnHit: boolean;
    /**
     * @remarks
     * The fraction of the projectile's speed maintained every tick
     * while traveling through a liquid.
     *
     * This property can't be edited in read-only mode.
     *
     */
    liquidInertia: number;
    /**
     * @remarks
     * Duration in seconds that the entity hit will be on fire for
     * when catchFireOnHurt is set to true.
     *
     * This property can't be edited in read-only mode.
     *
     */
    onFireTime: number;
    /**
     * @remarks
     * The owner of the projectile. This is used to determine what
     * the projectile can collide with and damage. It also
     * determines which entity is assigned as the attacker.
     *
     * This property can't be edited in read-only mode.
     *
     */
    owner?: Entity;
    /**
     * @remarks
     * If true, the projectile will bounce off mobs when no damage
     * is taken. E.g. A spawning wither.
     *
     * This property can't be edited in read-only mode.
     *
     */
    shouldBounceOnHit: boolean;
    /**
     * @remarks
     * If true, the projectile will stop moving when an entity is
     * hit as thought it had been blocked. E.g. Thrown trident on
     * hit behavior.
     *
     * This property can't be edited in read-only mode.
     *
     */
    stopOnHit: boolean;
    static readonly componentId = 'minecraft:projectile';
    /**
     * @remarks
     * Shoots the projectile with a given velocity. The projectile
     * will be shot from its current location.
     *
     * This function can't be called in read-only mode.
     *
     * @param velocity
     * The velocity to fire the projectile. This controls both the
     * speed and direction which which the projectile will be shot.
     * @param options
     * Optional configuration for the shoot.
     * @throws
     * Throws if the component or entity no longer exist.
     */
    shoot(velocity: Vector3, options?: ProjectileShootOptions): void;
}