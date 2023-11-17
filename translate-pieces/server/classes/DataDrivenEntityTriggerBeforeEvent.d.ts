/* IMPORT */ import { DefinitionModifier, Entity } from '../index';

/**
 * @beta
 * Contains information related to firing of a data driven
 * entity event - for example, the minecraft:ageable_grow_up
 * event on a chicken.
 */
export class DataDrivenEntityTriggerBeforeEvent {
    private constructor();
    /**
     * @remarks
     * If set to true, this entity event is not triggered.
     *
     */
    cancel: boolean;
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
    readonly id: string;
    /**
     * @remarks
     * An updateable list of modifications to component state that
     * are the effect of this triggered event.
     *
     */
    getModifiers(): DefinitionModifier[];
    /**
     * @remarks
     * Changes a list of modifications to component state that are
     * the effect of this triggered event.
     *
     * @param modifiers
     * An updated list of modifications to component state.
     */
    setModifiers(modifiers: DefinitionModifier[]): void;
}