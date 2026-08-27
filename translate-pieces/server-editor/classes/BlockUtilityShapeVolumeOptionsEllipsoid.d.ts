export class BlockUtilityShapeVolumeOptionsEllipsoid {
    /**
     * @param width
     * Bounds: [1, 1024]
     * @param height
     * Bounds: [1, 1024]
     * @param depth
     * Bounds: [1, 1024]
     * @param rotX
     * Defaults to: 0
     * @param rotY
     * Defaults to: 0
     * @param rotZ
     * Defaults to: 0
     * @param isHollow
     * Defaults to: false
     * @param thickness
     * Defaults to: 1
     * Bounds: [1, 32]
     */
    constructor(
        width: number,
        height: number,
        depth: number,
        rotX?: number,
        rotY?: number,
        rotZ?: number,
        isHollow?: boolean,
        thickness?: number,
    );
}
