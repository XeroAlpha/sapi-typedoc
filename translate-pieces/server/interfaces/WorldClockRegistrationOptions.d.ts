/* IMPORT */ import { TimeMarkerOptions } from '..';

/**
 * @beta
 * Contains additional options for registering world clocks.
 */
export interface WorldClockRegistrationOptions {
    /**
     * @remarks
     * Set of options to include time markers during world clock
     * registration.
     *
     */
    timeMarkers?: TimeMarkerOptions[];
}
