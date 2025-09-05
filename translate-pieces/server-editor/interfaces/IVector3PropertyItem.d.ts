/* IMPORT */ import { Vector3 } from '../../server';
/* IMPORT */ import { BasicTooltipContent, IPropertyItemBase, LocalizedString } from '..';

/**
 * A property item which supports Vector3 properties
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IVector3PropertyItem extends IPropertyItemBase {
    /**
     * @remarks
     * Current value of the property item.
     *
     */
    readonly value: Readonly<Vector3>;
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
     * Updates Vector3 limits and clamps the current value.
     *
     */
    updateAxisLimits(limits: { min?: Partial<Vector3>; max?: Partial<Vector3> }): void;
}
