/* IMPORT */ import { EntityAttributeComponent } from '../index';

/**
 * @beta
 * Defines the interactions with this entity for Exhaustion.
 * Wraps the `minecraft.player.exhaustion` attribute.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityExhaustionComponent extends EntityAttributeComponent {
    private constructor();
    static readonly componentId = 'minecraft:player.exhaustion';
}