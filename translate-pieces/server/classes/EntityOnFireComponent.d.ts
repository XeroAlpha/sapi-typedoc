/* IMPORT */ import { EntityComponent } from '../index';

/**
 * @beta
 * When present on an entity, this entity is on fire.
 * @example setEntityOnFire.ts
 * ```typescript
 * import { world, Entity, EntityComponentTypes, system } from "@minecraft/server";
 *
 * function setAblaze(entity: Entity) {
 *     entity.setOnFire(20, true);
 *
 *     system.runTimeout(() => {
 *         const onfire = entity.getComponent(EntityComponentTypes.OnFire);
 *         if (onfire) {
 *             world.sendMessage(`${onfire.onFireTicksRemaining} fire ticks remaining, extinguishing the entity.`);
 *         }
 *         // This will extinguish the entity
 *         entity.extinguishFire(true);
 *     }, 30); // Run in 30 ticks or ~1.5 seconds
 *
 * }
 * ```
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityOnFireComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * The number of ticks remaining before the fire goes out.
     *
     */
    readonly onFireTicksRemaining: number;
    static readonly componentId = 'minecraft:onfire';
}