/* IMPORT */ import { ISimpleTool, ISimpleToolKeyPair, ISimpleToolPaneOptions, ISimpleToolRailOptions, ISimpleToolStatusBarOptions } from '../index';

/**
 * A set of options which define the basic properties of a
 * simple tool, and the optional components that are desired.
 */
export interface ISimpleToolOptions {
    activationKeyBinding?: ISimpleToolKeyPair;
    name: string;
    onFinalize?: (tool: ISimpleTool) => void;
    onTeardown?: (tool: ISimpleTool) => void;
    propertyPaneOptions?: ISimpleToolPaneOptions;
    statusBarOptions?: ISimpleToolStatusBarOptions;
    toolRailOptions?: ISimpleToolRailOptions;
}