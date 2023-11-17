/* IMPORT */ import { Selection } from '../index';

/**
 * The SelectionManager (accessible from the {@link
 * ExtensionContext}) is responsible for the management of all
 * {@link Selection} objects, and provides the user the ability
 * to create new {@link Selection} objects for use within an
 * extension.
 */
export class SelectionManager {
    private constructor();
    /**
     * @remarks
     * The primary {@link Selection} object is always present (even
     * if it's empty) and cannot be deleted.  This object
     * represents the main selection object which is always
     * accessible through the UI, and by default is synchronized
     * between the client and server.
     *
     * @throws This property can throw when used.
     */
    readonly selection: Selection;
    /**
     * @remarks
     * Create a new, empty {@link Selection} object
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    create(): Selection;
}