/* IMPORT */ import { InvalidWidgetComponentError, WidgetComponentBase } from '../index';

export class WidgetComponentEntity extends WidgetComponentBase {
    private constructor();
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     *
     */
    clickable: boolean;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidWidgetComponentError}
     */
    playAnimation(animationName: string): void;
}