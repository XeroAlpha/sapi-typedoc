/* IMPORT */ import { InvalidWidgetComponentError, InvalidWidgetError, SplineType, Widget, WidgetComponentBase, minecraftserver } from '../index';

export class WidgetComponentSpline extends WidgetComponentBase {
    private constructor();
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     *
     */
    splineType: SplineType;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link InvalidWidgetComponentError}
     *
     * {@link InvalidWidgetError}
     */
    getControlPoints(): Widget[];
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link InvalidWidgetComponentError}
     *
     * {@link InvalidWidgetError}
     */
    getInterpolatedPoints(maxPointsPerControlSegment?: number): minecraftserver.Vector3[];
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidWidgetComponentError}
     *
     * {@link InvalidWidgetError}
     */
    setControlPoints(widgetList: Widget[]): void;
}