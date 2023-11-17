/* IMPORT */ import { Block, Direction, ItemStack, Player, Vector3 } from '../index';

/**
 * 表示对方块使用物品时触发的后置事件。描述了物品的信息与使用的目标方块。
 * 该事件会在玩家成功触发与方块的交互后发生。
 * 
 * Contains information related to an item being used on a
 * block. This event fires when an item used by a player
 * successfully triggers a block interaction.
 */
export class ItemUseOnAfterEvent {
    private constructor();
    /**
     * @remarks
     * 物品使用的目标方块。
     * 
     * The block that the item is used on.
     *
     */
    readonly block: Block;
    /**
     * @remarks
     * 物品在方块的哪一面被使用。
     * 
     * The face of the block that an item is being used on.
     *
     */
    readonly blockFace: Direction;
    /**
     * @remarks
     * 物品在方块的面上被使用时，交互点相对于方块西北方底部顶点的坐标。
     * 
     * Location relative to the bottom north-west corner of the
     * block where the item is placed.
     *
     */
    readonly faceLocation: Vector3;
    /**
     * @remarks
     * 对方块使用物品时物品所在的物品堆叠。
     * 
     * The impacted item stack that is being used on a block.
     *
     */
    readonly itemStack: ItemStack;
    /**
     * @remarks
     * 该事件的触发来源实体。
     * 
     * Returns the source entity that triggered this item event.
     *
     */
    readonly source: Player;
}