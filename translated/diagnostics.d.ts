// Type definitions for Minecraft Bedrock Edition script APIs
// Project: https://docs.microsoft.com/minecraft/creator/
// Definitions by: Jake Shirley <https://github.com/JakeShirley>
//                 Mike Ammerlaan <https://github.com/mammerla>

/* *****************************************************************************
   Copyright (c) Microsoft Corporation.
   ***************************************************************************** */
/**
 * @beta
 * @packageDocumentation
 * Contains diagnostics functionality for discovering and
 * diagnosing issues with content.
 *
 * Manifest Details
 * ```json
 * {
 *   "module_name": "@minecraft/diagnostics",
 *   "version": "1.0.0-beta"
 * }
 * ```
 *
 */
import * as minecraftcommon from '@minecraft/common';
import * as minecraftserveradmin from '@minecraft/server-admin';
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

/**
 * A class that allows hooking up reporting to Sentry.  See
 * https://sentry.io/ for more information.
 */
export class Sentry {
    private constructor();
    /**
     * @remarks
     * Adds a breadcrumb to the next Sentry error reported.  This
     * can be useful for understanding a "trail" of events leading
     * up to an error.  See Sentry documentation for more details:
     * https://docs.sentry.io/product/issues/issue-details/breadcrumbs/
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param message
     * The message to add to the breadcrumb.
     * @param category
     * The category of the breadcrumb.
     * @throws This function can throw errors.
     *
     * {@link SentryUninitializedError}
     */
    addBreadcrumb(level: SentryBreadcrumbLevel, message: string, category?: string): void;
    /**
     * @remarks
     * Adds a tag to the Sentry session.  See Sentry documentation
     * for more details:
     * https://docs.sentry.io/platforms/javascript/enriching-events/tags/
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @throws This function can throw errors.
     *
     * {@link SentryUninitializedError}
     */
    addTag(name: string, value: string): void;
    /**
     * @remarks
     * Gets the list of all session tags.  See Sentry documentation
     * for more details:
     * https://docs.sentry.io/platforms/javascript/enriching-events/tags/
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @throws This function can throw errors.
     *
     * {@link SentryUninitializedError}
     */
    getTags(): Record<string, string>;
    /**
     * @remarks
     * Initializes Sentry for use.  This must be successfully
     * called before any other Sentry functions are called.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link SentryAlreadyInitializedError}
     */
    init(options: SentryOptions): void;
    /**
     * @remarks
     * Removes a tag to the Sentry session.  See Sentry
     * documentation for more details:
     * https://docs.sentry.io/platforms/javascript/enriching-events/tags/
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @throws This function can throw errors.
     *
     * {@link SentryUninitializedError}
     */
    removeTag(name: string): void;
}

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

// @ts-ignore Class inheritance allowed for native defined classes
export class SentryAlreadyInitializedError extends Error {
    private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
export class SentryUninitializedError extends Error {
    private constructor();
}

/**
 * @remarks
 * A class that allows hooking up reporting to Sentry.  See
 * https://sentry.io/ for more information.
 *
 */
export const sentry: Sentry;
