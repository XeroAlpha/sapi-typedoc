/* IMPORT */ import { BlockBoundingBox } from '../../server';
/* IMPORT */ import { BrushShape, ConeBrushShapeSettings, IPropertyPane, ISubPanePropertyItem, RelativeVolumeListBlockVolume } from '..';

export declare class ConeBrushShape extends BrushShape {
    /**
     * @remarks
     * Constructs a new instance of the `ConeBrushShape` class
     *
     */
    constructor(settings?: {
        uniform?: boolean;
        radius?: number;
        width?: number;
        height?: number;
        depth?: number;
        maxRadius?: number;
        maxHeight?: number;
        xRotation?: number;
        yRotation?: number;
        zRotation?: number;
        hollow?: boolean;
        thickness?: number;
        enableHollowSettings?: boolean;
    });
    applySetting(brushSettings: ConeBrushShapeSettings): void;
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
    getSettings(): ConeBrushShapeSettings;
}
