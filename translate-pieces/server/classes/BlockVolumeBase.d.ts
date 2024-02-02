/* IMPORT */ import { BlockLocationIterator, BoundingBox, Vector3 } from '../index';

/**
 * @beta
 */
export class BlockVolumeBase {
    private constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    getBlockLocationIterator(): BlockLocationIterator;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    getBoundingBox(): BoundingBox;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    getCapacity(): number;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    getMax(): Vector3;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    getMin(): Vector3;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    getSpan(): Vector3;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    isInside(pos: Vector3): boolean;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    translate(delta: Vector3): void;
}