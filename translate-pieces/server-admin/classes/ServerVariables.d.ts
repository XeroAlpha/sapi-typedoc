/**
 * 表示在专用服务器配置中定义的服务器变量的集合。
 * 
 * A collection of server variables defined in dedicated server
 * configuration.
 * @seeExample getPlayerProfile.ts
 */
export class ServerVariables {
    private constructor();
    /**
     * @remarks
     * 已配置且可用的服务器变量名称组成的数组。
     * 
     * A list of available, configured server variables.
     *
     */
    readonly names: string[];
    /**
     * @remarks
     * 返回在专用服务器配置 JSON 文件中定义的指定变量的值。
     * 
     * Returns the value of variable that has been configured in a
     * dedicated server configuration JSON file.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    get(name: string): unknown | undefined;
}