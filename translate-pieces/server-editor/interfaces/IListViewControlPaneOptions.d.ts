/* IMPORT */ import { ListViewControlAction, LocalizedString } from '..';

export interface IListViewControlPaneOptions {
    /**
     * @remarks
     * Default actions
     *
     */
    actions?: ListViewControlAction[];
    /**
     * @remarks
     * Localization key for the tooltip displayed when hovering the
     * filter icon. Leave undefined or empty to suppress the
     * tooltip.
     *
     */
    filterTooltip?: LocalizedString;
    /**
     * @remarks
     * This function will be called whenever user clicks an action
     *
     */
    onActionClicked?: (id: string) => void;
    /**
     * @remarks
     * Initial visibility state. It undefined, it will be false.
     *
     */
    visible?: boolean;
}
