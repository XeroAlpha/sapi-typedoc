/* IMPORT */ import { LocalizedString, StatusBarAlignment } from '../index';

/**
 * Properties required to create a status bar item
 */
export interface IStatusBarItemCreationParams {
    /**
     * @remarks
     * Alignment of item within status bar. If undefined, it will
     * be left aligned.
     *
     */
    alignment?: StatusBarAlignment;
    /**
     * @remarks
     * Optional icon image resource of the item.
     *
     */
    icon?: string;
    /**
     * @remarks
     * Size of the status bar item. If undefined, it will wrap text
     * content.
     *
     */
    size?: number;
    /**
     * @remarks
     * Default localized display text of the item. If undefined, it
     * will be empty string.
     *
     */
    text?: LocalizedString;
    /**
     * @remarks
     * Default visibility of the item. If undefined, it will be
     * true.
     *
     */
    visible?: boolean;
}