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
     * @throws This function can throw errors.
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
     * @throws This function can throw errors.
     */
    getPlane(planeId: string): GuidePlane | undefined;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    getPlanes(): GuidePlane[];
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    removePlane(planeId: string): void;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    setPlaneColors(planeId: string, outlineColor: RGBA, fillColor: RGBA): void;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    setPlaneNormal(planeId: string, normal: Vector3): void;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    setPlaneOrigin(planeId: string, origin: Vector3): void;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    setPlaneVisibility(planeId: string, visible: boolean): void;
}
