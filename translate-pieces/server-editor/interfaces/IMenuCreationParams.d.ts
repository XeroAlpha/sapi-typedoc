/**
 * Properties required to create a Menu
 */
export interface IMenuCreationParams {
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
}