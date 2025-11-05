/* IMPORT */ import { Block, BlockPermutation, BlockType, Entity, EntityType, InvalidEntityError, ItemStack, LocationInUnloadedChunkError, LocationOutOfWorldBoundariesError, LootTable, UnloadedChunksError } from '..';

/**
 * Manager for Loot Table related APIs. Allows for generation
 * of drops from blocks and entities according to their loot
 * tables.
 */
export class LootTableManager {
    private constructor();
    /**
     * @remarks
     * Generates loot from a given block as if it had been mined.
     *
     * @param block
     * The block to generate loot from.
     * @param tool
     * Optional. The tool to use in the looting operation.
     * @returns
     * An array of item stacks dropped from the loot drop event.
     * Can be empty if no loot dropped, or undefined if the
     * provided tool is insufficient to mine the block.
     * @throws
     * Throws if the block is in an unloaded chunk, or if the
     * block's position is outside of world bounds.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     *
     * {@link UnloadedChunksError}
     */
    generateLootFromBlock(block: Block, tool?: ItemStack): ItemStack[] | undefined;
    /**
     * @remarks
     * Generates loot from a given block permutation as if it had
     * been mined.
     *
     * @param tool
     * Optional. The tool to use in the looting operation.
     * @returns
     * An array of item stacks dropped from the loot drop event.
     * Can be empty if no loot dropped, or undefined if the
     * provided tool is insufficient to mine the block.
     */
    generateLootFromBlockPermutation(blockPermutation: BlockPermutation, tool?: ItemStack): ItemStack[] | undefined;
    /**
     * @remarks
     * Generates loot from a given block type as if it had been
     * mined.
     *
     * @param tool
     * Optional. The tool to use in the looting operation.
     * @returns
     * An array of item stacks dropped from the loot drop event.
     * Can be empty if no loot dropped, or undefined if the
     * provided tool is insufficient to mine the block.
     */
    generateLootFromBlockType(scriptBlockType: BlockType, tool?: ItemStack): ItemStack[] | undefined;
    /**
     * @remarks
     * Generates loot from given a entity as if it had been killed.
     *
     * @param tool
     * Optional. The tool to use in the looting operation.
     * @returns
     * An array of item stacks dropped from the loot drop event.
     * Can be empty if no loot dropped, or undefined if the entity
     * was invalid.
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    generateLootFromEntity(entity: Entity, tool?: ItemStack): ItemStack[] | undefined;
    /**
     * @remarks
     * Generates loot from given a entity type as if it had been
     * killed.
     *
     * @param tool
     * Optional. The tool to use in the looting operation.
     * @returns
     * An array of item stacks dropped from the loot drop event.
     * Can be empty if no loot dropped.
     */
    generateLootFromEntityType(entityType: EntityType, tool?: ItemStack): ItemStack[] | undefined;
    /**
     * @rc
     * @remarks
     * Generates loot from a given LootTable.
     *
     * @param tool
     * Optional. The tool to use in the looting operation.
     * @returns
     * An array of item stacks dropped from the loot drop event.
     * Can be empty if no loot dropped, or undefined if the
     * provided tool is insufficient to mine the block.
     */
    generateLootFromTable(lootTable: LootTable, tool?: ItemStack): ItemStack[] | undefined;
    /**
     * @rc
     * @remarks
     * Retrieves a single loot table from the level's current
     * registry.
     *
     * @param path
     * Path to the table to retrieve. Does not include file
     * extension, or 'loot_tables/' folder prefix. Example:
     * `entities/creeper`.
     * @returns
     * Returns a LootTable if one is found, or `undefined` if the
     * provided path does not correspond to an existing loot table.
     */
    getLootTable(path: string): LootTable | undefined;
}
