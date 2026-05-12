/* IMPORT */ import { IIntroductionPane, IIntroductionPaneOptions, IRootPropertyPane, IRootPropertyPaneOptions } from '..';

/**
 * Manager for creating and controlling property panes.
 */
export interface IPaneManager {
    /**
     * @remarks
     * Create a pane to be shown on the introduction window
     *
     */
    createIntroductionPane(options: IIntroductionPaneOptions): IIntroductionPane;
    /**
     * @remarks
     * Create a root pane
     *
     */
    createRootPane(options: IRootPropertyPaneOptions): IRootPropertyPane;
}
