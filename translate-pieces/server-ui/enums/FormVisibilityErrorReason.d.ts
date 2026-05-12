/**
 * @beta
 * The reason why a form visibility operation failed.
 */
export enum FormVisibilityErrorReason {
    /**
     * @remarks
     * The operation failed because the form is already being shown
     * to the player.
     *
     */
    AlreadyShowing = 'AlreadyShowing',
    /**
     * @remarks
     * The operation failed because the form is not currently being
     * shown to the player.
     *
     */
    NotShowing = 'NotShowing',
}
