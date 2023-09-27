/**
 * @beta
 * 表示分数持有者的类型。
 * 
 * Contains objectives and participants for the scoreboard.
 */
export enum ScoreboardIdentityType {
    /**
     * @beta
     * @remarks
     * 分数持有者是一个实体。
     * 
     * This scoreboard participant is tied to an entity.
     *
     */
    Entity = 'Entity',
    /**
     * @beta
     * @remarks
     * 分数持有者是一个虚拟玩家（通常用于存储数据或者作为抽象进度）。
     * 
     * This scoreboard participant is tied to a pseudo player
     * entity - typically this is used to store scores as data or
     * as abstract progress.
     *
     */
    FakePlayer = 'FakePlayer',
    /**
     * @beta
     * @remarks
     * 分数持有者是一位玩家。
     * 
     * This scoreboard participant is tied to a player.
     *
     */
    Player = 'Player',
}