/* IMPORT */ import { HudElement, HudVisibility, RawMessage, TitleDisplayOptions } from '../index';

/**
 * Contains information about user interface elements that are
 * showing up on the screen.
 * @example setTitle.ts
 * ```typescript
 * import { world } from '@minecraft/server';
 *
 * world.afterEvents.playerSpawn.subscribe((event) => {
 *     event.player.onScreenDisplay.setTitle('§o§6You respawned!§r');
 * });
 * ```
 * @example setTitleAndSubtitle.ts
 * ```typescript
 * import { world } from '@minecraft/server';
 *
 * world.afterEvents.playerSpawn.subscribe((event) => {
 *     event.player.onScreenDisplay.setTitle('You respawned', {
 *         stayDuration: 100,
 *         fadeInDuration: 2,
 *         fadeOutDuration: 4,
 *         subtitle: 'Try not to die next time!',
 *     });
 * });
 * ```
 * @example titleCountdown.ts
 * ```typescript
 * import { world, system } from '@minecraft/server';
 *
 * world.afterEvents.playerSpawn.subscribe(event => {
 *     event.player.onScreenDisplay.setTitle('Get ready!', {
 *         stayDuration: 220,
 *         fadeInDuration: 2,
 *         fadeOutDuration: 4,
 *         subtitle: '10',
 *     });
 *
 *     let countdown = 10;
 *
 *     const intervalId = system.runInterval(() => {
 *         countdown--;
 *         event.player.onScreenDisplay.updateSubtitle(countdown.toString());
 *
 *         if (countdown == 0) {
 *             system.clearRun(intervalId);
 *         }
 *     }, 20);
 * });
 * ```
 */
export class ScreenDisplay {
    private constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getHiddenHudElements(): HudElement[];
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    hideAllExcept(hudElements?: HudElement[]): void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    isForcedHidden(hudElement: HudElement): boolean;
    /**
     * @remarks
     * Returns true if the current reference to this screen display
     * manager object is valid and functional.
     *
     */
    isValid(): boolean;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    resetHudElements(): void;
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
     * Sets visibility of a particular element of the heads up
     * display (HUD).
     *
     * This function can't be called in read-only mode.
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
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     * @example setTitle.ts
     * ```typescript
     * import { world } from '@minecraft/server';
     *
     * world.afterEvents.playerSpawn.subscribe((event) => {
     *     event.player.onScreenDisplay.setTitle('§o§6You respawned!§r');
     * });
     * ```
     * @example setTitleAndSubtitle.ts
     * ```typescript
     * import { world } from '@minecraft/server';
     *
     * world.afterEvents.playerSpawn.subscribe((event) => {
     *     event.player.onScreenDisplay.setTitle('You respawned', {
     *         stayDuration: 100,
     *         fadeInDuration: 2,
     *         fadeOutDuration: 4,
     *         subtitle: 'Try not to die next time!',
     *     });
     * });
     * ```
     * @example titleCountdown.ts
     * ```typescript
     * import { world, system } from '@minecraft/server';
     *
     * world.afterEvents.playerSpawn.subscribe(event => {
     *     event.player.onScreenDisplay.setTitle('Get ready!', {
     *         stayDuration: 220,
     *         fadeInDuration: 2,
     *         fadeOutDuration: 4,
     *         subtitle: '10',
     *     });
     *
     *     let countdown = 10;
     *
     *     const intervalId = system.runInterval(() => {
     *         countdown--;
     *         event.player.onScreenDisplay.updateSubtitle(countdown.toString());
     *
     *         if (countdown == 0) {
     *             system.clearRun(intervalId);
     *         }
     *     }, 20);
     * });
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