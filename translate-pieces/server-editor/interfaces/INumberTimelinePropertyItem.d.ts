/* IMPORT */ import { Vector2 } from '../../server';
/* IMPORT */ import { INumberTimelinePropertyItemEntry, IPropertyItemBase, LocalizedString } from '..';

/**
 * A property item which supports Number Timeline properties
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface INumberTimelinePropertyItem extends IPropertyItemBase {
    /**
     * @remarks
     * Update color timeline entry
     *
     * @param data
     * New color node.
     */
    addNode(data: INumberTimelinePropertyItemEntry): void;
    /**
     * @remarks
     * Get the list of nodes in the property item.
     *
     */
    getData(): INumberTimelinePropertyItemEntry[];
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
    removeNode(data: INumberTimelinePropertyItemEntry): void;
    /**
     * @remarks
     * Updates data entries value bounds.
     *
     */
    setBounds(bounds: { minValue: number; maxValue: number }): void;
    /**
     * @remarks
     * Set separator slice counts for x and y for the minor grid.
     *
     * @param counts
     * Counts for the thin grid lines.
     */
    setSeparatorSliceCount(counts: Vector2): void;
    /**
     * @remarks
     * Set separator step counts for x and y for the major grid.
     *
     * @param counts
     * Counts for the thick grid lines.
     */
    setSeparatorStepCount(counts: Vector2): void;
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
    updateNode(data: INumberTimelinePropertyItemEntry): void;
}
