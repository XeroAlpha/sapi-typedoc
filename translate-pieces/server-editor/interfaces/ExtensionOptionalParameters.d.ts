/**
 * An interface which defines the set of optional parameters
 * which can be used when calling the `registerEditorExtension`
 * function
 */
export interface ExtensionOptionalParameters {
    /**
     * @remarks
     * An optional text description of the extension being
     * registered.
     * This can be a straight textual description or a string
     * identifier key for a localized string in the extension's
     * resource pack text files.
     * The description is meant to be a very short snappy one-liner
     * which quickly and uniquely identifies the extension
     * The length of the string is capped to 256 characters
     *
     */
    description?: string;
    /**
     * @remarks
     * Optional notes for the extension being registered.
     * This can be a straight textual description or a string
     * identifier key for a localized string in the extension's
     * resource pack text files.
     * The notes section is meant to convey more detailed
     * information and notes (e.g. a link to the author's website)
     * The length of this string is capped to 1024 characters
     *
     */
    notes?: string;
    /**
     * @remarks
     * An optional custom identifier that will be used for all
     * Modal Tools created from the registered extension.
     * The length of the string is capped to 256 characters
     *
     */
    toolGroupId?: string;
}
