/* IMPORT */ import { Entity, EntityDamageSource } from '..';

/**
 * @rc
 * Contains information related to an entity that will be hurt.
 */
export class EntityHurtBeforeEvent {
    private constructor();
    cancel: boolean;
    /**
     * @remarks
     * Describes the amount of damage that will be caused.
     *
     */
    damage: number;
    /**
     * @remarks
     * Source information on the entity that may have applied this
     * damage.
     *
     */
    readonly damageSource: EntityDamageSource;
    /**
     * @remarks
     * Entity that will be hurt.
     *
     */
    readonly hurtEntity: Entity;
}
