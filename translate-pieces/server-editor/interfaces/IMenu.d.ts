export interface IMenu {
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