/* IMPORT */ import { BlockBoundingBox } from '../../server';
/* IMPORT */ import { BrushShapeSettings, IPropertyPane, ISubPanePropertyItem, RelativeVolumeListBlockVolume } from '..';

/**
 * Base for creating new brush shapes
 */
export declare abstract class BrushShape {
    get displayName(): string;
    get icon(): string;
    get id(): string;
    /**
     * @remarks
     * Constructs a new instance of the `BrushShape` class
     *
     */
    constructor(_id: string, _displayName: string, _icon: string);
    abstract applySetting(brushSettings: BrushShapeSettings): void;
    /**
     * @remarks
     * Calculates the bounding box of the shape in local
     * coordinates. Used for region allocation before shape
     * placement.
     *
     * @returns
     * Object with min and max Vector3 bounds
     */
    abstract calculateBounds(): BlockBoundingBox;
    abstract createSettingsPane(
        parentPane: IPropertyPane,
        onSettingsChange?: () => void,
    ): ISubPanePropertyItem | undefined;
    abstract createShape(): RelativeVolumeListBlockVolume;
    /**
     * @remarks
     * Asynchronously creates the shape, yielding control
     * periodically to avoid timeouts. Use this for large shapes
     * where createShape() may timeout.
     *
     * @param cancelToken
     * Optional token to cancel the operation. Set cancelled to
     * true to abort.
     * @param yieldInterval
     * Number of blocks to process before yielding. Default is
     * 10000.
     * @returns
     * Promise that resolves to the shape positions as Vector3
     * array.
     */
    abstract createShapeAsync(
        cancelToken?: {
            cancelled: boolean;
        },
        yieldInterval?: number,
    ): Promise<RelativeVolumeListBlockVolume>;
    /**
     * @remarks
     * Returns a mathematical estimate of the number of blocks in
     * the shape. Used for UI display and validation before shape
     * creation.
     *
     * @returns
     * Estimated block count
     */
    abstract estimateBlockCount(): number;
    abstract getSettings(): BrushShapeSettings;
}
