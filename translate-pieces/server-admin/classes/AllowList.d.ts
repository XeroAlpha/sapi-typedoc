/* IMPORT */ import { InvalidEntityError, Player } from '../../server';
/* IMPORT */ import { AllowListFileReloadError, AllowListModificationError } from '..';

/**
 * Controls the allow list for the server. Only available on
 * dedicated server.
 */
export class AllowList {
    private constructor();
    /**
     * @remarks
     * @worldMutation
     *
     */
    enabled: boolean;
    /**
     * @remarks
     * Adds a player to the server's allow list.
     *
     * @param player
     * Player or player name that should be added to the allow
     * list.
     * @throws This function can throw errors.
     *
     * {@link AllowListModificationError}
     *
     * {@link InvalidEntityError}
     */
    add(player: Player | string): void;
    /**
     * @remarks
     * Returns if the player is in the server's allow list.
     *
     * @param player
     * Player or player name that should be checked for.
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    contains(player: Player | string): boolean;
    /**
     * @remarks
     * Reloads the server's allow list from disk.
     *
     * @throws This function can throw errors.
     *
     * {@link AllowListFileReloadError}
     */
    reloadFile(): void;
    /**
     * @remarks
     * Removes a player from the server's allow list.
     *
     * @param player
     * Player or player name that should be removed from the allow
     * list.
     * @throws This function can throw errors.
     *
     * {@link AllowListModificationError}
     *
     * {@link InvalidEntityError}
     */
    remove(player: Player | string): void;
}
