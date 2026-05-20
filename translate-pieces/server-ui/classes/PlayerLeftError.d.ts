/**
 * @rc
 * Thrown when a form operation fails because the target player
 * has left the game.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PlayerLeftError extends Error {
    private constructor();
    /**
     * @remarks
     * The identifier of the form that was being shown when the
     * player left the game.
     *
     * @earlyExecution
     *
     */
    readonly formId: string;
}
