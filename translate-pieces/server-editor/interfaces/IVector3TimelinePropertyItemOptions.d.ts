/* IMPORT */ import { IPropertyItemOptionsBase, IVector3TimelinePropertyItemEntry, LocalizedString } from '..';

/**
 * Optional properties for Vector3 Timeline property item
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IVector3TimelinePropertyItemOptions extends IPropertyItemOptionsBase {
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
     * List of nodes entries in the vector3 timeline.
     *
     */
    entries?: IVector3TimelinePropertyItemEntry[];
    /**
     * @remarks
     * True means nodes cannot be dragged or modified
     *
     */
    isGraphReadOnly?: boolean;
    /**
     * @remarks
     * Callback triggered when a new vector3 node is added to the
     * timeline.
     *
     */
    onNodeAdded?: (node: IVector3TimelinePropertyItemEntry) => void;
    /**
     * @remarks
     * Callback triggered when a timeline node's vector3 value
     * changes.
     *
     */
    onNodeChanged?: (node: IVector3TimelinePropertyItemEntry) => void;
    /**
     * @remarks
     * Callback triggered when a vector3 node is removed from the
     * timeline. *
     *
     */
    onNodeRemoved?: (node: IVector3TimelinePropertyItemEntry) => void;
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
