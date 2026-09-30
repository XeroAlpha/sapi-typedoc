/* IMPORT */ import { InputPermissionCategory } from '..';

/**
 * Contains APIs to enable/disable player input permissions.
 */
export class PlayerInputPermissions {
    private constructor();
    /**
     * @remarks
     * Returns true if an input permission is enabled.
     *
     * @worldMutation
     *
     * @throws
     */
    isPermissionCategoryEnabled(permissionCategory: InputPermissionCategory): boolean;
    /**
     * @remarks
     * Enable or disable an input permission. When enabled the
     * input will work, when disabled will not work.
     *
     * @worldMutation
     *
     * @throws
     */
    setPermissionCategory(permissionCategory: InputPermissionCategory, isEnabled: boolean): void;
}
