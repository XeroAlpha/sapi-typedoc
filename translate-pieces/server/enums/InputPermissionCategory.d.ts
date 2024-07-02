/**
 * @rc
 * Input permission categories. Used by
 * @minecraft/server.PlayerInputPermissionCategoryChangeAfterEvent
 * to specify which category was changed.
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
     * Player input relating to movement.
     *
     */
    Movement = 2,
}