/* IMPORT */ import { Entity } from '../index';

/**
 * 表示与实体生命值变化相关的信息。警告：不要在此事件中更改实体的生命值，否则会导致无限循环！
 *
 * Contains information related to an entity when its health
 * changes. Warning: don't change the health of an entity in
 * this event, or it will cause an infinite loop!
 */
export class EntityHealthChangedAfterEvent {
    private constructor();
    /**
     * @remarks
     * 生命值发生变化的实体。
     *
     * Entity whose health changed.
     *
     */
    readonly entity: Entity;
    /**
     * @remarks
     * 实体的新生命值。
     *
     * New health value of the entity.
     *
     */
    readonly newValue: number;
    /**
     * @remarks
     * 实体的旧生命值。
     *
     * Old health value of the entity.
     *
     */
    readonly oldValue: number;
}