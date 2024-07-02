/* IMPORT */ import { ISimpleTool, ISimpleToolKeyBinding, ISimpleToolPaneOptions, ISimpleToolRailOptions, ISimpleToolStatusBarOptions } from '../index';

/**
 * A set of options which define the basic properties of a
 * simple tool, and the optional components that are desired.
 */
export interface ISimpleToolOptions {
    /**
     * @remarks
     * A key binding that will activate the tool. Note that if the
     * tool is a modal tool, then the key binding will be tied to
     * the tool rail activation, and appear as a tooltip on the
     * tool rail button. If the tool is a global tool, then the key
     * binding will be tied to a menu item in the View menu, and
     * appear as a stateful menu item which will control the pane
     * visibility. If there's no pane required, then the key
     * binding is ignored
     *
     */
    activationKeyBinding?: ISimpleToolKeyBinding;
    /**
     * @remarks
     * The name of the tool. This will be used to identify the tool
     * in the UI and logs and will be used in the View \> [Tool
     * Name] menu item (if it's a global tool)
     *
     */
    name: string;
    /**
     * @remarks
     * The finalize function is executed after each of the
     * components have been created and finalized during
     * construction
     *
     */
    onFinalize?: (tool: ISimpleTool) => void;
    /**
     * @remarks
     * The teardown function is executed when the tool is being
     * torn down and only after the individual components have
     * executed their own teardown functions
     *
     */
    onTeardown?: (tool: ISimpleTool) => void;
    /**
     * @remarks
     * The options structure for an optional property pane
     * component
     *
     */
    propertyPaneOptions?: ISimpleToolPaneOptions;
    /**
     * @remarks
     * The options structure for an optional status bar component
     *
     */
    statusBarOptions?: ISimpleToolStatusBarOptions;
    /**
     * @remarks
     * The options structure for an optional tool rail component
     *
     */
    toolRailOptions?: ISimpleToolRailOptions;
}