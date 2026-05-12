/* IMPORT */ import { IPane, IPropertyPane, IntroductionPaneTabProps } from '..';

/**
 * A root pane that can store property items.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IIntroductionPane extends IPane {
    /**
     * @remarks
     * Adds a new tab to the introduction pane
     *
     */
    addTab(props: IntroductionPaneTabProps): IPropertyPane;
}
