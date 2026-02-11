/* IMPORT */ import { BlockBoundingBox } from '../../server';
/* IMPORT */ import { BrushShape, EllipsoidBrushShapeSettings, IPropertyPane, ISubPanePropertyItem, RelativeVolumeListBlockVolume } from '..';

export declare class EllipsoidBrushShape extends BrushShape {
    /**
     * @remarks
     * Constructs a new instance of the `EllipsoidBrushShape` class
     *
     */
    constructor(settings?: {
        uniform?: boolean;
        radius?: number;
        width?: number;
        height?: number;
        depth?: number;
        minRadius?: number;
        maxRadius?: number;
        xRotation?: number;
        yRotation?: number;
        zRotation?: number;
        hollow?: boolean;
        thickness?: number;
        enableHollowSettings?: boolean;
    });
    applySetting(brushSettings: EllipsoidBrushShapeSettings): void;
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
    getSettings(): EllipsoidBrushShapeSettings;
}
