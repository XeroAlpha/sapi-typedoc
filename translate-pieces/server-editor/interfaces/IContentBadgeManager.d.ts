export interface IContentBadgeManager {
    /**
     * @remarks
     * Register a badge to highlight a content.
     *
     * @param id
     * The badge identifier
     * @param iteration
     * The iteration number (default: 0)
     */
    registerBadge(id: string, iteration?: number): void;
    /**
     * @remarks
     * Unregister a badge.
     *
     * @param id
     * The badge identifier to unregister
     */
    unregisterBadge(id: string): void;
}
