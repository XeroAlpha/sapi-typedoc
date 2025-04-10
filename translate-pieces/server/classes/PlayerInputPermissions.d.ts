/* IMPORT */ import { InputPermissionCategory } from '../index';

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
     * @throws This function can throw errors.
     */
    isPermissionCategoryEnabled(permissionCategory: InputPermissionCategory): boolean;
    /**
     * @remarks
     * Enable or disable an input permission. When enabled the
     * input will work, when disabled will not work.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    setPermissionCategory(permissionCategory: InputPermissionCategory, isEnabled: boolean): void;
}