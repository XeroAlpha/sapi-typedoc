/**
 * Contains properties for enabling/disabling player input
 * permissions.
 */
export class PlayerInputPermissions {
    private constructor();
    /**
     * @remarks
     * Camera input permissions for the player. If set to true,
     * input relating to camera movement is enabled for the player.
     *
     */
    cameraEnabled: boolean;
    /**
     * @remarks
     * Movement input permissions for the player. If set to true
     * input relating to movement is enabled for the player.
     *
     */
    movementEnabled: boolean;
}