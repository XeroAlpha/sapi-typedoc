/* IMPORT */ import { BasicTooltipContent, IMenu, IMenuCreationParams, IPropertyItemBase, LocalizedString, NoArgsAction, RegisteredAction } from '..';

/**
 * A property item which supports Menu properties
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IMenuPropertyItem extends IPropertyItemBase {
    /**
     * @remarks
     * Adds a new menu item entry to property item
     *
     * @param props
     * Menu creation parameters
     * @param action
     * Optional action to trigger on menu click
     */
    addEntry(props: IMenuCreationParams, action?: RegisteredAction<NoArgsAction>): IMenu;
    /**
     * @remarks
     * @returns
     * All first level menu entries
     */
    getEntries(): IMenu[];
    /**
     * @remarks
     * Find the menu item recursively if it exists
     *
     * @param menuId
     * Identifier of the menu.
     */
    getMenu(menuId: string): IMenu | undefined;
    /**
     * @remarks
     * Removed the menu item entry if the id is found
     *
     * @param menuId
     * Menu id to remove
     */
    removeEntry(menuId: string): void;
    /**
     * @remarks
     * Updates title of the property item.
     *
     * @param title
     * New title.
     */
    setTitle(title: LocalizedString | undefined): void;
    /**
     * @remarks
     * Updates tooltip description of property item.
     *
     * @param tooltip
     * New tooltip.
     */
    setTooltip(tooltip: BasicTooltipContent | undefined): void;
}
