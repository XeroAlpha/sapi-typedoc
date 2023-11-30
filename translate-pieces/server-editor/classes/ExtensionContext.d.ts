/* IMPORT */ import { ClipboardManager, Cursor, Extension, ExtensionContextAfterEvents, PlaytestManager, SelectionManager, SettingsManager, TransactionManager, minecraftserver } from '../index';

/**
 * The extension context is a native (C++) object created for
 * each registered Editor Extension, when a player connection
 * is established with the server.
 * A registered extension activation or deactivation closure is
 * accompanied by an [ExtensionContext] object, which provides
 * a player specific, editor extension specific context.
 * The Extension Context is the main interface to all the bound
 * Editor Services.
 * As more player services are added to the editor, they will
 * be exposed through this object
 */
export class ExtensionContext {
    private constructor();
    /**
     * @remarks
     * Contains a set of events that are applicable to the editor
     * player.  Event callbacks are called in a deferred manner.
     * Event callbacks are executed in read-write mode.
     *
     */
    readonly afterEvents: ExtensionContextAfterEvents;
    /**
     * @remarks
     * This is used to access the players Clipboard Manager and the
     * main interface through which the player can create, modify
     * and apply clipboard items
     *
     */
    readonly clipboardManager: ClipboardManager;
    /**
     * @remarks
     * This is used to access the players 3D block cursor and it's
     * properties
     *
     */
    readonly cursor: Cursor;
    /**
     * @remarks
     * Contains information about the registered extension
     * instance.
     *
     */
    readonly extensionInfo: Extension;
    /**
     * @remarks
     * The current player which is the subject of the extension
     * invocation
     *
     */
    readonly player: minecraftserver.Player;
    readonly playtest: PlaytestManager;
    /**
     * @remarks
     * The instance of the players Selection Manager and the main
     * interface through which the player can create/modify
     * selections
     *
     */
    readonly selectionManager: SelectionManager;
    /**
     * @remarks
     * The instance of the players Settings Manager and the
     * contract through which the settings for the player can be
     * modified.
     *
     */
    readonly settings: SettingsManager;
    /**
     * @remarks
     * The instance of the players Transaction Manager and the main
     * interface through which the creator can create transaction
     * records, and undo/redo previous transactions
     *
     */
    readonly transactionManager: TransactionManager;
}