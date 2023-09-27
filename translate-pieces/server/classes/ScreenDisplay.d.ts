/**
 * @beta
 * Contains information about user interface elements that are
 * showing up on the screen.
 */
export class ScreenDisplay {
    private constructor();
    /**
     * @remarks
     * Returns true if the current reference to this screen display
     * manager object is valid and functional.
     *
     */
    isValid(): boolean;
    /**
     * @remarks
     * Set the action bar text - a piece of text that displays
     * beneath the title and above the hot-bar.
     *
     * This function can't be called in read-only mode.
     *
     * @param text
     * New value for the action bar text.
     * @throws This function can throw errors.
     */
    setActionBar(text: (RawMessage | string)[] | RawMessage | string): void;
    /**
     * @remarks
     * Will cause a title to show up on the player's on screen
     * display. Will clear the title if set to empty string. You
     * can optionally specify an additional subtitle as well as
     * fade in, stay and fade out times.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     * @example countdown.ts
     * ```typescript
     *   let players = mc.world.getPlayers();
     *
     *   players[0].onScreenDisplay.setTitle("Get ready!", {
     *     stayDuration: 220,
     *     fadeInDuration: 2,
     *     fadeOutDuration: 4,
     *     subtitle: "10",
     *   });
     *
     *   let countdown = 10;
     *
     *   let intervalId = mc.system.runInterval(() => {
     *     countdown--;
     *     players[0].onScreenDisplay.updateSubtitle(countdown.toString());
     *
     *     if (countdown == 0) {
     *       mc.system.clearRun(intervalId);
     *     }
     *   }, 20);
     * ```
     * @example setTitle.ts
     * ```typescript
     *   let players = mc.world.getPlayers();
     *
     *   players[0].onScreenDisplay.setTitle("§o§6Fancy Title§r");
     * ```
     * @example setTitleAndSubtitle.ts
     * ```typescript
     *   let players = mc.world.getPlayers();
     *
     *   players[0].onScreenDisplay.setTitle("Chapter 1", {
     *     stayDuration: 100,
     *     fadeInDuration: 2,
     *     fadeOutDuration: 4,
     *     subtitle: "Trouble in Block Town",
     *   });
     * ```
     */
    setTitle(title: (RawMessage | string)[] | RawMessage | string, options?: TitleDisplayOptions): void;
    /**
     * @remarks
     * Updates the subtitle if the subtitle was previously
     * displayed via the setTitle method.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    updateSubtitle(subtitle: (RawMessage | string)[] | RawMessage | string): void;
}