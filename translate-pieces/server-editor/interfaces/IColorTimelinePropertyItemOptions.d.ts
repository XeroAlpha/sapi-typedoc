/* IMPORT */ import { IColorTimelinePropertyItemEntry, IPropertyItemOptionsBase, LocalizedString } from '..';

/**
 * Optional properties for Color Timeline property item
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IColorTimelinePropertyItemOptions extends IPropertyItemOptionsBase {
    /**
     * @remarks
     * Custom precision for the calculations
     *
     */
    decimalPrecision?: number;
    /**
     * @remarks
     * If true, nodes cannot be added or removed
     *
     */
    disableAddRemoveNodes?: boolean;
    /**
     * @remarks
     * List of nodes entries in the color timeline.
     *
     */
    entries?: IColorTimelinePropertyItemEntry[];
    /**
     * @remarks
     * True means nodes cannot be dragged or modified
     *
     */
    isGraphReadOnly?: boolean;
    /**
     * @remarks
     * Callback triggered when a new RGBA node is added to the
     * timeline.
     *
     */
    onNodeAdded?: (node: IColorTimelinePropertyItemEntry) => void;
    /**
     * @remarks
     * Callback triggered when a timeline node's RGBA value
     * changes.
     *
     */
    onNodeChanged?: (node: IColorTimelinePropertyItemEntry) => void;
    /**
     * @remarks
     * Callback triggered when an RGBA node is removed from the
     * timeline. *
     *
     */
    onNodeRemoved?: (node: IColorTimelinePropertyItemEntry) => void;
    /**
     * @remarks
     * This callback is called when UI control time is changed.
     *
     */
    onTimeChanged?: (current: number, prev: number) => void;
    /**
     * @remarks
     * Flag that enables gradient background color on the timeline
     * to be rendered, default is true
     *
     */
    renderGradientBackground?: boolean;
    /**
     * @remarks
     * Localized title of the property item
     *
     */
    title?: LocalizedString;
}
