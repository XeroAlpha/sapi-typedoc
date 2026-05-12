/* IMPORT */ import { ObservableBoolean } from '..';

/**
 * @beta
 * Options for configuring a text component (label or header).
 */
export interface TextOptions {
    /**
     * @remarks
     * When false or bound to a false ObservableBoolean, the text
     * component is hidden.
     *
     */
    visible?: boolean | ObservableBoolean;
}
