/* IMPORT */ import { EntityNavigationComponent } from '..';

/**
 * Allows this entity to generate paths in the air (for
 * example, like the Minecraft Bees do.) Keeps them from
 * falling out of the skies and doing predictive movement.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityNavigationHoverComponent extends EntityNavigationComponent {
    private constructor();
    static readonly componentId = 'minecraft:navigation.hover';
}
