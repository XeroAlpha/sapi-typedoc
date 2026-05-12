/* IMPORT */ import { LocalizedString } from '..';

/**
 * Properties for introduction pane tab.
 */
export interface IntroductionPaneTabProps {
    /**
     * @remarks
     * Optional header for the tab content
     *
     */
    contentHeader?: LocalizedString;
    /**
     * @remarks
     * Optional image for the tab content
     *
     */
    contentImage?: string;
    /**
     * @remarks
     * Icon for the tab
     *
     */
    icon?: string;
    /**
     * @remarks
     * Unique identifier for the tab
     *
     */
    id: string;
    /**
     * @remarks
     * Localized title of the tab
     *
     */
    label: LocalizedString;
}
