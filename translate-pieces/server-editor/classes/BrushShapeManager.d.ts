/* IMPORT */ import { BlockMaskList, BrushShape, SettingsUIElement, minecraftserver } from '../index';

export class BrushShapeManager {
    private constructor();
    readonly activeBrushShape?: BrushShape;
    readonly activeBrushVolume?: minecraftserver.CompoundBlockVolume;
    readonly brushShapeList: BrushShape[];
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftserver.Error}
     */
    activateBrushShape(name: string): minecraftserver.CompoundBlockVolume;
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
     */
    beginPainting(): void;
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
     */
    endPainting(): void;
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
    setBlockPaletteOverride(
        overrideBlock?: minecraftserver.BlockPermutation | minecraftserver.BlockType | string,
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
     * @throws This function can throw errors.
     *
     * {@link Error}
     */
    uiSettingValueChanged(elementName: string, newValue: boolean | number | string | minecraftserver.Vector3): boolean;
}