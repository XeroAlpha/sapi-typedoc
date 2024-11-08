/* IMPORT */ import { IMenu, IPlayerUISession, ISimpleToolPaneComponent, ISimpleToolRailComponent, ISimpleToolStatusBarComponent } from '../index';

/**
 * The simple tool wrapper will create, bind and manage the
 * lifecycle of all the desired components. The wrapper is
 * designed to obfuscate and simplify the process of creating a
 * simple editor tool so that a creator can get on with the job
 * of just creating the tool functionality without getting
 * mired in the irrelevant details of component lifecycle and
 * visibility management. The wrapper will also attempt to
 * codify particular implementation patterns and requirements
 * that are common to all editor tools, and enforce them in a
 * consistent way. It should also go some way to insulating the
 * creator from underlying system and implementation changes as
 * the editor evolves.
 */
export interface ISimpleTool {
    /**
     * @remarks
     * Get the tool unique id
     *
     */
    get id(): string;
    /**
     * @remarks
     * Get a reference to the menu component that was automatically
     * created for the tool This generally only happens if the tool
     * is a global tool (i.e. has a pane and does not have a tool
     * rail component) In this case a menu item is automatically
     * created and some visibility controls are inserted. If you
     * have additional menu options you want to add, this is the
     * ideal control to add children to
     *
     */
    get menu(): IMenu | undefined;
    /**
     * @remarks
     * Get the tool name
     *
     */
    get name(): string;
    /**
     * @remarks
     * Get a reference to the root (primary) property pane
     * component - if no component was requested, this function
     * will throw an error
     *
     */
    get pane(): ISimpleToolPaneComponent;
    /**
     * @remarks
     * Get a reference to the IPlayerUISession. This is the primary
     * interface to the editor UI and all of the editor extension
     * controls
     *
     */
    get session(): IPlayerUISession;
    /**
     * @remarks
     * Get a reference to the status bar component - if no
     * component was requested, this function will throw an error
     *
     */
    get statusBar(): ISimpleToolStatusBarComponent;
    /**
     * @remarks
     * Get a reference to the tool rail component - if no component
     * was requested, this function will throw an error
     *
     */
    get toolRail(): ISimpleToolRailComponent;
    /**
     * @remarks
     * Find a pane or subpane by it's unique ID.
     *
     */
    findPane(idString: string): ISimpleToolPaneComponent | undefined;
    /**
     * @remarks
     * Hide a particular pane or subpane by it's unique ID. If no
     * ID is provided (or cannot be found) the function will throw
     * an error Although the parent pane is used to execute the
     * visibility request, the hidePane function will NOT affect
     * the visibility of any sibling panes -- so it is possible to
     * hide all of the child panes of a parent using this function
     *
     */
    hidePane(idString?: string): void;
    /**
     * @remarks
     * Send a tagged Debug log message to the console. The tag will
     * contain the tool name
     *
     */
    logDebug(message: string): void;
    /**
     * @remarks
     * Send a tagged Error log message to the console. The tag will
     * contain the tool name
     *
     */
    logError(message: string): void;
    /**
     * @remarks
     * Send a tagged Informational log message to the console. The
     * tag will contain the tool name
     *
     */
    logInfo(message: string): void;
    /**
     * @remarks
     * Send a tagged Warning log message to the console. The tag
     * will contain the tool name
     *
     */
    logWarn(message: string): void;
    /**
     * @remarks
     * Show a particular pane or subpane by it's unique ID. If no
     * ID is provided (or cannot be found) the function will throw
     * an error Note that the showPane function (when used with a
     * child pane) will use the parent pane to execute the
     * visibility request. In this case, if the child panes are
     * marked as mututally exclusive, then the siblings of the
     * requested pane will be hidden
     *
     */
    showPane(idString?: string): void;
    /**
     * @remarks
     * Much like the showPane function, but will hide all other
     * panes that are not the requested pane irrespective of the
     * exclusivity setting
     *
     */
    showPaneExclusively(idString: string): void;
    /**
     * @remarks
     * A teardown function implemented by the ISimpleTool
     * implementation, and is called by the system during editor
     * extension shutdown. Don't override this function - instead,
     * implement the onTeardown event in the ISimpleToolOptions
     * structure
     *
     */
    teardown(): void;
}