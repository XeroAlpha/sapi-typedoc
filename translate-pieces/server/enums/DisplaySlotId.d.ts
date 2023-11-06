/**
 * Specifies a mechanism for displaying scores on a scoreboard.
 */
export enum DisplaySlotId {
    /**
     * @remarks
     * Displays the score below the player's name.
     *
     */
    BelowName = 'BelowName',
    /**
     * @remarks
     * Displays the score as a list on the pause screen.
     *
     */
    List = 'List',
    /**
     * @remarks
     * Displays the score on the side of the player's screen.
     *
     */
    Sidebar = 'Sidebar',
}