/* IMPORT */ import { IPropertyItemOptions, IPropertyPane } from '../index';

export interface IPropertyItemOptionsSubPane extends IPropertyItemOptions {
    /**
     * @remarks
     * The sub pane to render in UI.
     *
     */
    pane: IPropertyPane;
}