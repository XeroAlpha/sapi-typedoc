/* IMPORT */ import { EditorStatusBarAlignment, ISimpleToolStatusBarComponent, SimpleToolStatusBarVisibility } from '../index';

/**
 * A set of options which define the basic properties of a
 * status bar item for a simple tool.
 */
export interface ISimpleToolStatusBarOptions {
    alignment: EditorStatusBarAlignment;
    displayAltText: string;
    onFinalize?: (statusBar: ISimpleToolStatusBarComponent) => void;
    onHide?: (statusBar: ISimpleToolStatusBarComponent) => void;
    onShow?: (statusBar: ISimpleToolStatusBarComponent) => void;
    onTeardown?: (statusBar: ISimpleToolStatusBarComponent) => void;
    size: number;
    visibility?: SimpleToolStatusBarVisibility;
}