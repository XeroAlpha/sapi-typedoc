/* IMPORT */ import { EngineError } from '../../common';
/* IMPORT */ import { Vector3 } from '..';

/**
 * A BlockLocationIterator returns the next block location of
 * the block volume across which it is iterating.
 * The BlockLocationIterator is used to abstract the shape of
 * the block volume it was fetched from (so it can represent
 * all the block locations that make up rectangles, cubes,
 * spheres, lines and complex shapes).
 * Each iteration pass returns the next valid block location in
 * the parent shape.
 * Unless otherwise specified by the parent shape - the
 * BlockLocationIterator will iterate over a 3D space in the
 * order of increasing X, followed by increasing Z followed by
 * increasing Y.
 * (Effectively stepping across the XZ plane, and when all the
 * locations in that plane are exhausted, increasing the Y
 * coordinate to the next XZ slice)
 */
export class BlockLocationIterator implements Iterable<Vector3> {
    private constructor();
    /**
     * @remarks
     * @worldMutation
     *
     */
    [Symbol.iterator](): Iterator<Vector3>;
    /**
     * @beta
     * @remarks
     * Checks if the underlining block volume has been invalidated.
     * Will return false if the block volume was modified between
     * creating the iterator and iterating it, and true otherwise.
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    isValid(): boolean;
    /**
     * @remarks
     * @worldMutation
     *
     */
    next(): IteratorResult<Vector3>;
}
