/* IMPORT */ import { BrushShape, CuboidBrushShapeSettings, IPropertyPane, ISubPanePropertyItem, RelativeVolumeListBlockVolume } from '..';

export declare class CuboidBrushShape extends BrushShape {
    /**
     * @remarks
     * Constructs a new instance of the `CuboidBrushShape` class
     *
     */
    constructor(settings?: {
        uniform?: boolean;
        length?: number;
        width?: number;
        height?: number;
        depth?: number;
        minLength?: number;
        xRotation?: number;
        yRotation?: number;
        zRotation?: number;
    });
    applySetting(brushSettings: CuboidBrushShapeSettings): void;
    createSettingsPane(parentPane: IPropertyPane, onSettingsChange?: () => void): ISubPanePropertyItem;
    createShape(): RelativeVolumeListBlockVolume;
    getSettings(): CuboidBrushShapeSettings;
}
