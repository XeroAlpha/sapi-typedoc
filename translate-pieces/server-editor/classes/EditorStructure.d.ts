/* IMPORT */ import { InvalidArgumentError } from '../../common';
/* IMPORT */ import { BlockPermutation, InvalidStructureError, Vector3 } from '../../server';

export class EditorStructure {
    private constructor();
    /**
     * @throws This property can throw when used.
     *
     * {@link InvalidStructureError}
     */
    readonly description: string;
    /**
     * @throws This property can throw when used.
     *
     * {@link InvalidStructureError}
     */
    readonly displayName: string;
    readonly id: string;
    readonly isValid: boolean;
    /**
     * @throws This property can throw when used.
     *
     * {@link InvalidStructureError}
     */
    readonly normalizedOrigin: Vector3;
    /**
     * @throws This property can throw when used.
     *
     * {@link InvalidStructureError}
     */
    readonly notes: string;
    /**
     * @throws This property can throw when used.
     *
     * {@link InvalidStructureError}
     */
    readonly offset: Vector3;
    /**
     * @throws This property can throw when used.
     *
     * {@link InvalidStructureError}
     */
    readonly originalWorldLocation: Vector3;
    /**
     * @throws This property can throw when used.
     *
     * {@link InvalidStructureError}
     */
    readonly size: Vector3;
    /**
     * @throws This property can throw when used.
     *
     * {@link InvalidStructureError}
     */
    readonly structureFullName: string;
    /**
     * @throws This property can throw when used.
     *
     * {@link InvalidStructureError}
     */
    readonly structureName: string;
    /**
     * @throws This property can throw when used.
     *
     * {@link InvalidStructureError}
     */
    readonly structureNamespace: string;
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     *
     * {@link InvalidStructureError}
     */
    getBlockPermutation(location: Vector3): BlockPermutation | undefined;
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     *
     * {@link InvalidStructureError}
     */
    getIsWaterlogged(location: Vector3): boolean;
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidStructureError}
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
     * {@link InvalidArgumentError}
     *
     * {@link InvalidStructureError}
     */
    setBlockPermutation(
        location: Vector3,
        blockPermutation: BlockPermutation,
        waterlogged?: boolean,
    ): void;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidStructureError}
     */
    setTags(tags: string[]): void;
}
