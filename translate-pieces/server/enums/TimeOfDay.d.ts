/**
 * 提供游戏中一天内常见时间段对应的数值。
 *
 * Provides numeric values for common periods in the Minecraft
 * day.
 */
export enum TimeOfDay {
    /**
     * @remarks
     *
     * 将时间设置为白天开始，对应游戏中的一天时间的 1000（约为现实早上 7 点）。
     *
     * Sets the time to the start of the day, which is time of the
     * day 1,000 (or the equivalent of 7am) in Minecraft.
     */
    Day = 1000,

    /**
     * @remarks
     *
     * 将时间设置为正午，对应游戏中的一天时间的 6000。
     *
     * Sets the time to noon, which is time of the day 6,000 in
     * Minecraft.
     */
    Noon = 6000,

    /**
     * @remarks
     *
     * 将时间设置为日落，对应游戏中的一天时间的 12000（约为现实下午 6 点）。
     *
     * Sets the time to sunset, which is time of the day 12,000 (or
     * the equivalent of 6pm) in Minecraft.
     */
    Sunset = 12000,

    /**
     * @remarks
     *
     * 将时间设置为夜晚，对应游戏中的一天时间的 13000（约为现实晚上 7 点）。
     *
     * Sets the time to night, which is time of the day 13,000 (or
     * the equivalent of 7:00pm) in Minecraft.
     */
    Night = 13000,

    /**
     * @remarks
     *
     * 将时间设置为午夜，对应 Minecraft 中的一天时间 18000（约为现实凌晨 12 点）。
     *
     * Sets the time to midnight, which is time of the day 18,000
     * (or the equivalent of 12:00am) in Minecraft.
     */
    Midnight = 18000,

    /**
     * @remarks
     *
     * 将时间设置为日出时刻，对应 Minecraft 中的一天时间 23000（约为现实早上 5 点）。
     *
     * Sets the time to sunrise, which is time of the day 23,000
     * (or the equivalent of 5am) in Minecraft.
     */
    Sunrise = 23000,
}