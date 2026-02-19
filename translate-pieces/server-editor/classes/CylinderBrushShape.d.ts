/* IMPORT */ import { BlockBoundingBox } from '../../server';
/* IMPORT */ import { BrushShape, CylinderBrushShapeSettings, IPropertyPane, ISubPanePropertyItem, RelativeVolumeListBlockVolume } from '..';

export declare class CylinderBrushShape extends BrushShape {
    get depth(): number;
    get height(): number;
    get radius(): number;
    get uniform(): boolean;
    get width(): number;
    /**
     * @remarks
     * Constructs a new instance of the `CylinderBrushShape` class
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
        maxHeight?: number;
        xRotation?: number;
        yRotation?: number;
        zRotation?: number;
        hideRotation?: boolean;
        hollow?: boolean;
        thickness?: number;
        enableHollowSettings?: boolean;
    });
    applySetting(brushSettings: CylinderBrushShapeSettings): void;
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
    getSettings(): CylinderBrushShapeSettings;
}
