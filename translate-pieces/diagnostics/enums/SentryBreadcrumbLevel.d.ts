/**
 * This defines the severity level of the breadcrumb. Levels
 * are used in the UI to emphasize and deemphasize the crumb.
 * The default is info.  See Sentry documentation for more
 * information:
 * https://docs.sentry.io/product/issues/issue-details/breadcrumbs/
 */
export enum SentryBreadcrumbLevel {
    debug = 'debug',
    error = 'error',
    info = 'info',
    warning = 'warning',
}