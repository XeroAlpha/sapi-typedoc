/**
 * @beta
 * Allows this entity to generate paths that include vertical
 * walls (for example, like Minecraft spiders do.)
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityNavigationClimbComponent extends EntityNavigationComponent {
    private constructor();
    static readonly componentId = 'minecraft:navigation.climb';
}