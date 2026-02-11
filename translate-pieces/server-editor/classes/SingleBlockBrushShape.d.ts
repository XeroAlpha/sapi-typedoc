/* IMPORT */ import { BlockBoundingBox } from '../../server';
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
    calculateBounds(): BlockBoundingBox;
    createSettingsPane(): undefined;
    createShape(): RelativeVolumeListBlockVolume;
    createShapeAsync(
        _cancelToken?: {
            cancelled: boolean;
        },
        _yieldInterval?: number,
    ): Promise<RelativeVolumeListBlockVolume>;
    estimateBlockCount(): number;
    getSettings(): BrushShapeSettings;
}
