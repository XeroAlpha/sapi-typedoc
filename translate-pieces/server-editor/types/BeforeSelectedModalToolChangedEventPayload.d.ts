/**
 * Provides an opportunity to cancel a selected-tool change
 * before it is applied. Event handlers may set `cancel` to
 * `true` to prevent the change.
 */
export type BeforeSelectedModalToolChangedEventPayload = {
    readonly previousToolId: string | undefined;
    readonly nextToolId: string | undefined;
    cancel: boolean;
};
