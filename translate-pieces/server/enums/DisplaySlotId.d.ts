/**
 * Specifies a mechanism for displaying scores on a scoreboard.
 * 
 * 表示记分板分数的显示方式。
 */
export enum DisplaySlotId {
    /**
     * Displays the score below the player's name.
     *
     * 记分项上的分数将显示在玩家名称牌下方。
     * 
     */
    BelowName = 'BelowName',
    /**
     * Displays the score as a list on the pause screen.
     *
     * 该记分项与对应的分数持有者将显示在暂停菜单上。
     * 
     */
    List = 'List',
    /**
     * Displays the score on the side of the player's screen.
     *
     * 记分项将在屏幕右侧显示。
     * 
     */
    Sidebar = 'Sidebar',
}