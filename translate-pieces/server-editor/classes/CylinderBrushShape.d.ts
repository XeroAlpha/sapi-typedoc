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
        xRotation?: number;
        yRotation?: number;
        zRotation?: number;
        hideRotation?: boolean;
    });
    applySetting(brushSettings: CylinderBrushShapeSettings): void;
    createSettingsPane(parentPane: IPropertyPane, onSettingsChange?: () => void): ISubPanePropertyItem;
    createShape(): RelativeVolumeListBlockVolume;
    getSettings(): CylinderBrushShapeSettings;
}
