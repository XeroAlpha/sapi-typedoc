/* IMPORT */ import { IMenuCreationParams, NoArgsAction, RegisteredAction } from '../index';

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
    addItem(params: IMenuCreationParams, action?: RegisteredAction<NoArgsAction>): IMenu;
    addSeparator(): IMenu;
    dispose(): void;
    hide(): void;
    replaceAction(action: RegisteredAction<NoArgsAction>): void;
    show(): void;
}