/* IMPORT */ import { EntityComponent } from '..';

/**
 * Represents the flying speed of an entity.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityFlyingSpeedComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * Current value of the flying speed of the associated entity.
     *
     * @worldMutation
     *
     */
    value: number;
    static readonly componentId = 'minecraft:flying_speed';
}
