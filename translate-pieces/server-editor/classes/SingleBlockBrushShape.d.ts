/* IMPORT */ import { BrushShape, BrushShapeSettings, RelativeVolumeListBlockVolume } from '..';

export declare class SingleBlockBrushShape extends BrushShape {
    /**
     * @remarks
     * Constructs a new instance of the `SingleBlockBrushShape`
     * class
     *
     */
    constructor();
    applySetting(_settings: BrushShapeSettings): void;
    createSettingsPane(): undefined;
    createShape(): RelativeVolumeListBlockVolume;
    getSettings(): BrushShapeSettings;
}
