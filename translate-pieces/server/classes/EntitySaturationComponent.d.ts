/* IMPORT */ import { EntityAttributeComponent } from '../index';

/**
 * @beta
 * Defines the interactions with this entity for Saturation.
 * Wraps the `minecraft.player.saturation` attribute.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntitySaturationComponent extends EntityAttributeComponent {
    private constructor();
    static readonly componentId = 'minecraft:player.saturation';
}