/* IMPORT */ import { Trigger } from '..';

/**
 * Contains a set of updates to the component definition state
 * of an entity.
 */
export interface DefinitionModifier {
    /**
     * @remarks
     * Retrieves the list of component groups that will be added
     * via this definition modification.
     *
     */
    addedComponentGroups: string[];
    /**
     * @remarks
     * The list of component groups that will be removed via this
     * definition modification.
     *
     */
    removedComponentGroups: string[];
    /**
     * @beta
     * @remarks
     * The list of entity definition events that will be fired via
     * this update.
     *
     */
    triggers: Trigger[];
}
