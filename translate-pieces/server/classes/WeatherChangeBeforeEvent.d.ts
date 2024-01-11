/* IMPORT */ import { WeatherType } from '../index';

/**
 * @beta
 */
export class WeatherChangeBeforeEvent {
    private constructor();
    cancel: boolean;
    duration: number;
    newWeather: WeatherType;
    readonly previousWeather: WeatherType;
}