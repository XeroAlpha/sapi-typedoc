/* IMPORT */ import { BlockVolume, RGBA, StructureMirrorAxis, StructureRotation, Vector3 } from '../../server';
/* IMPORT */ import { Axis, InvalidWidgetComponentError, WidgetComponentBase, WidgetComponentBoundingBoxStateChangeEventParameters } from '..';

export class WidgetComponentBoundingBox extends WidgetComponentBase {
    private constructor();
    /**
     * @remarks
     * @worldMutation
     *
     */
    boundsOffset: Vector3;
    /**
     * @remarks
     * @worldMutation
     *
     */
    enableResizeHandles: Axis;
    /**
     * @remarks
     * @worldMutation
     *
     */
    hullColor: RGBA;
    /**
     * @remarks
     * @worldMutation
     *
     */
    mirror: StructureMirrorAxis;
    /**
     * @remarks
     * @worldMutation
     *
     */
    normalizedOrigin: Vector3;
    /**
     * @remarks
     * @worldMutation
     *
     */
    outlineColor: RGBA;
    /**
     * @remarks
     * @worldMutation
     *
     */
    rotation: StructureRotation;
    /**
     * @remarks
     * @worldMutation
     *
     */
    showWorldIntersections: boolean;
    /**
     * @remarks
     * @worldMutation
     *
     */
    size: Vector3;
    /**
     * @throws {InvalidWidgetComponentError}
     */
    readonly transformedWorldVolume: BlockVolume;
    /**
     * @remarks
     * @worldMutation
     *
     */
    visibleHull: boolean;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws {InvalidWidgetComponentError}
     */
    deactivateHandles(): void;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws {InvalidWidgetComponentError}
     */
    setStateChangeEvent(eventFunction?: (arg0: WidgetComponentBoundingBoxStateChangeEventParameters) => void): void;
}
