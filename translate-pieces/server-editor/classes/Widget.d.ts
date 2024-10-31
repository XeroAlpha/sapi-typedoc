/* IMPORT */ import { ClipboardItem, InvalidWidgetComponentError, InvalidWidgetError, InvalidWidgetGroupError, WidgetComponentBase, WidgetComponentClipboard, WidgetComponentClipboardOptions, WidgetComponentEntity, WidgetComponentEntityOptions, WidgetComponentGizmo, WidgetComponentGizmoOptions, WidgetComponentGuide, WidgetComponentGuideOptions, WidgetComponentRenderPrimitive, WidgetComponentRenderPrimitiveOptions, WidgetComponentRenderPrimitiveTypeAxialSphere, WidgetComponentRenderPrimitiveTypeBox, WidgetComponentRenderPrimitiveTypeDisc, WidgetComponentRenderPrimitiveTypeLine, WidgetComponentSpline, WidgetComponentSplineOptions, WidgetComponentText, WidgetComponentTextOptions, WidgetStateChangeEventData, minecraftserver } from '../index';

export class Widget {
    private constructor();
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     *
     */
    bindPositionToBlockCursor: boolean;
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     *
     */
    collisionOffset: minecraftserver.Vector3;
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     *
     */
    collisionRadius: number;
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     *
     */
    location: minecraftserver.Vector3;
    /**
     * @remarks
     * This property can't be edited in read-only mode.
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
     * This property can't be edited in read-only mode.
     *
     */
    snapToBlockLocation: boolean;
    visible: boolean;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link InvalidWidgetError}
     */
    addClipboardComponent(
        componentName: string,
        clipboardItem?: ClipboardItem,
        options?: WidgetComponentClipboardOptions,
    ): WidgetComponentClipboard;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link InvalidWidgetError}
     */
    addEntityComponent(
        componentName: string,
        actorNameId: string,
        options?: WidgetComponentEntityOptions,
    ): WidgetComponentEntity;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link InvalidWidgetError}
     */
    addGizmoComponent(componentName: string, options?: WidgetComponentGizmoOptions): WidgetComponentGizmo;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link InvalidWidgetError}
     */
    addGuideComponent(componentName: string, options?: WidgetComponentGuideOptions): WidgetComponentGuide;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link InvalidWidgetError}
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
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link InvalidWidgetError}
     */
    addSplineComponent(componentName: string, options?: WidgetComponentSplineOptions): WidgetComponentSpline;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link InvalidWidgetError}
     */
    addTextComponent(componentName: string, label: string, options?: WidgetComponentTextOptions): WidgetComponentText;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link InvalidWidgetError}
     *
     * {@link InvalidWidgetGroupError}
     */
    delete(): void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link InvalidWidgetComponentError}
     *
     * {@link InvalidWidgetError}
     */
    deleteComponent(componentOrName: string | WidgetComponentBase): void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link InvalidWidgetError}
     */
    getComponent(componentName: string): WidgetComponentBase;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidWidgetError}
     */
    getComponents(): WidgetComponentBase[];
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidWidgetError}
     */
    setStateChangeEvent(eventFunction?: (arg: WidgetStateChangeEventData) => void): void;
}