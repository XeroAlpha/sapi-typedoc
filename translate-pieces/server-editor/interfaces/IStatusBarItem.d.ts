/* IMPORT */ import { LocalizedString } from '../index';

export interface IStatusBarItem {
    /**
     * @remarks
     * Unique ID for the item.
     *
     */
    readonly id: string;
    /**
     * @remarks
     * Returns display text of the item.
     *
     */
    getText(): LocalizedString;
    /**
     * @remarks
     * Hide the Status Bar Item.
     *
     */
    hide(): void;
    /**
     * @remarks
     * Updates display text of the item.
     *
     * @param text
     * New display text
     */
    setText(text: LocalizedString): void;
    /**
     * @remarks
     * Show the Status Bar Item.
     *
     */
    show(): void;
}