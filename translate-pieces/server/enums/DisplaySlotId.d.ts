/**
 * @beta
 * Specifies a mechanism for displaying scores on a scoreboard.
 */
export enum DisplaySlotId {
    /**
     * @beta
     * @remarks
     * Displays the score below the player's name.
     *
     */
    BelowName = 'BelowName',
    /**
     * @beta
     * @remarks
     * Displays the score as a list on the pause screen.
     *
     */
    List = 'List',
    /**
     * @beta
     * @remarks
     * Displays the score on the side of the player's screen.
     *
     */
    Sidebar = 'Sidebar',
}