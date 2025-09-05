/* IMPORT */ import { IColorTimelinePropertyItemEntry, IPropertyItemBase, LocalizedString } from '..';

/**
 * A property item which supports Color Timeline properties
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IColorTimelinePropertyItem extends IPropertyItemBase {
    /**
     * @remarks
     * Update color timeline entry
     *
     * @param data
     * New color node.
     */
    addNode(data: IColorTimelinePropertyItemEntry): void;
    /**
     * @remarks
     * Get the list of nodes in the property item.
     *
     */
    getData(): IColorTimelinePropertyItemEntry[];
    /**
     * @remarks
     * Get time current time value on the slider.
     *
     */
    getTime(): number;
    /**
     * @remarks
     * Remove color node
     *
     * @param data
     * Node to be removed.
     */
    removeNode(data: IColorTimelinePropertyItemEntry): void;
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
    updateNode(data: IColorTimelinePropertyItemEntry): void;
}
