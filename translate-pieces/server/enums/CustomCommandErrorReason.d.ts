/**
 * @rc
 * Reason why custom command registration failed.
 */
export enum CustomCommandErrorReason {
    /**
     * @remarks
     * Command name already registered.
     *
     */
    AlreadyRegistered = 'AlreadyRegistered',
    /**
     * @remarks
     * Custom Command references an enum that has not been
     * registered.
     *
     */
    EnumDependencyMissing = 'EnumDependencyMissing',
    /**
     * @remarks
     * Supplied Custom Command namespace does not match previous
     * registrations for this add-on.
     *
     */
    NamespaceMismatch = 'NamespaceMismatch',
    /**
     * @remarks
     * Too many command parameters defined in CustomCommand.
     *
     */
    ParameterLimit = 'ParameterLimit',
    /**
     * @remarks
     * Custom command registry can not be accessed after world
     * initialized event.
     *
     */
    RegistryInvalid = 'RegistryInvalid',
    /**
     * @remarks
     * Command parameters cannot be redefined during reload. Only
     * the script closure itself can be changed.
     *
     */
    RegistryReadOnly = 'RegistryReadOnly',
    /**
     * @beta
     * @remarks
     * Non enum type command parameters cannot use enumName.
     *
     */
    UnexpectedEnumName = 'UnexpectedEnumName',
}