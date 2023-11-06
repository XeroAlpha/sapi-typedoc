/**
 * @beta
 * Contains information related to firing of a data driven
 * entity event - for example, the minecraft:ageable_grow_up
 * event on a chicken.
 */
export class DataDrivenEntityTriggerAfterEvent {
    private constructor();
    /**
     * @remarks
     * Entity that the event triggered on.
     *
     */
    readonly entity: Entity;
    /**
     * @remarks
     * Name of the data driven event being triggered.
     *
     */
    readonly eventId: string;
    /**
     * @remarks
     * An updateable list of modifications to component state that
     * are the effect of this triggered event.
     *
     */
    getModifiers(): DefinitionModifier[];
}