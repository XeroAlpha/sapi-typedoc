/* IMPORT */ import { ISubPaneHeaderItem, NoArgsAction, RegisteredAction } from '..';

/**
 * A curated, icon-only button in a sub pane header.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface ISubPaneHeaderButtonItem extends ISubPaneHeaderItem {
    /**
     * @remarks
     * Replaces the action assigned to the button.
     *
     * @param action
     * New action.
     */
    replaceAction(action: RegisteredAction<NoArgsAction>): void;
    /**
     * @remarks
     * Updates the icon of the button.
     *
     * @param icon
     * New icon.
     */
    setIcon(icon: string): void;
}
