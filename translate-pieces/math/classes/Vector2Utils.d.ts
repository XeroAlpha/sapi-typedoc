/* IMPORT */ import { Vector2 } from '../index';

/**
 * Utilities operating on Vector2 objects. All methods are static and do not modify the input objects.
 *
 * @public
 */
export declare class Vector2Utils {
    /**
     * toString
     *
     * Create a string representation of a vector2
     */
    static toString(v: Vector2, options?: {
        decimals?: number;
        delimiter?: string;
    }): string;
}