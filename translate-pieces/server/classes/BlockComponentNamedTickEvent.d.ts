/* IMPORT */ import { BlockEvent } from '..';

/**
 * Contains information regarding a named tick event for a
 * specific block.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentNamedTickEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * Checks whether this named tick event has the specified name.
     * Events are namespaced with their content UUID. Two named
     * tick events with the same name but scheduled from different
     * packs will not respond the same to this method.
     *
     * @param eventName
     * The name to check against this event.
     * @returns
     * Returns true if the event name matches the specified name;
     * otherwise, false.
     */
    isName(eventName: string): boolean;
}
