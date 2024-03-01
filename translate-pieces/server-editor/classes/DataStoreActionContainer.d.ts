export class DataStoreActionContainer {
    private constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    bindActionToControl(controlId: string, actionPayload: string): void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    removeActionFromControl(controlId: string, actionPayload?: string): void;
}