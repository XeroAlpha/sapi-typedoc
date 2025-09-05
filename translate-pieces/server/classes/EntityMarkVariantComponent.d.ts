/* IMPORT */ import { EntityComponent } from '..';

/**
 * Additional variant value. Can be used to further
 * differentiate variants.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMarkVariantComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * Value of the mark variant value for this entity.
     *
     * @throws This property can throw when used.
     */
    readonly value: number;
    static readonly componentId = 'minecraft:mark_variant';
}
