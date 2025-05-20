/* IMPORT */ import { minecraftserveradmin } from '../index';

/**
 * Describes options for configuring Sentry for this scripting
 * module.
 */
export interface SentryOptions {
    /**
     * @remarks
     * When set to true, additional content logging from the Sentry
     * system will be enabled.  Defaults to false.
     *
     */
    debug?: boolean;
    /**
     * @remarks
     * The fully qualified DSN for a Sentry project.  See Sentry
     * documentation for more information:
     * https://docs.sentry.io/concepts/key-terms/dsn-explainer/
     *
     */
    dsn: minecraftserveradmin.SecretString | string;
    /**
     * @remarks
     * The maximum number of breadcrumbs (submitted via {@link
     * Sentry.addBreadcrumb}) to store and report per error event
     * to Sentry. Default is 20, supported values range from 0 (no
     * breadcrumbs) to 100.
     *
     */
    maxBreadcrumbs?: number;
    /**
     * @remarks
     * A number between 0 and 1 that indicates the percentage of
     * events that should be sent to Sentry. For example, a value
     * of 0.5 means that 50% of events will be sent. Default is 1
     * (100% of events). 0 means no events will be sent.
     *
     */
    sampleRate?: number;
}