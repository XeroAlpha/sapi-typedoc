/* IMPORT */ import { EntityComponent, PaletteColor } from '../index';

export class EntityColor2Component extends EntityComponent {
    private constructor();
    /**
     * @throws This property can throw when used.
     */
    readonly value: PaletteColor;
    static readonly componentId = 'minecraft:color2';
}