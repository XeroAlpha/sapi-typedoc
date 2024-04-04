/* IMPORT */ import { BrushShape, SettingsUIElement, minecraftserver } from '../index';

export class BrushShapeManager {
    private constructor();
    readonly activeBrushShape?: BrushShape;
    readonly activeBrushVolume?: minecraftserver.CompoundBlockVolume;
    readonly brushShapeNames: string[];
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    activateBrushShape(name: string): minecraftserver.CompoundBlockVolume;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getSettingsUIElements(brushName: string): SettingsUIElement[];
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    registerBrushShape(brushShape: BrushShape): void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    uiSettingValueChanged(elementName: string, newValue: boolean | number): void;
}