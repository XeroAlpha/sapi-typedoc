/**
 * @rc
 * The reason why a data driven UI screen (MessageBox or
 * CustomForm) was closed.
 */
export enum DataDrivenScreenClosedReason {
    /**
     * @remarks
     * The screen was closed by the client (e.g., the player
     * dismissed it or there was a client authoritative close
     * button).
     *
     */
    ClientClosed = 'ClientClosed',
    /**
     * @remarks
     * The screen was closed by the server, likely by the close
     * API.
     *
     */
    ServerClosed = 'ServerClosed',
    /**
     * @remarks
     * The screen could not be shown because the player was busy
     * with another UI interaction.
     *
     */
    UserBusy = 'UserBusy',
}
