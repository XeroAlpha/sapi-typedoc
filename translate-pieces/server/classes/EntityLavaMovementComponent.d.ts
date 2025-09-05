/* IMPORT */ import { EntityAttributeComponent } from '..';

/**
 * Defines the base movement speed in lava of this entity.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityLavaMovementComponent extends EntityAttributeComponent {
    private constructor();
    static readonly componentId = 'minecraft:lava_movement';
}
