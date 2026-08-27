/**
 * @beta
 * Describes a block point-of-interest type.
 *
 * Required Experiments:
 * - Poi
 *
 */
export class PoiBlockType {
    private constructor();
    /**
     * @remarks
     * Numeric identifier of this POI type.
     *
     */
    readonly id: number;
    /**
     * @remarks
     * Namespaced identifier of this POI type.
     *
     */
    readonly name: string;
    /**
     * @remarks
     * Maximum number of tickets that can be claimed from each POI
     * instance of this type.
     *
     */
    readonly tickets: number;
    /**
     * @remarks
     * Maximum range, in blocks, at which this POI type is
     * considered usable.
     *
     */
    readonly usableRange: number;
    /**
     * @remarks
     * Tests whether this object and another object describe the
     * same POI type.
     *
     * @worldMutation
     *
     * @param other
     * POI type to compare with this type.
     * @returns
     * True if both objects describe the same POI type; otherwise
     * false.
     */
    equals(other: PoiBlockType): boolean;
    /**
     * @remarks
     * Tests whether the type has the provided tag attribute
     *
     * @worldMutation
     *
     * @param tag
     * POI tag to check.
     * @returns
     * True if the POI conatains the tag; otherwise false.
     */
    has(tag: string): boolean;
}
