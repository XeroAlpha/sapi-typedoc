/* IMPORT */ import { ListViewControlAction, ListViewControlActionState } from '..';

/**
 * View control for a list pane to manage how slots are
 * displayed
 */
export interface IListPaneViewControlPane {
    /**
     * @remarks
     * Unique identifier
     *
     */
    readonly id: string;
    /**
     * @remarks
     * Active state of the filter
     *
     */
    readonly isFilterActive: boolean;
    /**
     * @remarks
     * Visible state of the pane
     *
     */
    readonly visible: boolean;
    /**
     * @remarks
     * Returns the state of an existing action
     *
     * @param id
     * Identifier for the action
     */
    getActionState(id: string): ListViewControlActionState | undefined;
    /**
     * @remarks
     * Updates enabled state of the existing action
     *
     * @param id
     * Identifier for the action
     * @param enabled
     * New action enabled state
     */
    setActionEnabledState(id: string, enabled: boolean): void;
    /**
     * @remarks
     * Updates existing actions
     *
     * @param newActions
     * New actions
     */
    setActionStates(newActions: ListViewControlAction[]): void;
    /**
     * @remarks
     * Updates visible state of the pane
     *
     * @param visible
     * New visibility state
     */
    setVisible(visible: boolean): void;
    /**
     * @remarks
     * Updates action item state for the view control
     *
     * @param id
     * Identifier for the action
     * @param newState
     * New action state
     */
    updateActionState(id: string, newState: ListViewControlActionState): void;
}
