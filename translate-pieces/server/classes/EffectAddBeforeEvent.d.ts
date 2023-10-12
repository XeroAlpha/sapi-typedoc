/**
 * @beta
 * Contains information related to changes to an effect - like
 * poison - being added to an entity.
 */
export class EffectAddBeforeEvent {
    private constructor();
    /**
     * @remarks
     * When set to true will cancel the event.
     *
     */
    cancel: boolean;
    duration: number;
    /**
     * @remarks
     * The type of the effect that is being added.
     *
     */
    readonly effectType: string;
    /**
     * @remarks
     * Entity that the effect is being added to.
     *
     */
    readonly entity: Entity;
}