/* IMPORT */ import { InvalidArgumentError } from '../../common';
/* IMPORT */ import { BlockPermutation, InvalidStructureError, Vector3 } from '../../server';

export class EditorStructure {
    private constructor();
    /**
     * @throws {InvalidStructureError}
     */
    readonly description: string;
    /**
     * @throws {InvalidStructureError}
     */
    readonly displayName: string;
    readonly id: string;
    readonly isValid: boolean;
    /**
     * @throws {InvalidStructureError}
     */
    readonly normalizedOrigin: Vector3;
    /**
     * @throws {InvalidStructureError}
     */
    readonly notes: string;
    /**
     * @throws {InvalidStructureError}
     */
    readonly offset: Vector3;
    /**
     * @throws {InvalidStructureError}
     */
    readonly originalWorldLocation: Vector3;
    /**
     * @throws {InvalidStructureError}
     */
    readonly size: Vector3;
    /**
     * @throws {InvalidStructureError}
     */
    readonly structureFullName: string;
    /**
     * @throws {InvalidStructureError}
     */
    readonly structureName: string;
    /**
     * @throws {InvalidStructureError}
     */
    readonly structureNamespace: string;
    /**
     * @throws {InvalidArgumentError}
     *
     * @throws {InvalidStructureError}
     */
    getBlockPermutation(location: Vector3): BlockPermutation | undefined;
    /**
     * @throws {InvalidArgumentError}
     *
     * @throws {InvalidStructureError}
     */
    getIsWaterlogged(location: Vector3): boolean;
    /**
     * @throws {InvalidStructureError}
     */
    getTags(): string[];
    /**
     * @remarks
     * @worldMutation
     *
     * @param waterlogged
     * Defaults to: false
     * @throws {InvalidArgumentError}
     *
     * @throws {InvalidStructureError}
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
     * @throws {InvalidStructureError}
     */
    setTags(tags: string[]): void;
}
