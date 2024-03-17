/* IMPORT */ import { DimensionType } from '../index';

/**
 * Used for accessing all available dimension types.
 */
export class DimensionTypes {
    private constructor();
    /**
     * @remarks
     * Retrieves a dimension type using a string-based identifier.
     *
     */
    static get(dimensionTypeId: string): DimensionType | undefined;
    /**
     * @remarks
     * Retrieves an array of all dimension types.
     *
     */
    static getAll(): DimensionType[];
}