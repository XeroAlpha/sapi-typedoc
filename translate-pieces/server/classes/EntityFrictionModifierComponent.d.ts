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
     * @throws This property can throw when used.
     */
    readonly value: number;
    static readonly componentId = 'minecraft:friction_modifier';
}