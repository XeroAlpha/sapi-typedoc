/* IMPORT */ import { EntityComponent } from '../index';

/**
 * Sets the entity's visual size.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityScaleComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * Current value for the scale property set on entities.
     *
     * @worldMutation
     *
     */
    value: number;
    static readonly componentId = 'minecraft:scale';
}