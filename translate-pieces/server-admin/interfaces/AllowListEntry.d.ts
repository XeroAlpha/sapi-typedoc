/**
 * Represents an entry in the allow list.
 */
export interface AllowListEntry {
    /**
     * @remarks
     * Allows the player onto the server even when the server is at
     * the player limit.
     *
     */
    ignoresPlayerLimit: boolean;
    /**
     * @remarks
     * The player's name.
     *
     */
    name?: string;
    /**
     * @remarks
     * The player's xuid.
     *
     */
    xuid?: string;
}
