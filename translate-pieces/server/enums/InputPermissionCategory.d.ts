/**
 * Input permission categories. Used by {@link
 * PlayerInputPermissionCategoryChangeAfterEvent} to specify
 * which category was changed and {@link
 * PlayerInputPermissions} to get or set permissions.
 */
export enum InputPermissionCategory {
    /**
     * @remarks
     * Player input relating to camera movement.
     *
     */
    Camera = 1,
    /**
     * @remarks
     * Player input relating to all player movement. Disabling this
     * is equivalent to disabling jump, sneak, lateral movement,
     * mount, and dismount.
     *
     */
    Movement = 2,
    /**
     * @beta
     * @remarks
     * Player input for moving laterally in the world. This would
     * be WASD on a keyboard or the movement joystick on gamepad or
     * touch.
     *
     */
    LateralMovement = 4,
    /**
     * @beta
     * @remarks
     * Player input relating to sneak. This also affects flying
     * down.
     *
     */
    Sneak = 5,
    /**
     * @beta
     * @remarks
     * Player input relating to jumping. This also affects flying
     * up.
     *
     */
    Jump = 6,
    /**
     * @beta
     * @remarks
     * Player input relating to mounting vehicles.
     *
     */
    Mount = 7,
    /**
     * @beta
     * @remarks
     * Player input relating to dismounting. When disabled, the
     * player can still dismount vehicles by other means, for
     * example on horses players can still jump off and in boats
     * players can go into another boat.
     *
     */
    Dismount = 8,
    /**
     * @beta
     * @remarks
     * Player input relating to moving the player forward.
     *
     */
    MoveForward = 9,
    /**
     * @beta
     * @remarks
     * Player input relating to moving the player backward.
     *
     */
    MoveBackward = 10,
    /**
     * @beta
     * @remarks
     * Player input relating to moving the player left.
     *
     */
    MoveLeft = 11,
    /**
     * @beta
     * @remarks
     * Player input relating to moving the player right.
     *
     */
    MoveRight = 12,
}