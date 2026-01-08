/* IMPORT */ import { Vector2 } from '../../server';
/* IMPORT */ import { BasicTooltipContent, IPropertyItemOptionsBase, LocalizedString } from '..';

/**
 * Optional properties for Vector2 property item
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IVector2PropertyItemOptions extends IPropertyItemOptionsBase {
    /**
     * @remarks
     * Shows clear button for the item. If undefined, it will be
     * true.
     *
     */
    hasClearButton?: boolean;
    /**
     * @remarks
     * If true label text will be hidden. It will be visible by
     * default.
     *
     */
    hiddenLabel?: boolean;
    /**
     * @remarks
     * If we should treat the Vector2 properties as integer values.
     * By default is false.
     *
     */
    isInteger?: boolean;
    /**
     * @remarks
     * The min possible limits. If undefined,
     * Number.MAX_SAFE_INTEGER will be used.
     *
     */
    max?: Partial<Vector2>;
    /**
     * @remarks
     * The min possible limits. If undefined,
     * Number.MIN_SAFE_INTEGER will be used.
     *
     */
    min?: Partial<Vector2>;
    /**
     * @remarks
     * This callback is called when UI control is changed.
     *
     */
    onChange?: (newValue: Vector2, oldValue: Vector2) => void;
    /**
     * @remarks
     * Localized title of the property item
     *
     */
    title?: LocalizedString;
    /**
     * @remarks
     * Tooltip description of the property item
     *
     */
    tooltip?: BasicTooltipContent;
}
