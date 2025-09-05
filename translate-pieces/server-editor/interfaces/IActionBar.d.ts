/* IMPORT */ import { IActionBarItem, IActionBarItemCreationParams, NoArgsAction, RegisteredAction } from '..';

/**
 * Manager for IActionBarItem objects.
 */
export interface IActionBar {
    /**
     * @remarks
     * Add a new action bar item to the collection.
     *
     * @param id
     * Unique item identifier.
     * @param action
     * Action to be invoked.
     * @param props
     * Configuration for the item to create.
     */
    registerItem(
        id: string,
        action: RegisteredAction<NoArgsAction>,
        props: IActionBarItemCreationParams,
    ): IActionBarItem;
    /**
     * @remarks
     * Remove an action item from the collection.
     *
     * @param id
     * Unique item identifier.
     */
    unregisterItem(id: string): void;
}
