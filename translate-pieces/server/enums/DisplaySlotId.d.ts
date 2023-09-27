/**
 * @beta
 * 表示记分板分数的显示方式。
 * 
 * Specifies a mechanism for displaying scores on a scoreboard.
 */
export enum DisplaySlotId {
    /**
     * @beta
     * @remarks
     * 记分项上的分数将显示在玩家名称牌下方。
     * 
     * Displays the score below the player's name.
     *
     */
    BelowName = 'BelowName',
    /**
     * @beta
     * @remarks
     * 该记分项与对应的分数持有者将显示在暂停菜单上。
     * 
     * Displays the score as a list on the pause screen.
     *
     */
    List = 'List',
    /**
     * @beta
     * @remarks
     * 记分项将在屏幕右侧显示。
     * 
     * Displays the score on the side of the player's screen.
     *
     */
    Sidebar = 'Sidebar',
}