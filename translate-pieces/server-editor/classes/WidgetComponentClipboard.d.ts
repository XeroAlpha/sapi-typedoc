/* IMPORT */ import { RGBA, StructureMirrorAxis, StructureRotation, Vector3, WidgetComponentBase } from '../index';

export class WidgetComponentClipboard extends WidgetComponentBase {
    private constructor();
    /**
     * @remarks
     * @worldMutation
     *
     */
    clipboardOffset: Vector3;
    highlightHullColor: RGBA;
    highlightOutlineColor: RGBA;
    hullColor: RGBA;
    mirror: StructureMirrorAxis;
    normalizedOrigin: Vector3;
    outlineColor: RGBA;
    rotation: StructureRotation;
    showOutline: boolean;
}