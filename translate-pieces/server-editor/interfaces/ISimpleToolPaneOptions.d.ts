/* IMPORT */ import { ISimpleToolPaneComponent } from '../index';

/**
 * A set of options which define the basic properties of a
 * window pane (or sub-pane) for a simple tool. This pane can
 * be a top level pane, or a child pane of the top level pane,
 * and is the content container for all of the UI controls used
 * by the editor tool. Each pane is uniquely identified by the
 * `id` property, and has a number of optional function
 * closures which are called at various points in the pane's
 * lifecycle. Note that instead of having a single `onFinalize`
 * function, panes implement a pair of `onBeginFinalize` and
 * `onEndFinalize` functions. This is to allow for the pane to
 * be partially constructed BEFORE any child panes are
 * constructed. Once all child panes have been fully finalized,
 * then the `onEndFinalize` function is called to allow the
 * pane to finalize itself.
 */
export interface ISimpleToolPaneOptions {
    childPaneInitiallyVisible?: string;
    childPanes?: ISimpleToolPaneOptions[];
    childPanesMutuallyExclusive?: boolean;
    id: string;
    onBeginFinalize?: (pane: ISimpleToolPaneComponent) => void;
    onEndFinalize?: (pane: ISimpleToolPaneComponent) => void;
    onHide?: (pane: ISimpleToolPaneComponent) => void;
    onShow?: (pane: ISimpleToolPaneComponent) => void;
    onTeardown?: (pane: ISimpleToolPaneComponent) => void;
    titleAltText: string;
    titleStringId?: string;
}