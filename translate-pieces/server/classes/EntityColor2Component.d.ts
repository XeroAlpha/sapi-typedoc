/* IMPORT */ import { EntityComponent, PaletteColor } from '..';

/**
 * Defines the entity's secondary color. Only works on certain
 * entities that have secondary predefined color values (e.g.,
 * tropical fish).
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityColor2Component extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * Value of this particular color.
     *
     * @throws This property can throw when used.
     */
    readonly value: PaletteColor;
    static readonly componentId = 'minecraft:color2';
}
