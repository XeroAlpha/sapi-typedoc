/**
 * Contains return data on the result of a command execution.
 */
export class CommandResult {
    private constructor();
    /**
     * @remarks
     * If the command operates against a number of entities,
     * blocks, or items, this returns the number of successful
     * applications of this command.
     *
     */
    readonly successCount: number;
}