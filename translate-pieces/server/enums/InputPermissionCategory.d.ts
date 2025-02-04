/**
 * Input permission categories. Used by {@link
 * PlayerInputPermissionCategoryChangeAfterEvent} to specify
 * which category was changed and {@link
 * PlayerInputPermissions} to get or set permissions.
 * 
 * 输入权限类别。由 {@link PlayerInputPermissionCategoryChangeAfterEvent} 用于指定哪个类别被更改，并由 {@link PlayerInputPermissions} 用于获取或设置权限。
 */
export enum InputPermissionCategory {
    /**
     * @remarks
     * Player input relating to camera movement.
     * 
     * 与相机移动相关的玩家输入。
     */
    Camera = 1,
    /**
     * @remarks
     * Player input relating to all player movement. Disabling this
     * is equivalent to disabling jump, sneak, lateral movement,
     * mount, and dismount.
     * 
     * 与所有玩家移动相关的输入。禁用此项相当于禁用跳跃、潜行、横向移动、骑乘和下马。
     */
    Movement = 2,
    /**
     * @rc
     * @remarks
     * Player input for moving laterally in the world. This would
     * be WASD on a keyboard or the movement joystick on gamepad or
     * touch.
     * 
     * 玩家在世界中横向移动的输入。这在键盘上是WASD，或游戏手柄或触摸设备上的移动摇杆。
     */
    LateralMovement = 4,
    /**
     * @rc
     * @remarks
     * Player input relating to sneak. This also affects flying
     * down.
     * 
     * 与潜行相关的玩家输入。这也影响向下飞行。
     */
    Sneak = 5,
    /**
     * @rc
     * @remarks
     * Player input relating to jumping. This also affects flying
     * up.
     * 
     * 与跳跃相关的玩家输入。这也影响向上飞行。
     */
    Jump = 6,
    /**
     * @rc
     * @remarks
     * Player input relating to mounting vehicles.
     * 
     * 与骑乘载具相关的玩家输入。
     */
    Mount = 7,
    /**
     * @rc
     * @remarks
     * Player input relating to dismounting. When disabled, the
     * player can still dismount vehicles by other means, for
     * example on horses players can still jump off and in boats
     * players can go into another boat.
     * 
     * 与下马相关的玩家输入。禁用时，玩家仍可通过其他方式下马，例如在马上玩家仍可以跳下，而在船上玩家可以进入另一艘船。
     */
    Dismount = 8,
    /**
     * @rc
     * @remarks
     * Player input relating to moving the player forward.
     * 
     * 与玩家向前移动相关的输入。
     */
    MoveForward = 9,
    /**
     * @rc
     * @remarks
     * Player input relating to moving the player backward.
     * 
     * 与玩家向后移动相关的输入。
     */
    MoveBackward = 10,
    /**
     * @rc
     * @remarks
     * Player input relating to moving the player left.
     * 
     * 与玩家向左移动相关的输入。
     */
    MoveLeft = 11,
    /**
     * @rc
     * @remarks
     * Player input relating to moving the player right.
     * 
     * 与玩家向右移动相关的输入。
     */
    MoveRight = 12,
}