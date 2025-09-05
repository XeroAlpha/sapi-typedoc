/* IMPORT */ import { BrushShape, RelativeVolumeListBlockVolume } from '..';

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
