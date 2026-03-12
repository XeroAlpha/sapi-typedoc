/* IMPORT */ import { Dimension, TextPrimitive } from '..';

/**
 * @beta
 * Primitive Shapes class used to allow adding and removing
 * text primitives to the world.
 */
export class PrimitiveShapesManager {
    private constructor();
    /**
     * @remarks
     * Adds a new text primitive to the world.
     *
     * @param text
     * The text primitive to be added.
     */
    addText(text: TextPrimitive, dimension?: Dimension): void;
    /**
     * @remarks
     * Removes all text primitives from the world.
     *
     */
    removeAll(): void;
    /**
     * @remarks
     * Removes an instance of a text primitive from the world. This
     * is equivalent to calling remove on the text itself.
     *
     */
    removeText(text: TextPrimitive): void;
}
