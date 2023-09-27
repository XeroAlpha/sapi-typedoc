/**
 * @beta
 * Contains additional options for registering a script event
 * event callback.
 */
export interface ScriptEventMessageFilterOptions {
    /**
     * @remarks
     * Optional list of namespaces to filter inbound script event
     * messages.
     *
     */
    namespaces: string[];
}