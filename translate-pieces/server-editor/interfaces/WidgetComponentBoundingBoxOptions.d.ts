/* IMPORT */ import { RGBA, StructureMirrorAxis, StructureRotation, Vector3 } from '../../server';
/* IMPORT */ import { Axis, WidgetComponentBaseOptions, WidgetComponentBoundingBoxStateChangeEventParameters } from '..';

export interface WidgetComponentBoundingBoxOptions extends WidgetComponentBaseOptions {
    boundsOffset?: Vector3;
    enableResizeHandles?: Axis;
    hullColor?: RGBA;
    maxSize?: Vector3;
    minSize?: Vector3;
    mirror?: StructureMirrorAxis;
    normalizedOrigin?: Vector3;
    outlineColor?: RGBA;
    rotation?: StructureRotation;
    showWorldIntersections?: boolean;
    stateChangeEvent?: (arg0: WidgetComponentBoundingBoxStateChangeEventParameters) => void;
    visibleHull?: boolean;
}
