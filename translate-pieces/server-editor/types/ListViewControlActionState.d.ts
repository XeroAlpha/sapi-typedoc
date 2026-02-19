/* IMPORT */ import { LocalizedString } from '..';

/**
 * Action item state for list view control
 */
export type ListViewControlActionState = {
    label: LocalizedString;
    icon: string;
    disabled?: boolean;
    displayInMenu?: boolean;
};
