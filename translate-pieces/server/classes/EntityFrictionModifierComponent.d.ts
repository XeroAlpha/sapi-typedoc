/* IMPORT */ import { EntityComponent } from '../index';

/**
 * Defines how much friction affects this entity.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityFrictionModifierComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * Current value of the friction modifier of the associated
     * entity.
     *
     * This property can't be edited in read-only mode.
     *
     */
    value: number;
    static readonly componentId = 'minecraft:friction_modifier';
}