/* IMPORT */ import { VirtualContainer } from '..';

/**
 * Contains optional parameters for registering a virtual
 * container event.
 */
export interface VirtualContainerEventOptions {
    /**
     * @remarks
     * If this value is set, this event will only fire for the
     * virtual containers within this collection.
     *
     */
    containers?: VirtualContainer[];
}
