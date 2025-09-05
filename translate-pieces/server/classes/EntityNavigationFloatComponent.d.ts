/* IMPORT */ import { EntityNavigationComponent } from '..';

/**
 * Allows this entity to generate paths by flying around the
 * air like the regular Ghast.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityNavigationFloatComponent extends EntityNavigationComponent {
    private constructor();
    static readonly componentId = 'minecraft:navigation.float';
}
