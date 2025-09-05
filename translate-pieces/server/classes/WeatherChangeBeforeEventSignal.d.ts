/* IMPORT */ import { WeatherChangeBeforeEvent } from '..';

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
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: WeatherChangeBeforeEvent) => void): (arg0: WeatherChangeBeforeEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called before weather changes.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: WeatherChangeBeforeEvent) => void): void;
}
