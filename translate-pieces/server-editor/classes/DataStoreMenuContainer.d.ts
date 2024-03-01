export class DataStoreMenuContainer {
    private constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    createItem(id: string, payload: string): void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    destroyItem(id: string): void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    getPayload(id: string): string;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    getProperty(id: string, property: string): boolean | number | string | undefined;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    hasPayload(id: string): boolean;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    hasProperty(id: string, property: string): boolean;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    updateItem(id: string, payload: string): void;
}