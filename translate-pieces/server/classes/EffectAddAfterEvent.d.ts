/**
 * @beta
 * Contains information related to changes to an effect - like
 * poison - being added to an entity.
 */
export class EffectAddAfterEvent {
    private constructor();
    /**
     * @remarks
     * Additional properties and details of the effect.
     *
     * This property can't be edited in read-only mode.
     *
     */
    effect: Effect;
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     *
     */
    effectState: number;
    /**
     * @remarks
     * Entity that the effect is being added to.
     *
     * This property can't be edited in read-only mode.
     *
     */
    entity: Entity;
}