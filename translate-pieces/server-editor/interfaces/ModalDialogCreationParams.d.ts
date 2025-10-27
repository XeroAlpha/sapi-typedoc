/* IMPORT */ import { LocalizedString } from '..';

/**
 * Represents parameters to create a modal dialog
 */
export interface ModalDialogCreationParams {
    /**
     * @remarks
     * Determines if the panel can be dismissed by the user
     * actions. If undefined, it will be true.
     *
     */
    canUserDismiss?: boolean;
    /**
     * @remarks
     * Panel height for the dialog
     *
     */
    height?: number;
    /**
     * @remarks
     * Callback to notify changes in active request
     *
     */
    onActiveRequestChange?: (requestId: string | undefined) => void;
    /**
     * @remarks
     * Dialog title
     *
     */
    title?: LocalizedString;
    /**
     * @remarks
     * Optional user defined unique identifier
     *
     */
    uniqueId?: string;
    /**
     * @remarks
     * Panel width for the dialog
     *
     */
    width?: number;
}
