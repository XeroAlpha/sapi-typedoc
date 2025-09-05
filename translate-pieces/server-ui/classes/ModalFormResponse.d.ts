/* IMPORT */ import { FormResponse } from '..';

/**
 * Returns data about player responses to a modal form.
 * @seeExample showBasicModalForm.ts
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ModalFormResponse extends FormResponse {
    private constructor();
    /**
     * @remarks
     * An ordered set of values based on the order of controls
     * specified by ModalFormData.
     *
     */
    readonly formValues?: (boolean | number | string | undefined)[];
}
