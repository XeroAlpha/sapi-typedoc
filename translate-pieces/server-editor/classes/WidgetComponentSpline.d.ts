/* IMPORT */ import { Vector3 } from '../../server';
/* IMPORT */ import { InvalidWidgetComponentError, InvalidWidgetError, SplineType, Widget, WidgetComponentBase } from '..';

export class WidgetComponentSpline extends WidgetComponentBase {
    private constructor();
    /**
     * @remarks
     * @worldMutation
     *
     */
    splineType: SplineType;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws {Error}
     *
     * @throws {InvalidWidgetComponentError}
     *
     * @throws {InvalidWidgetError}
     */
    getControlPoints(): Widget[];
    /**
     * @remarks
     * @worldMutation
     *
     * @throws
     */
    getInterpolatedPoints(maxPointsPerControlSegment?: number): Vector3[];
    /**
     * @remarks
     * @worldMutation
     *
     * @throws {InvalidWidgetComponentError}
     *
     * @throws {InvalidWidgetError}
     */
    setControlPoints(widgetList: Widget[]): void;
}
