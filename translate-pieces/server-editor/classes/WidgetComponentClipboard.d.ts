/* IMPORT */ import { WidgetComponentBase, minecraftserver } from '../index';

export class WidgetComponentClipboard extends WidgetComponentBase {
    private constructor();
    clipboardMirror: minecraftserver.StructureMirrorAxis;
    clipboardNormalizedOrigin: minecraftserver.Vector3;
    clipboardOffset: minecraftserver.Vector3;
    clipboardRotation: minecraftserver.StructureRotation;
    fillColor: minecraftserver.RGBA;
    outlineColor: minecraftserver.RGBA;
    showBounds: boolean;
}