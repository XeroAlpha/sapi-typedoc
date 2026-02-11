/* IMPORT */ import { IPropertyItemBase, IVector3TimelinePropertyItemEntry, LocalizedString } from '..';

/**
 * A property item which supports Vector3 Timeline properties
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IVector3TimelinePropertyItem extends IPropertyItemBase {
    /**
     * @remarks
     * Update vector3 timeline entry
     *
     * @param data
     * New vector3 node.
     */
    addNode(data: IVector3TimelinePropertyItemEntry): void;
    /**
     * @remarks
     * Get the list of nodes in the property item.
     *
     */
    getData(): IVector3TimelinePropertyItemEntry[];
    /**
     * @remarks
     * Get time current time value on the slider.
     *
     */
    getTime(): number;
    /**
     * @remarks
     * Remove vector3 node
     *
     * @param data
     * Node to be removed.
     */
    removeNode(data: IVector3TimelinePropertyItemEntry): void;
    /**
     * @remarks
     * Updates data entries value bounds.
     *
     */
    setBounds(bounds: { minValue: number; maxValue: number }): void;
    /**
     * @remarks
     * Set custom decimal precision for the calculations
     *
     */
    setPrecision(precision: number): void;
    /**
     * @remarks
     * Set time line slider value to a new value
     *
     * @param time
     * The new time value.
     */
    setTime(time: number): void;
    /**
     * @remarks
     * Updates title of the property item.
     *
     * @param title
     * New title.
     */
    setTitle(title: LocalizedString): void;
    /**
     * @remarks
     * Update node value
     *
     * @param data
     * Node to be updated.
     */
    updateNode(data: IVector3TimelinePropertyItemEntry): void;
}
