/* IMPORT */ import { EditorStatusBarAlignment, ISimpleToolStatusBarComponent, SimpleToolStatusBarVisibility } from '../index';

/**
 * A set of options which define the basic properties of a
 * status bar item for a simple tool.
 */
export interface ISimpleToolStatusBarOptions {
    /**
     * @remarks
     * The alignment of the status bar item within the parent
     * status bar container
     *
     */
    alignment: EditorStatusBarAlignment;
    /**
     * @remarks
     * The text for the status bar item
     *
     */
    displayAltText: string;
    onFinalize?: (statusBar: ISimpleToolStatusBarComponent) => void;
    onHide?: (statusBar: ISimpleToolStatusBarComponent) => void;
    onShow?: (statusBar: ISimpleToolStatusBarComponent) => void;
    onTeardown?: (statusBar: ISimpleToolStatusBarComponent) => void;
    /**
     * @remarks
     * The size of the status bar item within the parent status bar
     * container
     *
     */
    size: number;
    /**
     * @remarks
     * Determine the status bar visibility based on the existence
     * and visibility of the tool's root property pane
     *
     */
    visibility?: SimpleToolStatusBarVisibility;
}