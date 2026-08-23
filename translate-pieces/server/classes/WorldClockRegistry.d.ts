/* IMPORT */ import { WorldClockInvalidRegistryError, WorldClockRegistrationError, WorldClockReloadNewWorldClockError } from '..';

/**
 * @beta
 * Provides the functionality for registering custom world
 * clocks. World clocks can only be registered during the
 * system startup event.
 */
export class WorldClockRegistry {
    private constructor();
    /**
     * @remarks
     * Registers a new custom world clock. Must be called during
     * the system startup event.
     *
     * @earlyExecution
     *
     * @param name
     * The name that represents this world clock. Must have a
     * namespace and use only valid identifier characters. (e.g.,
     * 'mypack:my_clock').
     * @throws This function can throw errors.
     *
     * {@link WorldClockInvalidRegistryError}
     *
     * {@link WorldClockRegistrationError}
     *
     * {@link WorldClockReloadNewWorldClockError}
     */
    registerClock(name: string): void;
}
