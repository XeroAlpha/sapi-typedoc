/* IMPORT */ import { ListViewControlActionState } from '..';

/**
 * Action item to be displayed on a list view control
 */
export type ListViewControlAction = {
    id: string;
} & ListViewControlActionState;
