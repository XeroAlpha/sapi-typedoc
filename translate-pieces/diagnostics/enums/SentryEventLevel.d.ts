/**
 * This defines the severity level of an error, event,
 * exception, or breadcrumb. Levels are used in the UI to
 * emphasize and deemphasize breadcrumbs. See Sentry
 * documentation for more information:
 * https://docs.sentry.io/product/issues/issue-details/breadcrumbs/
 */
export enum SentryEventLevel {
    debug = 'debug',
    error = 'error',
    fatal = 'fatal',
    info = 'info',
    warning = 'warning',
}
