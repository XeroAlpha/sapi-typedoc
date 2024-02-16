/* IMPORT */ import { EntityAttributeComponent } from '../index';

/**
 * Defines the health properties of an entity.
 * @example applyDamageThenHeal.ts
 * ```typescript
 * // A function that applies damage and then heals the entity
 * import { Entity, EntityComponentTypes, system, world } from '@minecraft/server';
 *
 * function applyDamageAndHeal(entity: Entity) {
 *     entity.applyDamage(19); // Many mobs have max damage of 20 so this is a near-death mob
 *
 *     system.runTimeout(() => {
 *         const health = entity.getComponent(EntityComponentTypes.Health);
 *         if (health) {
 *             world.sendMessage(`Entity health before heal: ${health.currentValue}`);
 *
 *             health.resetToMaxValue();
 *
 *             world.sendMessage(`Entity after before heal: ${health.currentValue}`);
 *         } else {
 *             console.warn('Entity does not have health component');
 *         }
 *     }, 40); // Run in a few seconds (40 ticks)
 * }
 * ```
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityHealthComponent extends EntityAttributeComponent {
    private constructor();
    static readonly componentId = 'minecraft:health';
}