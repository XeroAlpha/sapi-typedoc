/**
 * @beta
 * Contains a set of updates to the component definition state
 * of an entity.
 */
export class DefinitionModifier {
    /**
     * @remarks
     * Retrieves the list of component groups that will be added
     * via this definition modification.
     *
     */
    getComponentGroupsToAdd(): string[];
    /**
     * @remarks
     * Retrieves the list of component groups that will be removed
     * via this definition modification.
     *
     */
    getComponentGroupsToRemove(): string[];
    /**
     * @remarks
     * Retrieves the list of entity definition events that will be
     * fired via this update.
     *
     */
    getTriggers(): Trigger[];
    /**
     * @remarks
     * Updates the list of component groups that will be added via
     * this definition modification.
     *
     */
    setComponentGroupsToAdd(newGroups: string[]): void;
    /**
     * @remarks
     * Updates the list of component groups that will be removed
     * via this definition modification.
     *
     */
    setComponentGroupsToRemove(removedGroups: string[]): void;
    /**
     * @remarks
     * Updates the list of entity definition events that will be
     * fired via this update.
     *
     */
    setTriggers(newTriggers: Trigger[]): void;
}