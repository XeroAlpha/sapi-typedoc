/* IMPORT */ import { BrushShape, RelativeVolumeListBlockVolume } from '../index';

export declare class SingleBlockBrushShape extends BrushShape {
    /**
     * @remarks
     * Constructs a new instance of the `SingleBlockBrushShape`
     * class
     *
     */
    constructor();
    createSettingsPane(): undefined;
    createShape(): RelativeVolumeListBlockVolume;
}