/* IMPORT */ import { IPropertyPane, ISubPanePropertyItem, RelativeVolumeListBlockVolume } from '..';

/**
 * Base for creating new brush shapes
 */
export declare abstract class BrushShape {
    get displayName(): string;
    get icon(): string;
    get id(): string;
    /**
     * @remarks
     * Constructs a new instance of the `BrushShape` class
     *
     */
    constructor(_id: string, _displayName: string, _icon: string);
    abstract createSettingsPane(
        parentPane: IPropertyPane,
        onSettingsChange?: () => void,
    ): ISubPanePropertyItem | undefined;
    abstract createShape(): RelativeVolumeListBlockVolume;
}
