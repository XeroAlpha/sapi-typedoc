/* IMPORT */ import { IPlayerUISession, IPropertyPane, ISimpleTool } from '../index';

/**
 * The Simple Tool pane component represents the main window
 * (or sub-window) for an editor tool. The pane components are
 * stored as a hierarchy (see the `ISimpleToolPaneOptions`
 * interface for more details) and are the main containers for
 * all of the UI controls used by the editor tool. Panes are
 * optional (a tool doesn't necessarily need to have a pane),
 * but if a pane is present, then it is one of two type - Modal
 * Pane (appears on the left side of the display; visibility is
 * tied to the `ISimpleToolRail` component) (Note that there
 * can be only one modal pane visible at a time) - Global Pane
 * (appears on the right side of the display; visibility is up
 * to the creator/user)
 */
export interface ISimpleToolPaneComponent {
    /**
     * @remarks
     * Get a list of the unique ID's of all of the child panes
     *
     */
    get childPaneList(): string[];
    /**
     * @remarks
     * Get the unique ID of the pane
     *
     */
    get id(): string;
    /**
     * @remarks
     * Check the visibility of the pane
     *
     */
    get isVisible(): boolean;
    /**
     * @remarks
     * Get a reference to actual property pane implementation that
     * was constructed by the tool. This reference is used to
     * construct the UI components that are displayed in the pane.
     *
     */
    get pane(): IPropertyPane;
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
     * Get a reference to the parent tool.
     *
     */
    get simpleTool(): ISimpleTool;
    /**
     * @remarks
     * Find a pane reference by unique ID
     *
     */
    findPane(idString: string): ISimpleToolPaneComponent | undefined;
    /**
     * @remarks
     * Hide the pane. Although the parent pane is used to execute
     * the visibility request, the hidePane function will NOT
     * affect the visibility of any sibling panes -- so it is
     * possible to hide all of the child panes of a parent using
     * this function
     *
     */
    hidePane(): void;
    /**
     * @remarks
     * This causes the reconstruction of the pane (and the child
     * panes) as if the tool was being constructed for the first
     * time. This is unfortunately necessary until such time that
     * all of our UI components are able to communicate dynamically
     * with their client counterparts. Certain controls require a
     * full teardown and reconstruction to properly update their
     * state. This is undergoing code changes and should become
     * unnecessary in the future.
     *
     */
    reconstructPane(): void;
    /**
     * @remarks
     * Show the pane. Note, if this is a sub-pane, then this
     * function will ask the parent for permission to show, and may
     * result in the visibility of any sibling panes to change as a
     * result (depending on the `mutually exclusive visibility`
     * flag)
     *
     */
    showPane(): void;
}