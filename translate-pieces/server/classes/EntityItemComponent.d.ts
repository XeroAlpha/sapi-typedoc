/* IMPORT */ import { EntityComponent, ItemStack } from '../index';

/**
 * If added onto the entity, this indicates that the entity
 * represents a free-floating item in the world. Lets you
 * retrieve the actual item stack contents via the itemStack
 * property.
 * @example checkFeatherNearby.ts
 * ```typescript
 * import { DimensionLocation, EntityComponentTypes } from "@minecraft/server";
 *
 * // Returns true if a feather item entity is within 'distance' blocks of 'location'.
 * function isFeatherNear(location: DimensionLocation, distance: number): boolean {
 *     const items = location.dimension.getEntities({
 *         location: location,
 *         maxDistance: 20,
 *     });
 *
 *     for (const item of items) {
 *         const itemComp = item.getComponent(EntityComponentTypes.Item);
 *
 *         if (itemComp) {
 *             if (itemComp.itemStack.typeId.endsWith('feather')) {
 *                 return true;
 *             }
 *         }
 *     }
 *
 *     return false;
 * }
 * ```
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityItemComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * Item stack represented by this entity in the world.
     *
     * @throws This property can throw when used.
     */
    readonly itemStack: ItemStack;
    static readonly componentId = 'minecraft:item';
}