/* IMPORT */ import { minecraftserver } from '../index';

/**
 * Interface used to specify the options when a clipboard item
 * is being written to the world
 */
export interface ClipboardWriteOptions {
    /**
     * @remarks
     * An enum which represents the axis (or combination of axis')
     * along which the item should be mirrored
     * - X
     * - Z
     * - XZ
     *
     */
    mirror?: minecraftserver.StructureMirrorAxis;
    normalizedOrigin?: minecraftserver.Vector3;
    /**
     * @remarks
     * A position offset which should be applied to the paste
     * location while the clipboard item is being written
     *
     */
    offset?: minecraftserver.Vector3;
    /**
     * @remarks
     * An enum representing the rotation around the Y-Axis which
     * should be applied while the clipboard item is being written
     *
     */
    rotation?: minecraftserver.StructureRotation;
}