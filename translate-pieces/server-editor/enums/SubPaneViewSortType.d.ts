/**
 * Determines how header sub panes managed by a sub pane view
 * control will be sorted. `Custom` resolves each child's
 * comparable value through a caller supplied function.
 */
export declare enum SubPaneViewSortType {
    AtoZ = 'aToZ',
    Custom = 'custom',
    Default = 'default',
    ZtoA = 'zToA',
}
