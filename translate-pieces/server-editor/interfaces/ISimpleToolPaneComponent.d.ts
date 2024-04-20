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
    get childPaneList(): string[];
    get id(): string;
    get isVisible(): boolean;
    get pane(): IPropertyPane;
    get session(): IPlayerUISession;
    get simpleTool(): ISimpleTool;
    /**
     * @remarks
     */
    findPane(idString: string): ISimpleToolPaneComponent | undefined;
    /**
     * @remarks
     */
    hidePane(): void;
    /**
     * @remarks
     */
    reconstructPane(): void;
    /**
     * @remarks
     */
    showPane(): void;
}