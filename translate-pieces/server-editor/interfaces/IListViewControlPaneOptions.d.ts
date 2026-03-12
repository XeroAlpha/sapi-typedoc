/* IMPORT */ import { ListViewControlAction } from '..';

export interface IListViewControlPaneOptions {
    /**
     * @remarks
     * Default actions
     *
     */
    actions?: ListViewControlAction[];
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
