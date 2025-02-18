/* IMPORT */ import { EntityComponent } from '../index';

/**
 * Defines the entity's color. Only works on certain entities
 * that have predefined color values (e.g., sheep, llama,
 * shulker).
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityColorComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * Value of this particular color.
     *
     * @worldMutation
     *
     */
    value: number;
    static readonly componentId = 'minecraft:color';
}