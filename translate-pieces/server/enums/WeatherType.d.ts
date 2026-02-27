/**
 * 用于表示世界中的天气。
 *
 * Used to specify the type of weather condition within the
 * world.
 */
export enum WeatherType {
    /**
     * @remarks
     * 表示晴天。
     *
     * Specifies a clear weather condition.
     */
    Clear = 'Clear',

    /**
     * @remarks
     * 表示下雨天。
     *
     * Specifies a rain weather condition.
     */
    Rain = 'Rain',

    /**
     * @remarks
     * 表示雷雨天。
     *
     * Specifies a rain and thunder weather condition.
     */
    Thunder = 'Thunder',
}
