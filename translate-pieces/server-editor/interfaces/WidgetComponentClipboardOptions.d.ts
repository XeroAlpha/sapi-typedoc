/* IMPORT */ import { RGBA, StructureMirrorAxis, StructureRotation, Vector3 } from '../../server';
/* IMPORT */ import { WidgetComponentBaseOptions } from '..';

export interface WidgetComponentClipboardOptions extends WidgetComponentBaseOptions {
    clipboardOffset?: Vector3;
    highlightHullColor?: RGBA;
    highlightOutlineColor?: RGBA;
    hullColor?: RGBA;
    mirror?: StructureMirrorAxis;
    normalizedOrigin?: Vector3;
    outlineColor?: RGBA;
    rotation?: StructureRotation;
    showOutline?: boolean;
}
