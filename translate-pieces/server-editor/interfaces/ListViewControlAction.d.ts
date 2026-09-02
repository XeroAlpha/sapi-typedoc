/* IMPORT */ import { ListViewControlActionState } from '..';

/**
 * Action item to be displayed on a list view control
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface ListViewControlAction extends ListViewControlActionState {
    id: string;
    submenu?: ListViewControlAction[];
}
