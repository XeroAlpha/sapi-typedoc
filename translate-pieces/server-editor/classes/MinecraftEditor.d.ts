/* IMPORT */ import { EditorConstants, Logger, SimulationState } from '../index';

/**
 * The MinecraftEditor class is a namespace container for
 * Editor functionality which does not have any player context.
 */
export class MinecraftEditor {
    private constructor();
    readonly constants: EditorConstants;
    /**
     * @remarks
     * A global instance of the log output class object.  This is
     * not contextualized to any particular player, and any
     * messages sent to this instance will be broadcast to all
     * connected editor client sessions
     *
     * @throws This property can throw when used.
     */
    readonly log: Logger;
    /**
     * @remarks
     * Allows querying and modifying some properties of the
     * simulation.
     *
     */
    readonly simulation: SimulationState;
}