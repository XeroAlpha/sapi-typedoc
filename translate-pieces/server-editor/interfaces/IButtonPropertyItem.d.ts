/* IMPORT */ import { BasicTooltipContent, IPropertyItemBase, LocalizedString, NoArgsAction, RegisteredAction } from '..';

/**
 * A property item which supports Button properties
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IButtonPropertyItem extends IPropertyItemBase {
    /**
     * @remarks
     * Replace action assigned to the button.
     *
     * @param action
     * New action to replace the existing with.
     */
    replaceAction(action: RegisteredAction<NoArgsAction>): void;
    /**
     * @remarks
     * Updates icon of the button.
     *
     * @param icon
     * New button icon.
     */
    setIcon(icon: string | undefined): void;
    /**
     * @remarks
     * Updates title of the button.
     *
     * @param title
     * New button title.
     */
    setTitle(title: LocalizedString | undefined): void;
    /**
     * @remarks
     * Updates tooltip description of the button.
     *
     * @param tooltip
     * New button tooltip.
     */
    setTooltip(tooltip: BasicTooltipContent | undefined): void;
}
