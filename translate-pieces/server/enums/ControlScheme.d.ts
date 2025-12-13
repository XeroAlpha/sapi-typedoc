/**
 * Control Scheme types which define how the player moves in
 * response to player inputs.
 * See the following page for more details on control schemes:
 * https://learn.microsoft.com/en-us/minecraft/creator/documents/controlschemes
 */
export enum ControlScheme {
    CameraRelative = 'CameraRelative',
    CameraRelativeStrafe = 'CameraRelativeStrafe',
    LockedPlayerRelativeStrafe = 'LockedPlayerRelativeStrafe',
    PlayerRelative = 'PlayerRelative',
    PlayerRelativeStrafe = 'PlayerRelativeStrafe',
}
