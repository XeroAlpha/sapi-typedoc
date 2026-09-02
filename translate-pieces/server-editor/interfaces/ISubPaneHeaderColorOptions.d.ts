/* IMPORT */ import { LocalizedString } from '..';

/**
 * Header-local options for a color picker in a sub pane
 * header.
 */
export interface ISubPaneHeaderColorOptions {
    /**
     * @remarks
     * Optional narration label.
     *
     */
    narrationLabel?: LocalizedString;
    /**
     * @remarks
     * Optional tooltip.
     *
     */
    tooltip?: LocalizedString;
}
