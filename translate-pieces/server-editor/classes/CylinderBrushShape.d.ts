/* IMPORT */ import { BrushShape, IPropertyPane, ISubPanePropertyItem, RelativeVolumeListBlockVolume } from '../index';

export declare class CylinderBrushShape extends BrushShape {
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
    });
    createSettingsPane(parentPane: IPropertyPane, onSettingsChange?: () => void): ISubPanePropertyItem;
    createShape(): RelativeVolumeListBlockVolume;
}