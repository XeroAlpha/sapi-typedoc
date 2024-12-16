/**
 * @beta
 * An enumeration describing the reason for the namespace name
 * error being thrown
 */
export enum NamespaceNameErrorReason {
    /**
     * @remarks
     * A restricted namespace was used as the namespace
     *
     */
    DisallowedNamespace = 'DisallowedNamespace',
    /**
     * @remarks
     * The name was missing a namespace when one is required
     *
     */
    NoNamespace = 'NoNamespace',
}