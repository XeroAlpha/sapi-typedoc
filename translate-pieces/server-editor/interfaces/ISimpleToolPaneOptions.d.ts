/* IMPORT */ import { ISimpleToolPaneComponent, TooltipInteractiveContent } from '../index';

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
    /**
     * @remarks
     * The id of the child pane that should be visible when the
     * parent pane is first shown, or the editor tool is
     * constructed and finalized
     *
     */
    childPaneInitiallyVisible?: string;
    /**
     * @remarks
     * An optional array of child panes. These panes are set up
     * exactly the same as the top level pane, but are displayed as
     * children inside the parent pane.
     *
     */
    childPanes?: ISimpleToolPaneOptions[];
    /**
     * @remarks
     * An optional flag to indicate whether the child panes are
     * mutually exclusive. If this is true, then only one child
     * pane can be visible at a time. If this is false, then
     * multiple child panes can be visible at the same time.
     * Visibility is controlled either through `showPane` or
     * `hidePane` functions of the `ISimpleToolPaneComponent` or
     * through the visibility methods in the top level tool
     * (`ISimpleTool`)
     *
     */
    childPanesMutuallyExclusive?: boolean;
    /**
     * @remarks
     * The unique identifier for this pane. This is used to
     * identify the pane in the tool's pane hierarchy.
     *
     */
    id: string;
    /**
     * @remarks
     * Information tooltip displayed on the root pane header.
     *
     */
    infoTooltip?: TooltipInteractiveContent;
    onBeginFinalize?: (pane: ISimpleToolPaneComponent) => void;
    onEndFinalize?: (pane: ISimpleToolPaneComponent) => void;
    onHide?: (pane: ISimpleToolPaneComponent) => void;
    onShow?: (pane: ISimpleToolPaneComponent) => void;
    onTeardown?: (pane: ISimpleToolPaneComponent) => void;
    /**
     * @remarks
     * The title of the pane. This will be displayed in the title
     * bar of the pane.
     *
     */
    title: string;
}