/**
 * Provides numeric values for common periods in the Minecraft
 * day.
 * 表示Minecraft中常见时间段的数值。
 */
export enum TimeOfDay {
    /**
     * @remarks
     * Sets the time to the start of the day, which is time of the
     * day 1,000 (or the equivalent of 7am) in Minecraft.
     * 将时间设置为一天的开始，即Minecraft中的1000时间（相当于早上7点）。
     *
     */
    Day = 1000,
    /**
     * @remarks
     * Sets the time to noon, which is time of the day 6,000 in
     * Minecraft.
     * 将时间设置为中午，即Minecraft中的6000时间。
     *
     */
    Noon = 6000,
    /**
     * @remarks
     * Sets the time to sunset, which is time of the day 12,000 (or
     * the equivalent of 6pm) in Minecraft.
     * 将时间设置为日落，即Minecraft中的12000时间（相当于下午6点）。
     *
     */
    Sunset = 12000,
    /**
     * @remarks
     * Sets the time to night, which is time of the day 13,000 (or
     * the equivalent of 7:00pm) in Minecraft.
     * 将时间设置为夜晚，即Minecraft中的13000时间（相当于晚上7点）。
     *
     */
    Night = 13000,
    /**
     * @remarks
     * Sets the time to midnight, which is time of the day 18,000
     * (or the equivalent of 12:00am) in Minecraft.
     * 将时间设置为午夜，即Minecraft中的18000时间（相当于凌晨12点）。
     *
     */
    Midnight = 18000,
    /**
     * @remarks
     * Sets the time to sunrise, which is time of the day 23,000
     * (or the equivalent of 5am) in Minecraft.
     * 将时间设置为日出，即Minecraft中的23000时间（相当于早上5点）。
     *
     */
    Sunrise = 23000,
}