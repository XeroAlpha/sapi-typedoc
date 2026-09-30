/* IMPORT */ import { BlockVolumeBase, Vector3 } from '../../server';
/* IMPORT */ import { ClipboardItem, EditorStructure, InvalidWidgetError, RelativeVolumeListBlockVolume, WidgetCollisionType, WidgetComponentBase, WidgetComponentBoundingBox, WidgetComponentBoundingBoxOptions, WidgetComponentClipboard, WidgetComponentClipboardOptions, WidgetComponentEntity, WidgetComponentEntityOptions, WidgetComponentGizmo, WidgetComponentGizmoOptions, WidgetComponentGrid, WidgetComponentGridOptions, WidgetComponentGuide, WidgetComponentGuideOptions, WidgetComponentRenderPlane, WidgetComponentRenderPlaneOptions, WidgetComponentRenderPrimitive, WidgetComponentRenderPrimitiveOptions, WidgetComponentRenderPrimitiveTypeAxialSphere, WidgetComponentRenderPrimitiveTypeBox, WidgetComponentRenderPrimitiveTypeCone, WidgetComponentRenderPrimitiveTypeCuboid, WidgetComponentRenderPrimitiveTypeCylinder, WidgetComponentRenderPrimitiveTypeDisc, WidgetComponentRenderPrimitiveTypeEllipsoid, WidgetComponentRenderPrimitiveTypeLine, WidgetComponentRenderPrimitiveTypePyramid, WidgetComponentRenderPrimitiveTypeWireframeMesh, WidgetComponentSpline, WidgetComponentSplineOptions, WidgetComponentText, WidgetComponentTextOptions, WidgetComponentVolumeOutline, WidgetComponentVolumeOutlineOptions, WidgetGroup, WidgetStateChangeEventData } from '..';

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
     * @throws {InvalidWidgetError}
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
     * @throws {InvalidWidgetError}
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
     * @throws
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
     * @throws
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
     * @throws
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
     * @throws
     */
    addGizmoComponent(componentName: string, options?: WidgetComponentGizmoOptions): WidgetComponentGizmo;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws
     */
    addGridComponent(componentName: string, options?: WidgetComponentGridOptions): WidgetComponentGrid;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws
     */
    addGuideComponent(componentName: string, options?: WidgetComponentGuideOptions): WidgetComponentGuide;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws
     */
    addRenderPlaneComponent(
        componentName: string,
        options?: WidgetComponentRenderPlaneOptions,
    ): WidgetComponentRenderPlane;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws
     */
    addRenderPrimitiveComponent(
        componentName: string,
        primitiveType:
            | WidgetComponentRenderPrimitiveTypeAxialSphere
            | WidgetComponentRenderPrimitiveTypeBox
            | WidgetComponentRenderPrimitiveTypeCone
            | WidgetComponentRenderPrimitiveTypeCuboid
            | WidgetComponentRenderPrimitiveTypeCylinder
            | WidgetComponentRenderPrimitiveTypeDisc
            | WidgetComponentRenderPrimitiveTypeEllipsoid
            | WidgetComponentRenderPrimitiveTypeLine
            | WidgetComponentRenderPrimitiveTypePyramid
            | WidgetComponentRenderPrimitiveTypeWireframeMesh,
        options?: WidgetComponentRenderPrimitiveOptions,
    ): WidgetComponentRenderPrimitive;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws
     */
    addSplineComponent(componentName: string, options?: WidgetComponentSplineOptions): WidgetComponentSpline;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws
     */
    addTextComponent(componentName: string, label: string, options?: WidgetComponentTextOptions): WidgetComponentText;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws
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
     * @throws
     */
    delete(): void;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws
     */
    deleteComponent(componentOrName: string | WidgetComponentBase): void;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws
     */
    getComponent(componentName: string): WidgetComponentBase;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws {InvalidWidgetError}
     */
    getComponents(): WidgetComponentBase[];
    /**
     * @remarks
     * @worldMutation
     *
     * @throws {InvalidWidgetError}
     */
    setStateChangeEvent(eventFunction?: (arg0: WidgetStateChangeEventData) => void): void;
}
