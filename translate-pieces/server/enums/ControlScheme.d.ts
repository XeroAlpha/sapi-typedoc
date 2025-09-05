/**
 * @beta
 * Control Scheme types which define how the player moves in
 * response to player inputs.
 */
export enum ControlScheme {
    CameraRelative = 'CameraRelative',
    CameraRelativeStrafe = 'CameraRelativeStrafe',
    LockedPlayerRelativeStrafe = 'LockedPlayerRelativeStrafe',
    PlayerRelative = 'PlayerRelative',
    PlayerRelativeStrafe = 'PlayerRelativeStrafe',
}
