/* IMPORT */ import { InvalidWidgetComponentError, WidgetComponentBase } from '..';

export class WidgetComponentEntity extends WidgetComponentBase {
    private constructor();
    /**
     * @remarks
     * @worldMutation
     *
     */
    clickable: boolean;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws {InvalidWidgetComponentError}
     */
    playAnimation(animationName: string): void;
}
