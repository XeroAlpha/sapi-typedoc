/**
 * @beta
 * The reason why a data driven screen (i.e. MessageBox or
 * CustomForm) was closed.
 */
export declare enum DataDrivenScreenClosedReason {
    /**
     * @remarks
     * Closed because it was programmatically told by the server to
     * close using `form.close()`.
     *
     */
    ServerClose = 'ServerClose',
    /**
     * @remarks
     * Closed because the user was busy (i.e. other UI was open).
     *
     */
    UserBusy = 'UserBusy',
    /**
     * @remarks
     * Closed because the client closed the form. This can be with
     * a close button on the form (i.e. the X in the corner of a
     * message box, the 'Close' button on a custom form, or either
     * button in the message box)
     *
     */
    UserClose = 'UserClose',
}
