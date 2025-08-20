/* IMPORT */ import { HeldItemOption } from '../index';

/**
 * @beta
 * An interface that is passed into {@link
 * @minecraft/Server.PlayerSwingStartAfterEvent.subscribe} that
 * filters out which events are passed to the provided
 * callback.
 */
export interface PlayerSwingEventOptions {
    /**
     * @remarks
     * The held item option that the callback should be called for.
     * If undefined, the callback will be called whether or not the
     * player is holding an item in their hand.
     *
     */
    heldItemOption?: HeldItemOption;
}