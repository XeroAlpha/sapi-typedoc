/**
 * @beta
 * Contains objectives and participants for the scoreboard.
 */
export enum ScoreboardIdentityType {
    /**
     * @beta
     * @remarks
     * This scoreboard participant is tied to an entity.
     *
     */
    Entity = 'Entity',
    /**
     * @beta
     * @remarks
     * This scoreboard participant is tied to a pseudo player
     * entity - typically this is used to store scores as data or
     * as abstract progress.
     *
     */
    FakePlayer = 'FakePlayer',
    /**
     * @beta
     * @remarks
     * This scoreboard participant is tied to a player.
     *
     */
    Player = 'Player',
}