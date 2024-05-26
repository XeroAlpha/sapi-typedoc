/* IMPORT */ import { minecraftserver } from '../index';

export interface CursorAttachmentProperties {
    boundsFillColor?: minecraftserver.RGBA;
    boundsVisible?: boolean;
    boundsWireframeColor?: minecraftserver.RGBA;
    contentsFillColor?: minecraftserver.RGBA;
    contentsWireframeColor?: minecraftserver.RGBA;
    mirror?: minecraftserver.StructureMirrorAxis;
    offset?: minecraftserver.Vector3;
    origin?: minecraftserver.Vector3;
    rotation?: minecraftserver.StructureRotation;
}