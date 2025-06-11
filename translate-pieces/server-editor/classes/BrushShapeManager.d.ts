/* IMPORT */ import { BlockMaskList, BrushDirectionalPlacementMode, PaintCompletionState, PaintMode, RelativeVolumeListBlockVolume, minecraftserver } from '../index';

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
    deactivateBrushTool(): void;
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
    getBrushShapeOffset(): minecraftserver.Vector3;
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
     * @throws This function can throw errors.
     */
    setBrushMask(mask: BlockMaskList): void;
    /**
     * @remarks
     * @worldMutation
     *
     */
    setBrushShape(shape: minecraftserver.Vector3[] | RelativeVolumeListBlockVolume): void;
    /**
     * @remarks
     * @worldMutation
     *
     */
    setBrushShapeOffset(offset: minecraftserver.Vector3): void;
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
    setFlattenHeight(flattenHeight: number): void;
    /**
     * @remarks
     * @worldMutation
     *
     */
    setFlattenRadius(flattenRadius: number): void;
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