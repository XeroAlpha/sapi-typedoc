/**
 * @beta
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
}