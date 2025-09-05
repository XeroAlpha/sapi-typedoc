/* IMPORT */ import { EntityComponent } from '..';

/**
 * When added, this component signifies that this entity is
 * currently tamed.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsTamedComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:is_tamed';
}
