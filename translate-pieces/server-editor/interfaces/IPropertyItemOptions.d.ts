/* IMPORT */ import { OnChangeCallback, PropertyBag } from '../index';

export interface IPropertyItemOptions {
    /**
     * @remarks
     * If the item is enabled in the UI.
     *
     */
    enable?: boolean;
    /**
     * @remarks
     * Callback to execute when the value is updated.
     *
     */
    onChange?: OnChangeCallback<PropertyBag, string>;
    /**
     * @remarks
     * Fallback display text if no loc ID
     *
     */
    titleAltText?: string;
    /**
     * @remarks
     * Loc ID (resolved on client)
     *
     */
    titleStringId?: string;
    /**
     * @remarks
     * If the item should be visible in the UI.
     *
     */
    visible?: boolean;
}