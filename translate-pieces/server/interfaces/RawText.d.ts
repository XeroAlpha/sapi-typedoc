/**
 * @beta
 * A `RawMessage` with only the `rawtext` property. When a
 * `RawMessage` is serialized the contents are put into a
 * rawtext property, so this is useful when reading saved
 * RawMessages. See `BlockSignComponent.setText` and
 * `BlockSignComponent.getRawText` for examples.
 */
export interface RawText {
    /**
     * @remarks
     * A serialization of the current value of an associated sign.
     *
     */
    rawtext?: RawMessage[];
}