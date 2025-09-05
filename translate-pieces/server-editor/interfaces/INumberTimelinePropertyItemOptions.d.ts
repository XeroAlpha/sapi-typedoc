/* IMPORT */ import { Vector2 } from '../../server';
/* IMPORT */ import { INumberTimelinePropertyItemEntry, IPropertyItemOptionsBase, LocalizedString } from '..';

/**
 * Optional properties for Number Timeline property item
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface INumberTimelinePropertyItemOptions extends IPropertyItemOptionsBase {
    /**
     * @remarks
     * The data bounds for the value node property
     *
     */
    bounds?: {
        minValue: number;
        maxValue: number;
    };
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
    entries?: INumberTimelinePropertyItemEntry[];
    /**
     * @remarks
     * The separator slice count for the graph thin lines
     *
     */
    gridSeparatorSliceCount?: Vector2;
    /**
     * @remarks
     * The separator step counts for the graph bold lines
     *
     */
    gridSeparatorStepCount?: Vector2;
    /**
     * @remarks
     * True means nodes cannot be dragged or modified
     *
     */
    isGraphReadOnly?: boolean;
    /**
     * @remarks
     * Callback triggered when a new number node is added to the
     * timeline.
     *
     */
    onNodeAdded?: (node: INumberTimelinePropertyItemEntry) => void;
    /**
     * @remarks
     * Callback triggered when a timeline node's number value
     * changes.
     *
     */
    onNodeChanged?: (node: INumberTimelinePropertyItemEntry) => void;
    /**
     * @remarks
     * Callback triggered when an number node is removed from the
     * timeline. *
     *
     */
    onNodeRemoved?: (node: INumberTimelinePropertyItemEntry) => void;
    /**
     * @remarks
     * This callback is called when UI control time is changed.
     *
     */
    onTimeChanged?: (current: number, prev: number) => void;
    /**
     * @remarks
     * Localized title of the property item
     *
     */
    title?: LocalizedString;
}
