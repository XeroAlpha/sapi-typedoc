/* IMPORT */ import { EngineError } from '../../common';
/* IMPORT */ import { Container, InvalidEntityError, Player, VirtualContainerOpenError } from '..';

/**
 * A container that only exists in memory. It is not tied to a
 * block, an entity or the world, is never saved, and is
 * destroyed once the script no longer references it and no
 * player is viewing it. It supports the full Container API and
 * can be shown to any number of players at once with open.
 * When the world shuts down or scripts reload, open screens
 * close without raising close events; save the contents from
 * system.beforeEvents.shutdown if they need to outlive the
 * session.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class VirtualContainer extends Container {
    private constructor();
    /**
     * @remarks
     * The heading shown on the container screen. It is localized
     * when it names a localization key.
     *
     */
    readonly title: string;
    /**
     * @remarks
     * Requests closure of the container screen of a player, or of
     * every player viewing this container when no player is given.
     * From then on, those players can no longer change the
     * container through their screens. Each screen raises a
     * VirtualContainerCloseAfterEvent with the ServerClosed reason
     * after the client has closed its UI and pending inventory
     * requests have finished. Closure may complete on a later
     * tick.
     *
     * @worldMutation
     *
     * @param player
     * The player whose screen to close. When omitted, every
     * viewer's screen is closed.
     * @returns
     * The number of screens asked to close. A screen that is
     * already closing is not counted again.
     * @throws
     * Throws if the given player is no longer valid.
     *
     * {@link InvalidEntityError}
     */
    close(player?: Player): number;
    /**
     * @remarks
     * Gets the players currently viewing this container.
     *
     * @returns
     * The players that have a screen open onto this container.
     */
    getViewers(): Player[];
    /**
     * @remarks
     * Shows a chest style screen onto this container to a player.
     * Only that player sees the screen; any number of players can
     * view the same container at once, each with a screen of their
     * own. Changing dimension closes the screen with the
     * ServerClosed reason, dying closes it with the PlayerDied
     * reason, and switching to spectator mode closes it with the
     * PlayerSpectating reason.
     *
     * @worldMutation
     *
     * @param player
     * The player to show the container to.
     * @throws
     * Throws VirtualContainerOpenError when the screen request
     * cannot be sent, with a reason that names why, such as the
     * player still loading or already having a container screen
     * open; try again later. Not throwing means the request was
     * sent, not that the screen has already appeared: the player's
     * device can still decline to show it, which closes it with
     * the UserBusy reason. Throws InvalidEntityError if the player
     * is no longer valid or is leaving the game.
     *
     * {@link EngineError}
     *
     * {@link InvalidEntityError}
     *
     * {@link VirtualContainerOpenError}
     */
    open(player: Player): void;
}
