/* IMPORT */ import { IMenuCreationParams, NoArgsAction, RegisteredAction } from '..';

export interface IMenu {
    /**
     * @remarks
     * If defined, the menu will show a checked or unchecked
     * checkbox.
     *
     */
    checked?: boolean;
    /**
     * @remarks
     * The menu will be in either an enabled or disabled state
     *
     */
    enabled: boolean;
    /**
     * @remarks
     * Unique ID for the menu
     *
     */
    readonly id: string;
    /**
     * @remarks
     * Sub menus of this menu
     *
     */
    readonly submenu: IMenu[];
    /**
     * @remarks
     * Create a child menu on this menu.
     *
     * @param params
     * The menu creation parameters for the sub item being added
     * @param action
     * The action to associate with the menu item. Only a subset of
     * actions are supported
     */
    addItem(params: IMenuCreationParams, action?: RegisteredAction<NoArgsAction>): IMenu;
    /**
     * @remarks
     * Destroy the menu and all of its children.
     *
     */
    dispose(): void;
    /**
     * @remarks
     * Hide the menu and all of its children.
     *
     */
    hide(): void;
    /**
     * @remarks
     * Replaces the current associated menu action with a new
     * action
     *
     * @param action
     * The registered action to associated with this menu item
     */
    replaceAction(action: RegisteredAction<NoArgsAction>): void;
    /**
     * @remarks
     * Show the menu and all of its children.
     *
     */
    show(): void;
}
