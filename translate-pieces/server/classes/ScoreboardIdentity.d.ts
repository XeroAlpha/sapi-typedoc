/**
 * Contains an identity of the scoreboard item.
 */
export class ScoreboardIdentity {
    private constructor();
    /**
     * @remarks
     * Returns the player-visible name of this identity.
     *
     */
    readonly displayName: string;
    /**
     * @remarks
     * Identifier of the scoreboard identity.
     *
     */
    readonly id: number;
    /**
     * @remarks
     * Type of the scoreboard identity.
     *
     */
    readonly 'type': ScoreboardIdentityType;
    /**
     * @remarks
     * If the scoreboard identity is an entity or player, returns
     * the entity that this scoreboard item corresponds to.
     *
     * @throws This function can throw errors.
     */
    getEntity(): Entity | undefined;
    /**
     * @remarks
     * Returns true if the ScoreboardIdentity reference is still
     * valid.
     *
     */
    isValid(): boolean;
}