/* IMPORT */ import { WeatherType } from '..';

/**
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
     * The weather type after the weather was changed.
     *
     */
    readonly newWeather: WeatherType;
    /**
     * @remarks
     * The weather type before the weather was changed.
     *
     */
    readonly previousWeather: WeatherType;
}
