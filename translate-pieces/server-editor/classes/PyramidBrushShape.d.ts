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
    createSettingsPane(parentPane: IPropertyPane, onSettingsChange?: () => void): ISubPanePropertyItem;
    createShape(): RelativeVolumeListBlockVolume;
    getSettings(): PyramidBrushShapeSettings;
}
