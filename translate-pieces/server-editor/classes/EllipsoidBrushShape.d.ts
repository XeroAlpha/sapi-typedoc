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
        xRotation?: number;
        yRotation?: number;
        zRotation?: number;
    });
    applySetting(brushSettings: EllipsoidBrushShapeSettings): void;
    createSettingsPane(parentPane: IPropertyPane, onSettingsChange?: () => void): ISubPanePropertyItem;
    createShape(): RelativeVolumeListBlockVolume;
    getSettings(): EllipsoidBrushShapeSettings;
}
