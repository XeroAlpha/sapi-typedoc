/* IMPORT */ import { BlockMaskList, BrushShape, PaintCompletionState, PaintMode, SettingsUIElement, minecraftserver } from '../index';

export class BrushShapeManager {
    private constructor();
    readonly activeBrushShape?: BrushShape;
    readonly activeBrushVolume?: minecraftserver.CompoundBlockVolume;
    readonly brushShapeList: BrushShape[];
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    activateBrushTool(): void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     */
    beginPainting(onComplete: (arg: PaintCompletionState) => void): void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    deactivateBrushTool(): void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     */
    endPainting(cancelled: boolean): void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    getBrushShapeOffset(): minecraftserver.Vector3;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     */
    getSettingsUIElements(brushName: string): SettingsUIElement[];
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     */
    registerBrushShape(
        name: string,
        icon: string,
        rebuild: () => minecraftserver.CompoundBlockVolume,
        getSettingsUIElements: () => SettingsUIElement[],
    ): void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     */
    setBrushMask(mask: BlockMaskList): void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    setBrushShape(shape: minecraftserver.Vector3[] | minecraftserver.CompoundBlockVolume): void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    setBrushShapeOffset(offset: minecraftserver.Vector3): void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     */
    singlePaint(onComplete: (arg: PaintCompletionState) => void): void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    switchBrushPaintMode(paintMode: PaintMode): void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftserver.Error}
     */
    switchBrushShape(name: string): minecraftserver.CompoundBlockVolume;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     */
    uiSettingValueChanged(elementName: string, newValue: boolean | number | string | minecraftserver.Vector3): boolean;
}