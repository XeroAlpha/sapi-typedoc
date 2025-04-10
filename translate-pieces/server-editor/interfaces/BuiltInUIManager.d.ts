/**
 * Represents a UI session for a given player
 */
export interface BuiltInUIManager {
    /**
     * @remarks
     * Activates tutorial overlay
     *
     */
    activateTutorial(): void;
    /**
     * @remarks
     * Navigates to the documentation site.
     *
     */
    navigateToDocumentation(): void;
    /**
     * @remarks
     * Navigates to the feedback site
     *
     */
    navigateToFeedback(): void;
    /**
     * @remarks
     * Navigates to the pause screen
     *
     */
    navigateToPauseScreen(): void;
    /**
     * @remarks
     * Updates the visibility of the log panel
     *
     */
    updateLogPanelVisibility(visibility: boolean): void;
    /**
     * @remarks
     * Updates the visibility of the control demo
     *
     */
    updateUISettingsPanelVisibility(visibility: boolean): void;
    /**
     * @remarks
     * Updates the visibility of the welcome panel
     *
     */
    updateWelcomePanelVisibility(visibility: boolean): void;
}