/* IMPORT */ import { IObservableProp, IPropertyItemOptionsBase, LocalizedString, ProgressIndicatorPropertyItemVariant } from '..';

/**
 * Optional properties for progress indicator property item
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IProgressIndicatorPropertyItemOptions extends IPropertyItemOptionsBase {
    /**
     * @remarks
     * If true label text will be hidden. If undefined, the label
     * will be visible by default.
     *
     */
    hiddenLabel?: boolean;
    /**
     * @remarks
     * Normalized loading progress (0 to 1).
     *
     */
    progress?: IObservableProp<number>;
    /**
     * @remarks
     * Localized title of the property item.
     *
     */
    title?: LocalizedString;
    /**
     * @remarks
     * Tooltip description of the property item.
     *
     */
    tooltip?: LocalizedString;
    /**
     * @remarks
     * Determines how we display progress indicator. If undefined,
     * it will default to Spinner.
     *
     */
    variant?: ProgressIndicatorPropertyItemVariant;
}
