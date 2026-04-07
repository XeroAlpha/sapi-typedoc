/**
 * @beta
 * Contains information about a player's party membership. This
 * object is a snapshot of the player's party state at the time
 * it was retrieved and is not kept up to date.
 */
export interface PartyInfo {
    /**
     * @remarks
     * Whether this player is the leader of their party.
     *
     */
    isLeader: boolean;
    /**
     * @remarks
     * The unique identifier of the party this player belongs to.
     *
     */
    partyId: string;
}
