/**
 * 表示一个附加到实体上的效果，例如中毒。
 * 
 * Represents an effect - like poison - that has been added to
 * an Entity.
 */
export class Effect {
    private constructor();
    /**
     * @remarks
     * 获取应用于此效果的放大器值。
     * 典型的取值范围通常是0到4。例如：效果“跳跃提升 II”的放大器值为1。
     * 
     * Gets an amplifier that may have been applied to this effect.
     * Sample values range typically from 0 to 4. Example: The
     * effect 'Jump Boost II' will have an amplifier value of 1.
     *
     * @throws This property can throw when used.
     */
    readonly amplifier: number;
    /**
     * @remarks
     * 获取此效果的玩家友好名称。
     * 
     * Gets the player-friendly name of this effect.
     *
     * @throws This property can throw when used.
     */
    readonly displayName: string;
    /**
     * @remarks
     * 获取此效果的总持续时间（以刻为单位）。每秒有20个刻。使用 {@link TicksPerSecond} 常量在刻与秒之间转换。
     * 
     * Gets the entire specified duration, in ticks, of this
     * effect. There are 20 ticks per second. Use {@link
     * TicksPerSecond} constant to convert between ticks and
     * seconds.
     *
     * @throws This property can throw when used.
     */
    readonly duration: number;
    /**
     * @remarks
     * 获取此效果的类型ID。
     * 
     * Gets the type id of this effect.
     *
     * @throws This property can throw when used.
     */
    readonly typeId: string;
    /**
     * @remarks
     * 返回此上下文中是否可用效果实例。
     * 
     * Returns whether an effect instance is available for use in
     * this context.
     *
     */
    isValid(): boolean;
}