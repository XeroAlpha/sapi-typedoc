/* IMPORT */ import { HudElement, HudVisibility, RawMessage, TitleDisplayOptions } from '../index';

/**
 * Contains information about user interface elements that are
 * showing up on the screen.
 * @seeExample setTitle.ts
 * @seeExample setTitleAndSubtitle.ts
 * @seeExample countdown.ts
 */
export class ScreenDisplay {
    private constructor();
    /**
     * @beta
     * @remarks
     * Returns true if the current reference to this screen display
     * manager object is valid and functional.
     *
     */
    readonly isValid: boolean;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    getHiddenHudElements(): HudElement[];
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    hideAllExcept(hudElements?: HudElement[]): void;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    isForcedHidden(hudElement: HudElement): boolean;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    resetHudElements(): void;
    /**
     * @remarks
     * Set the action bar text - a piece of text that displays
     * beneath the title and above the hot-bar.
     *
     * @worldMutation
     *
     * @param text
     * New value for the action bar text.
     * @throws This function can throw errors.
     */
    setActionBar(text: (RawMessage | string)[] | RawMessage | string): void;
    /**
     * @remarks
     * Sets visibility of a particular element of the heads up
     * display (HUD).
     *
     * @worldMutation
     *
     * @param visible
     * Whether to set the HUD element to invisible, or to reset it
     * back to its default.
     * @param hudElements
     * Optional list of HUD elements to configure visibility for.
     * @throws This function can throw errors.
     */
    setHudVisibility(visible: HudVisibility, hudElements?: HudElement[]): void;
    /**
     * @remarks
     * Will cause a title to show up on the player's on screen
     * display. Will clear the title if set to empty string. You
     * can optionally specify an additional subtitle as well as
     * fade in, stay and fade out times.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     * @seeExample setTitle.ts
     * @seeExample setTitleAndSubtitle.ts
     * @seeExample countdown.ts
     */
    setTitle(title: (RawMessage | string)[] | RawMessage | string, options?: TitleDisplayOptions): void;
    /**
     * @remarks
     * Updates the subtitle if the subtitle was previously
     * displayed via the setTitle method.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     * @seeExample countdown.ts
     */
    updateSubtitle(subtitle: (RawMessage | string)[] | RawMessage | string): void;
}