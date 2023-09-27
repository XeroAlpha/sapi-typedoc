/**
 * @beta
 * Contains information related to a triggering of a custom
 * item definition change.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemDefinitionTriggeredBeforeEvent extends ItemDefinitionTriggeredAfterEvent {
    private constructor();
    /**
     * @remarks
     * If set to true, will cancel the application of this item
     * definition change.
     *
     */
    cancel: boolean;
}