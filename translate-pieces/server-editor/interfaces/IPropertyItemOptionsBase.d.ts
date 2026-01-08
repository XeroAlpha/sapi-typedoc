/* IMPORT */ import { PaneItemStyle } from '..';

/**
 * Common optional properties for property items
 */
export interface IPropertyItemOptionsBase {
    /**
     * @remarks
     * Initial enabled state of property item. If undefined, it
     * will default to true.
     *
     */
    enable?: boolean;
    /**
     * @remarks
     * Optional styling overrides for the item.
     *
     */
    style?: PaneItemStyle;
    /**
     * @remarks
     * Initial visibility state of property item. If undefined, it
     * will default to true.
     *
     */
    visible?: boolean;
}
