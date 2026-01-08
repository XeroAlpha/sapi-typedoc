/* IMPORT */ import { BlockVolumeBase, Vector3 } from '../../server';
/* IMPORT */ import { ClipboardItem, EditorStructure, InvalidWidgetError, RelativeVolumeListBlockVolume, WidgetCollisionType, WidgetComponentBase, WidgetComponentBoundingBox, WidgetComponentBoundingBoxOptions, WidgetComponentClipboard, WidgetComponentClipboardOptions, WidgetComponentEntity, WidgetComponentEntityOptions, WidgetComponentGizmo, WidgetComponentGizmoOptions, WidgetComponentGrid, WidgetComponentGridOptions, WidgetComponentGuide, WidgetComponentGuideOptions, WidgetComponentRenderPrimitive, WidgetComponentRenderPrimitiveOptions, WidgetComponentRenderPrimitiveTypeAxialSphere, WidgetComponentRenderPrimitiveTypeBox, WidgetComponentRenderPrimitiveTypeDisc, WidgetComponentRenderPrimitiveTypeLine, WidgetComponentSpline, WidgetComponentSplineOptions, WidgetComponentText, WidgetComponentTextOptions, WidgetComponentVolumeOutline, WidgetComponentVolumeOutlineOptions, WidgetGroup, WidgetStateChangeEventData } from '..';

export class Widget {
    private constructor();
    /**
     * @remarks
     * @worldMutation
     *
     */
    bindPositionToBlockCursor: boolean;
    /**
     * @remarks
     * @worldMutation
     *
     */
    collisionOffset: Vector3;
    /**
     * @remarks
     * @worldMutation
     *
     */
    collisionRadius: number;
    /**
     * @remarks
     * @worldMutation
     *
     */
    collisionType: WidgetCollisionType;
    dimensionId?: string;
    /**
     * @throws This property can throw when used.
     *
     * {@link InvalidWidgetError}
     */
    readonly group: WidgetGroup;
    /**
     * @remarks
     * @worldMutation
     *
     */
    ignoreEditorModeVisibilityOverride: boolean;
    /**
     * @remarks
     * @worldMutation
     *
     */
    location: Vector3;
    /**
     * @remarks
     * @worldMutation
     *
     */
    lockPositionToSurface: boolean;
    /**
     * @throws This property can throw when used.
     *
     * {@link InvalidWidgetError}
     */
    readonly selectable: boolean;
    selected: boolean;
    showBoundingBox: boolean;
    showCollisionRadius: boolean;
    /**
     * @remarks
     * @worldMutation
     *
     */
    snapToBlockLocation: boolean;
    visible: boolean;
    readonly widgetName: string;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    addBoundingBox(
        componentName: string,
        size: Vector3,
        options?: WidgetComponentBoundingBoxOptions,
    ): WidgetComponentBoundingBox;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    addClipboardComponent(
        componentName: string,
        clipboardItem?: ClipboardItem | EditorStructure,
        options?: WidgetComponentClipboardOptions,
    ): WidgetComponentClipboard;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    addEntityComponent(
        componentName: string,
        actorNameId: string,
        options?: WidgetComponentEntityOptions,
    ): WidgetComponentEntity;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    addGizmoComponent(componentName: string, options?: WidgetComponentGizmoOptions): WidgetComponentGizmo;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    addGridComponent(componentName: string, options?: WidgetComponentGridOptions): WidgetComponentGrid;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    addGuideComponent(componentName: string, options?: WidgetComponentGuideOptions): WidgetComponentGuide;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    addRenderPrimitiveComponent(
        componentName: string,
        primitiveType:
            | WidgetComponentRenderPrimitiveTypeAxialSphere
            | WidgetComponentRenderPrimitiveTypeBox
            | WidgetComponentRenderPrimitiveTypeDisc
            | WidgetComponentRenderPrimitiveTypeLine,
        options?: WidgetComponentRenderPrimitiveOptions,
    ): WidgetComponentRenderPrimitive;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    addSplineComponent(componentName: string, options?: WidgetComponentSplineOptions): WidgetComponentSpline;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    addTextComponent(componentName: string, label: string, options?: WidgetComponentTextOptions): WidgetComponentText;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    addVolumeOutline(
        componentName: string,
        volume?: BlockVolumeBase | RelativeVolumeListBlockVolume,
        options?: WidgetComponentVolumeOutlineOptions,
    ): WidgetComponentVolumeOutline;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    delete(): void;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    deleteComponent(componentOrName: string | WidgetComponentBase): void;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    getComponent(componentName: string): WidgetComponentBase;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidWidgetError}
     */
    getComponents(): WidgetComponentBase[];
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidWidgetError}
     */
    setStateChangeEvent(eventFunction?: (arg0: WidgetStateChangeEventData) => void): void;
}
