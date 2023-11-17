/* IMPORT */ import { EntityComponent } from '../index';

/**
 * When added, this component signifies that this entity can
 * hide from hostile mobs while invisible.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsHiddenWhenInvisibleComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:is_hidden_when_invisible';
}