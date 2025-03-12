/* IMPORT */ import { BrushShape, IPropertyPane, ISubPanePropertyItem, RelativeVolumeListBlockVolume } from '../index';

export declare class ConeBrushShape extends BrushShape {
    /**
     * @remarks
     * Constructs a new instance of the `ConeBrushShape` class
     *
     */
    constructor(settings?: { uniform?: boolean; radius?: number; width?: number; height?: number; depth?: number });
    createSettingsPane(parentPane: IPropertyPane, onSettingsChange?: () => void): ISubPanePropertyItem;
    createShape(): RelativeVolumeListBlockVolume;
}