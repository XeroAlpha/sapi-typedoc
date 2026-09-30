/* IMPORT */ import { Vector3 } from '../../server';
/* IMPORT */ import { InvalidWidgetComponentError, Widget, WidgetComponentType } from '..';

export class WidgetComponentBase {
    private constructor();
    /**
     * @throws {InvalidWidgetComponentError}
     */
    readonly componentType: WidgetComponentType;
    /**
     * @throws {InvalidWidgetComponentError}
     */
    readonly location: Vector3;
    /**
     * @remarks
     * @worldMutation
     *
     */
    lockToSurface: boolean;
    /**
     * @throws {InvalidWidgetComponentError}
     */
    readonly name: string;
    /**
     * @remarks
     * @worldMutation
     *
     */
    offset: Vector3;
    readonly valid: boolean;
    visible: boolean;
    /**
     * @throws {InvalidWidgetComponentError}
     */
    readonly widget: Widget;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws {InvalidWidgetComponentError}
     */
    delete(): void;
}
