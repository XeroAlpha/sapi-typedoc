/* IMPORT */ import { WeatherChangeBeforeEvent } from '../index';

/**
 * @beta
 */
export class WeatherChangeBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: WeatherChangeBeforeEvent) => void): (arg: WeatherChangeBeforeEvent) => void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: WeatherChangeBeforeEvent) => void): void;
}