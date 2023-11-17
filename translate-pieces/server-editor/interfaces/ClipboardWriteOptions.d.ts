/* IMPORT */ import { ClipboardMirrorAxis, ClipboardRotation, minecraftserver } from '../index';

/**
 * Interface used to specify the options when a clipboard item
 * is being written to the world
 */
export interface ClipboardWriteOptions {
    /**
     * @remarks
     * The anchor is a unit vector representation of the side or
     * corner of the Clipboard Item to be written to the world.
     * `{0, 0, 0}` represents the center of the Clipboard item,
     * `{0, 1, 0}` represents the top, `{-1, -1, -1}` represents
     * the bottom/back/left corner, etc
     * The anchor is used in conjunction with the item size to
     * determine the object relative anchor point where the object
     * will be applied in the world.
     * Values for the X/Y/Z components should be within the range
     * `(-1 <= X/Y/Z <=1)`
     *
     */
    anchor?: minecraftserver.Vector3;
    /**
     * @remarks
     * An enum which represents the axis (or combination of axis')
     * along which the item should be mirrored
     * - X
     * - Z
     * - XZ
     *
     */
    mirror?: ClipboardMirrorAxis;
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
    rotation?: ClipboardRotation;
}