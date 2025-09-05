/* IMPORT */ import { RGBA, StructureMirrorAxis, StructureRotation, Vector3 } from '../../server';
/* IMPORT */ import { WidgetComponentBaseOptions } from '..';

export interface WidgetComponentVolumeOutlineOptions extends WidgetComponentBaseOptions {
    highlightHullColor?: RGBA;
    highlightOutlineColor?: RGBA;
    hullColor?: RGBA;
    mirror?: StructureMirrorAxis;
    normalizedOrigin?: Vector3;
    outlineColor?: RGBA;
    rotation?: StructureRotation;
    showHighlightOutline?: boolean;
    showOutline?: boolean;
    volumeOffset?: Vector3;
}
