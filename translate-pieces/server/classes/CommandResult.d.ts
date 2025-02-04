/**
 * 表示命令执行结果的返回数据。
 * 
 * Contains return data on the result of a command execution.
 */
export class CommandResult {
    private constructor();
    /**
     * @remarks
     * 若命令针对多个实体、方块或物品进行操作，则返回
     * 此命令成功应用的次数。
     * 
     * If the command operates against a number of entities,
     * blocks, or items, this returns the number of successful
     * applications of this command.
     *
     */
    readonly successCount: number;
}