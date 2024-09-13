/* IMPORT */ import { WeatherChangeAfterEvent } from '../index';

/**
 * Manages callbacks that are connected to weather changing.
 */
export class WeatherChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when weather changes.
     *
     * This function can't be called in read-only mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(callback: (arg: WeatherChangeAfterEvent) => void): (arg: WeatherChangeAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when weather changes.
     *
     * This function can't be called in read-only mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg: WeatherChangeAfterEvent) => void): void;
}