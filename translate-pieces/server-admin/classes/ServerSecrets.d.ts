/* IMPORT */ import { SecretString } from '..';

/**
 * 表示在专用服务器配置中定义的服务器机密变量的集合。
 * 
 * A collection of server secrets defined in dedicated server
 * configuration.
 * @seeExample getPlayerProfile.ts
 */
export class ServerSecrets {
    private constructor();
    /**
     * @remarks
     * 已配置且可用的服务器机密变量名称组成的数组。
     * 
     * A list of available, configured server secrets.
     *
     */
    readonly names: string[];
    /**
     * @remarks
     * 以占位符形式返回在专用服务器配置 JSON 文件中定义的指定机密变量。
     * 在特定的对象（例如 HttpHeader）中，机密变量占位符会在执行时被替换为实际的值，但脚本本身是无法访问该值的。
     * 
     * Returns a SecretString that is a placeholder for a secret
     * configured in a JSON file. In certain objects, like an
     * HttpHeader, this Secret is resolved at the time of execution
     * but is not made available to the script environment.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    get(name: string): SecretString | undefined;
}
