/* IMPORT */ import { RGBA, Vector3 } from '../../server';
/* IMPORT */ import { GuidePlane } from '..';

export class GuidePlaneManager {
    private constructor();
    /**
     * @remarks
     * @worldMutation
     *
     */
    allPlanesVisible: boolean;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws
     */
    addPlane(
        origin: Vector3,
        normal: Vector3,
        visible: boolean,
        outlineColor: RGBA,
        fillColor: RGBA,
    ): string;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws
     */
    getPlane(planeId: string): GuidePlane | undefined;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws
     */
    getPlanes(): GuidePlane[];
    /**
     * @remarks
     * @worldMutation
     *
     * @throws
     */
    removePlane(planeId: string): void;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws
     */
    setPlaneColors(planeId: string, outlineColor: RGBA, fillColor: RGBA): void;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws
     */
    setPlaneNormal(planeId: string, normal: Vector3): void;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws
     */
    setPlaneOrigin(planeId: string, origin: Vector3): void;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws
     */
    setPlaneVisibility(planeId: string, visible: boolean): void;
}
