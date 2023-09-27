/**
 * @beta
 * Contains information related to changes in weather in the
 * environment.
 */
export class WeatherChangeAfterEvent {
    private constructor();
    /**
     * @remarks
     * Dimension in which the weather has changed.
     *
     */
    readonly dimension: string;
    /**
     * @remarks
     * Whether it is lightning after the change in weather.
     *
     */
    readonly lightning: boolean;
    /**
     * @remarks
     * Whether it is raining after the change in weather.
     *
     */
    readonly raining: boolean;
}