/* IMPORT */ import { minecraftcommon, minecraftserver } from '../index';

export class EditorStructure {
    private constructor();
    /**
     * @throws This property can throw when used.
     *
     * {@link minecraftserver.InvalidStructureError}
     */
    readonly description: string;
    /**
     * @throws This property can throw when used.
     *
     * {@link minecraftserver.InvalidStructureError}
     */
    readonly displayName: string;
    readonly id: string;
    readonly isValid: boolean;
    /**
     * @throws This property can throw when used.
     *
     * {@link minecraftserver.InvalidStructureError}
     */
    readonly normalizedOrigin: minecraftserver.Vector3;
    /**
     * @throws This property can throw when used.
     *
     * {@link minecraftserver.InvalidStructureError}
     */
    readonly notes: string;
    /**
     * @throws This property can throw when used.
     *
     * {@link minecraftserver.InvalidStructureError}
     */
    readonly offset: minecraftserver.Vector3;
    /**
     * @throws This property can throw when used.
     *
     * {@link minecraftserver.InvalidStructureError}
     */
    readonly originalWorldLocation: minecraftserver.Vector3;
    /**
     * @throws This property can throw when used.
     *
     * {@link minecraftserver.InvalidStructureError}
     */
    readonly size: minecraftserver.Vector3;
    /**
     * @throws This property can throw when used.
     *
     * {@link minecraftserver.InvalidStructureError}
     */
    readonly structureFullName: string;
    /**
     * @throws This property can throw when used.
     *
     * {@link minecraftserver.InvalidStructureError}
     */
    readonly structureName: string;
    /**
     * @throws This property can throw when used.
     *
     * {@link minecraftserver.InvalidStructureError}
     */
    readonly structureNamespace: string;
    /**
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link minecraftserver.InvalidStructureError}
     */
    getBlockPermutation(
        location: minecraftserver.Vector3,
    ): minecraftserver.BlockPermutation | undefined;
    /**
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link minecraftserver.InvalidStructureError}
     */
    getIsWaterlogged(location: minecraftserver.Vector3): boolean;
    /**
     * @throws This function can throw errors.
     *
     * {@link minecraftserver.InvalidStructureError}
     */
    getTags(): string[];
    /**
     * @remarks
     * @worldMutation
     *
     * @param waterlogged
     * Defaults to: false
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link minecraftserver.InvalidStructureError}
     */
    setBlockPermutation(
        location: minecraftserver.Vector3,
        blockPermutation: minecraftserver.BlockPermutation,
        waterlogged?: boolean,
    ): void;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftserver.InvalidStructureError}
     */
    setTags(tags: string[]): void;
}