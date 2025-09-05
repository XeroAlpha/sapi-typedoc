/**
 * Options when transferring a player to a server that supports
 * direct host/port connections.
 */
export interface TransferPlayerIpPortOptions {
    /**
     * @remarks
     * Hostname of the destination server.
     *
     */
    hostname: string;
    /**
     * @remarks
     * Port of the destination server.
     *
     */
    port: number;
}
