/**
 * An enum representing the reasons why a form was canceled.
 */
export enum FormCancelationReason {
    /**
     * @remarks
     * The form was canceled because the player was busy with
     * another UI interaction.
     *
     */
    UserBusy = 'UserBusy',
    /**
     * @remarks
     * The form was canceled because the player closed it.
     *
     */
    UserClosed = 'UserClosed',
}
