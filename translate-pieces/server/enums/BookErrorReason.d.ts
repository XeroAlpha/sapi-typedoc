/**
 * @beta
 * An enum of error reasons relating to using {@link
 * ItemBookComponent}.
 */
export enum BookErrorReason {
    /**
     * @remarks
     * The requested page content exceeds the max page length of
     * 256.
     *
     */
    ExceedsMaxPageLength = 'ExceedsMaxPageLength',
    /**
     * @remarks
     * The page could not be created as it would exceed the max
     * page count of 50.
     *
     */
    ExceedsMaxPages = 'ExceedsMaxPages',
    /**
     * @remarks
     * The title being signed exceeds the maximum title length of
     * 16.
     *
     */
    ExceedsTitleLength = 'ExceedsTitleLength',
}