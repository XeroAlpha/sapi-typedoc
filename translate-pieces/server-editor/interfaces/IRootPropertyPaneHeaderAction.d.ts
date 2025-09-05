/* IMPORT */ import { LocalizedString } from '..';

/**
 * Represents the data to display an action button on a root
 * property pane header.
 */
export interface IRootPropertyPaneHeaderAction {
    action?: () => void;
    icon: string;
    tooltip?: LocalizedString;
}
