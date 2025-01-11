/* IMPORT */ import { WeatherChangeBeforeEvent } from '../index';

/**
 * Manages callbacks that are connected to before weather
 * changing.
 */
export class WeatherChangeBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called before weather changes.
     *
     * This function can't be called in read-only mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(callback: (arg0: WeatherChangeBeforeEvent) => void): (arg0: WeatherChangeBeforeEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called before weather changes.
     *
     * This function can't be called in read-only mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: WeatherChangeBeforeEvent) => void): void;
}