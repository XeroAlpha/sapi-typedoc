/* IMPORT */ import { BlockBoundingBox } from '../../server';
/* IMPORT */ import { BrushShape, IPropertyPane, ISubPanePropertyItem, PyramidBrushShapeSettings, RelativeVolumeListBlockVolume } from '..';

export declare class PyramidBrushShape extends BrushShape {
    /**
     * @remarks
     * Constructs a new instance of the `PyramidBrushShape` class
     *
     */
    constructor(settings?: {
        uniform?: boolean;
        width?: number;
        height?: number;
        depth?: number;
        xRotation?: number;
        yRotation?: number;
        zRotation?: number;
    });
    applySetting(brushSettings: PyramidBrushShapeSettings): void;
    calculateBounds(): BlockBoundingBox;
    createSettingsPane(parentPane: IPropertyPane, onSettingsChange?: () => void): ISubPanePropertyItem;
    createShape(): RelativeVolumeListBlockVolume;
    createShapeAsync(
        cancelToken?: {
            cancelled: boolean;
        },
        yieldInterval?: number,
    ): Promise<RelativeVolumeListBlockVolume>;
    estimateBlockCount(): number;
    getSettings(): PyramidBrushShapeSettings;
}
