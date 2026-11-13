/**
 * Why a player's virtual container screen closed.
 */
export enum VirtualContainerCloseReason {
    /**
     * @remarks
     * The player closed the screen, or their device failed to show
     * it.
     *
     */
    PlayerClosed = 'PlayerClosed',
    /**
     * @remarks
     * The player died while the screen was open.
     *
     */
    PlayerDied = 'PlayerDied',
    /**
     * @remarks
     * The player left the game while the screen was open.
     *
     */
    PlayerLeft = 'PlayerLeft',
    /**
     * @remarks
     * The player switched to spectator mode while the screen was
     * open.
     *
     */
    PlayerSpectating = 'PlayerSpectating',
    /**
     * @remarks
     * The screen was closed by the server, for example by
     * VirtualContainer.close, or because the player changed
     * dimension.
     *
     */
    ServerClosed = 'ServerClosed',
    /**
     * @remarks
     * The player's device did not show the screen because the
     * player was busy, for example with another menu, or was not
     * ready to show it. The screen was never shown; try opening it
     * again later.
     *
     */
    UserBusy = 'UserBusy',
}
