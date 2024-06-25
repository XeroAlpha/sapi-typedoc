/* IMPORT */ import { WeatherType } from '../index';

/**
 * Contains information related to changes in weather in the
 * environment.
 */
export class WeatherChangeBeforeEvent {
    private constructor();
    /**
     * @remarks
     * If set to true the weather change will be cancelled.
     *
     */
    cancel: boolean;
    /**
     * @remarks
     * Sets the duration of the new weather (in ticks).
     *
     */
    duration: number;
    /**
     * @remarks
     * The type of weather that will be applied.
     *
     */
    newWeather: WeatherType;
    /**
     * @remarks
     * The type of weather that it was prior to the event being
     * fired.
     *
     */
    readonly previousWeather: WeatherType;
}