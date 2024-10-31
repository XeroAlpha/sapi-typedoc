/* IMPORT */ import { WidgetComponentBaseOptions, minecraftserver } from '../index';

export interface WidgetComponentClipboardOptions extends WidgetComponentBaseOptions {
    boundsFillColor?: minecraftserver.RGBA;
    boundsOutlineColor?: minecraftserver.RGBA;
    clipboardMirror?: minecraftserver.StructureMirrorAxis;
    clipboardNormalizedOrigin?: minecraftserver.Vector3;
    clipboardOffset?: minecraftserver.Vector3;
    clipboardRotation?: minecraftserver.StructureRotation;
    showBounds?: boolean;
}