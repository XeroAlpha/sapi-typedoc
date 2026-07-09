/* IMPORT */ import { EngineError } from '../../common';
/* IMPORT */ import { Dimension, PrimitiveShape, PrimitiveShapeError, PrimitiveShapeQueryOptions, TextPrimitive } from '..';

/**
 * Primitive Shapes class used to allow adding and removing
 * text primitives to the world.
 */
export class PrimitiveShapesManager {
    private constructor();
    /**
     * @remarks
     * This is the maximum number of allowed primitive shapes.
     *
     */
    readonly maxShapes: number;
    /**
     * @remarks
     * Adds a new text primitive to the world.
     *
     * @param text
     * The text primitive to be added.
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     *
     * {@link PrimitiveShapeError}
     */
    addText(text: TextPrimitive, dimension?: Dimension): void;
    /**
     * @beta
     * @remarks
     * Fetches and queries all primitive shapes stored in the
     * manager and returns the results as an array of shape
     * handles.
     *
     * @param options
     * Optional options for querying existing shapes to narrow down
     * the results.
     */
    getShapes(options?: PrimitiveShapeQueryOptions): PrimitiveShape[];
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
