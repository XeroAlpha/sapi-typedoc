/**
 * An error that is thrown when trying to interact with a join
 * event and the player is disconnected.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class DisconnectedError extends Error {
    private constructor();
    /**
     * @remarks
     * The id of the player that was disconnected.
     *
     * @earlyExecution
     *
     */
    readonly id: string;
}
