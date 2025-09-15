/* IMPORT */ import { Vector2 } from '../../server';
/* IMPORT */ import { BasicTooltipContent, IPropertyItemBase, LocalizedString } from '..';

/**
 * A property item which supports Vector2 properties
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IVector2PropertyItem extends IPropertyItemBase {
    /**
     * @remarks
     * Current value of the property item.
     *
     */
    readonly value: Readonly<Vector2>;
    /**
     * @remarks
     * Updates title of the button.
     *
     * @param title
     * New button title.
     */
    setTitle(title: LocalizedString | undefined): void;
    /**
     * @remarks
     * Updates tooltip description of the button.
     *
     * @param tooltip
     * New button tooltip.
     */
    setTooltip(tooltip: BasicTooltipContent | undefined): void;
    /**
     * @remarks
     * Updates Vector2 limits and clamps the current value.
     *
     */
    updateAxisLimits(limits: { min?: Partial<Vector2>; max?: Partial<Vector2> }): void;
}
