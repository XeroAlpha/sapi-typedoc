/* IMPORT */ import { LocalizedString } from '../index';

export interface IStatusBarItem {
    /**
     * @remarks
     * Unique ID for the item.
     *
     */
    readonly id: string;
    getText(): LocalizedString;
    hide(): void;
    setText(text: LocalizedString): void;
    show(): void;
}