/**
 * Properties required to create a Menu
 */
export interface IMenuCreationParams {
    /**
     * @remarks
     * Whether the menu should show a checkmark
     *
     */
    checked?: boolean;
    /**
     * @remarks
     * Loc ID (resolved on client)
     *
     */
    displayStringId?: string;
    /**
     * @remarks
     * The name of the menu
     *
     */
    name: string;
    /**
     * @remarks
     * Custom unique identifier that will replace random id
     *
     */
    uniqueId?: string;
}