/* IMPORT */ import { BlockBoundingBox } from '../../server';
/* IMPORT */ import { BlockUtilityTasks, BrushShape, BrushShapeSettings, BrushShapeTaskRequest, RelativeVolumeListBlockVolume } from '..';

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
    createShapeAsyncTask(_blockUtils: BlockUtilityTasks, _yieldInterval?: number): BrushShapeTaskRequest;
    estimateBlockCount(): number;
    getSettings(): BrushShapeSettings;
}
