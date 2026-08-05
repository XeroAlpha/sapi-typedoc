/* IMPORT */ import { InvalidArgumentError } from '../../common';
/* IMPORT */ import { InvalidEntityError, Player } from '../../server';
/* IMPORT */ import { AllowListEntry, AllowListEntryNameInfo, AllowListFileReloadError, AllowListModificationError } from '..';

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
     * The list of entries in the allow list.
     *
     */
    readonly entries: AllowListEntry[];
    /**
     * @remarks
     * Adds a player to the server's allow list.
     *
     * @worldMutation
     *
     * @param playerDetails
     * Player or player name that should be added to the allow
     * list.
     * @param ignorePlayerLimit
     * If true, the player will be allowed onto the server even if
     * the server is at its player limit.
     * Defaults to: false
     * @throws This function can throw errors.
     *
     * {@link AllowListModificationError}
     *
     * {@link InvalidArgumentError}
     *
     * {@link InvalidEntityError}
     */
    add(playerDetails: AllowListEntryNameInfo | Player, ignorePlayerLimit?: boolean): void;
    /**
     * @remarks
     * Clears the allow list, removing all entries.
     *
     * @worldMutation
     *
     */
    clear(): void;
    /**
     * @remarks
     * Returns if the player is in the server's allow list.
     *
     * @param playerDetails
     * Player or player name that should be checked for.
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     *
     * {@link InvalidEntityError}
     */
    contains(playerDetails: AllowListEntryNameInfo | Player): boolean;
    /**
     * @remarks
     * Reloads the server's allow list from disk.
     *
     * @worldMutation
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
     * @worldMutation
     *
     * @param playerDetails
     * Player or player name that should be removed from the allow
     * list.
     * @throws This function can throw errors.
     *
     * {@link AllowListModificationError}
     *
     * {@link InvalidArgumentError}
     *
     * {@link InvalidEntityError}
     */
    remove(playerDetails: AllowListEntryNameInfo | Player): void;
}
