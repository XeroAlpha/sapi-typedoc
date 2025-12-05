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
        xRotation?: number;
        yRotation?: number;
        zRotation?: number;
    });
    applySetting(brushSettings: ConeBrushShapeSettings): void;
    createSettingsPane(parentPane: IPropertyPane, onSettingsChange?: () => void): ISubPanePropertyItem;
    createShape(): RelativeVolumeListBlockVolume;
    getSettings(): ConeBrushShapeSettings;
}
