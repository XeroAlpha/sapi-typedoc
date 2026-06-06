/**
 * @beta
 * Represents the type of shake to apply to the camera.
 */
export enum CameraShakeType {
    /**
     * @remarks
     * A positional shake that moves the camera along its axes.
     *
     */
    Positional = 'Positional',
    /**
     * @remarks
     * A rotational shake that rotates the camera around its axes.
     *
     */
    Rotational = 'Rotational',
}
