/* IMPORT */ import { SentryEventLevel } from '../index';

/**
 * Context relating to a captured exception that should be sent
 * to Sentry.
 */
export interface SentryCaptureContext {
    /**
     * @remarks
     * Additional data that should be sent with the exception.
     *
     */
    extraData?: Record<string, boolean | number | string>;
    /**
     * @remarks
     * The indicated level of severity of the captured exception.
     *
     */
    level?: SentryEventLevel;
    /**
     * @remarks
     * Additional tags that should be sent with the exception.
     *
     */
    tags?: Record<string, string>;
}