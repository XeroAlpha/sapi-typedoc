/* IMPORT */ import { EntityComponent } from '..';

/**
 * Sets the distance through which the entity can push through.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityPushThroughComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * Value of the push through distances of this entity.
     *
     * @throws This property can throw when used.
     */
    readonly value: number;
    static readonly componentId = 'minecraft:push_through';
}
