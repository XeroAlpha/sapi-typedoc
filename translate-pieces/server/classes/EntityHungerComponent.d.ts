/* IMPORT */ import { EntityAttributeComponent } from '../index';

/**
 * Defines the interactions with this entity for hunger. Wraps
 * the `minecraft.player.hunger` attribute.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityHungerComponent extends EntityAttributeComponent {
    private constructor();
    static readonly componentId = 'minecraft:player.hunger';
}