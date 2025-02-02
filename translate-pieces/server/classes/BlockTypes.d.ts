/* IMPORT */ import { BlockType } from '../index';

/**
 * 表示当前世界可用的 Minecraft 方块类型目录。
 * 
 * Contains a catalog of Minecraft Block Types that are
 * available in this world.
 */
export class BlockTypes {
    private constructor();
    /**
     * @remarks
     * 返回指定标识符对应的 BlockType 对象。
     * 
     * Returns a BlockType object for the specified identifier.
     *
     * @param typeName
     * 方块类型的标识符。应遵循 namespace:id 模式，例如 minecraft:dirt。
     * 
     * Identifier of the block type. Should follow a namespace:id
     * pattern, such as minecraft:dirt.
     * @returns
     * BlockType 对象，如果当前世界中该方块类型不可用，则返回 undefined。
     * 
     * BlockType object, or undefined if the block type is not
     * available within this world.
     */
    static get(typeName: string): BlockType | undefined;
    /**
     * @remarks
     * 返回所有可用方块类型的集合。
     * 
     * Returns a collection of all available block types.
     *
     */
    static getAll(): BlockType[];
}