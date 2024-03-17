/**
 * Represents a configurable state value of a block instance.
 * For example, the facing direction of stairs is accessible as
 * a block state.
 */
export class BlockStateType {
    private constructor();
    /**
     * @remarks
     * Identifier of the block property.
     *
     */
    readonly id: string;
    /**
     * @remarks
     * A set of valid values for the block property.
     *
     */
    readonly validValues: (boolean | number | string)[];
}