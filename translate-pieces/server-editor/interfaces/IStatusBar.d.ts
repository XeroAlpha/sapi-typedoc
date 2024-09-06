/* IMPORT */ import { IStatusBarItem, IStatusBarItemCreationParams } from '../index';

/**
 * Manager and container for IStatusBarItem objects
 */
export interface IStatusBar {
    /**
     * @remarks
     * Create a item in status bar
     *
     * @param props
     * Properties to create status bar item
     */
    createItem(props: IStatusBarItemCreationParams): IStatusBarItem;
    /**
     * @remarks
     * Remove an existing status bar item
     *
     * @param id
     * Status bar item identifier
     */
    removeItem(id: string): void;
}