/* IMPORT */ import { DebugShape, minecraftserver } from '../index';

/**
 * A debug shape class that a text label. The text label
 * automatically faces the screen.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class DebugText extends DebugShape {
    /**
     * @remarks
     * The text of the shape to display.
     *
     */
    text: string;
    constructor(location: minecraftserver.Vector3, text: string);
}