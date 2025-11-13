/* IMPORT */ import { ItemType, Vector3 } from '../../server';
/* IMPORT */ import { BlockMaskList, BrushDirectionalPlacementMode, BrushElevationMode, FlattenMode, PaintCompletionState, PaintMode, RelativeVolumeListBlockVolume } from '..';
/* IMPORT */ import { BlockStateSuperset } from '../../vanilla-data';

export class BrushShapeManager {
    private constructor();
    readonly activeBrushVolume?: RelativeVolumeListBlockVolume;
    /**
     * @remarks
     * @worldMutation
     *
     */
    activateBrushTool(): void;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    beginPainting(onComplete: (arg0: PaintCompletionState) => void): void;
    /**
     * @remarks
     * @worldMutation
     *
     */
    clearBlockStateOverrides(): void;
    /**
     * @remarks
     * @worldMutation
     *
     */
    deactivateBrushTool(): void;
    /**
     * @remarks
     * @worldMutation
     *
     */
    disableItemPlacement(): void;
    /**
     * @remarks
     * @worldMutation
     *
     */
    enableItemPlacement(itemType: ItemType, data?: number): void;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    endPainting(cancelled: boolean): void;
    /**
     * @remarks
     * @worldMutation
     *
     */
    getBrushShapeOffset(): Vector3;
    /**
     * @remarks
     * @worldMutation
     *
     */
    getDirectionalPlacementMode(): BrushDirectionalPlacementMode;
    /**
     * @remarks
     * @worldMutation
     *
     */
    getInverseEraseMode(): boolean;
    /**
     * @remarks
     * @worldMutation
     *
     */
    isBrushPaintBusy(): boolean;
    /**
     * @remarks
     * @worldMutation
     *
     */
    pushBlockStateOverride<T extends keyof BlockStateSuperset>(
        blockStateName: T,
        blockStateValue: BlockStateSuperset[T],
    ): void;
    /**
     * @remarks
     * @worldMutation
     *
     */
    setBlockFacePlacementBasedOnCamera(enabled: boolean): void;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    setBrushMask(mask: BlockMaskList): void;
    /**
     * @remarks
     * @worldMutation
     *
     */
    setBrushShape(shape: Vector3[] | RelativeVolumeListBlockVolume): void;
    /**
     * @remarks
     * @worldMutation
     *
     */
    setBrushShapeOffset(offset: Vector3): void;
    /**
     * @remarks
     * @worldMutation
     *
     */
    setBrushShapeVisible(visible: boolean): void;
    /**
     * @remarks
     * @worldMutation
     *
     */
    setDirectionalPlacementMode(directionalPlacementMode: BrushDirectionalPlacementMode): void;
    /**
     * @remarks
     * @worldMutation
     *
     */
    setElevationBrushRadius(elevationBrushRadius: number): void;
    /**
     * @remarks
     * @worldMutation
     *
     */
    setElevationFalloff(elevationFalloff: number): void;
    /**
     * @remarks
     * @worldMutation
     *
     */
    setElevationMode(elevationMode: BrushElevationMode): void;
    /**
     * @remarks
     * @worldMutation
     *
     */
    setElevationSampleLayers(elevationSampleLayers: number): void;
    /**
     * @remarks
     * @worldMutation
     *
     */
    setFlattenMode(flattenMode: FlattenMode): void;
    /**
     * @remarks
     * @worldMutation
     *
     */
    setFlattenSmoothing(flattenSmoothing: number): void;
    /**
     * @remarks
     * @worldMutation
     *
     */
    setFloorBlockOverride(floorBlockOverride: boolean): void;
    /**
     * @remarks
     * @worldMutation
     *
     */
    setInverseEraseMode(inverseEraseMode: boolean): void;
    /**
     * @remarks
     * @worldMutation
     *
     */
    setTerrainStrength(terrainStrength: number): void;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    singlePaint(onComplete: (arg0: PaintCompletionState) => void): void;
    /**
     * @remarks
     * @worldMutation
     *
     */
    switchBrushPaintMode(paintMode: PaintMode): void;
}
