/* IMPORT */ import { Entity, ScoreboardIdentityType } from '../index';

/**
 * 表示记分板上的分数持有者。
 * 
 * Contains an identity of the scoreboard item.
 */
export class ScoreboardIdentity {
    private constructor();
    /**
     * @remarks
     * 此分数持有者在玩家视角显示的名称。
     * 
     * Returns the player-visible name of this identity.
     *
     */
    readonly displayName: string;
    /**
     * @remarks
     * 此分数持有者的 ID。
     * 
     * Identifier of the scoreboard identity.
     *
     */
    readonly id: number;
    /**
     * @rc
     * @remarks
     * Returns true if the ScoreboardIdentity reference is still
     * valid.
     *
     */
    readonly isValid: boolean;
    /**
     * @remarks
     * 此分数持有者的类型。
     * 
     * Type of the scoreboard identity.
     *
     */
    readonly 'type': ScoreboardIdentityType;
    /**
     * @remarks
     * 返回此分数持有者对应的实体对象（仅当此分数持有者是一个实体或者玩家时）。
     * 
     * If the scoreboard identity is an entity or player, returns
     * the entity that this scoreboard item corresponds to.
     * @returns 对应的实体对象。虚拟玩家类型的分数持有者会返回 `undefined`。
     * @throws
     * 若实体不存在时，抛出。
     */
    getEntity(): Entity | undefined;
}