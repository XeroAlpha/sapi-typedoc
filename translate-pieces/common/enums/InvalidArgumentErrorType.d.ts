/**
 * An enum describing the type of InvalidArgumentError
 */
export enum InvalidArgumentErrorType {
    /**
     * @remarks
     * The argument has a duplicate in this domain.
     *
     */
    Duplicate = 'Duplicate',
    /**
     * @remarks
     * The argument is empty.
     *
     */
    Empty = 'Empty',
    /**
     * @remarks
     * The argument is not the correct type.
     *
     */
    InvalidType = 'InvalidType',
    /**
     * @remarks
     * The argument is unknown in this domain.
     *
     */
    Unknown = 'Unknown',
    /**
     * @remarks
     * No specified error type.
     *
     */
    Unspecified = 'Unspecified',
    /**
     * @remarks
     * The argument is unsupported for this type.
     *
     */
    UnsupportedValue = 'UnsupportedValue',
}
