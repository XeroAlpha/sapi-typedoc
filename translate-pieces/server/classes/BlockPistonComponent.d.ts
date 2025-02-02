/* IMPORT */ import { Block, BlockComponent, BlockPistonState, Vector3 } from "../index";

/**
 * 当存在时，此方块具有类似活塞的行为。表示
 * 发现方块活塞状态的附加属性。
 *
 * When present, this block has piston-like behavior. Contains
 * additional properties for discovering block piston state.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockPistonComponent extends BlockComponent {
	private constructor();
	/**
	 * @remarks
	 * 活塞是否处于扩展或收缩的过程中。
	 *
	 * Whether the piston is in the process of expanding or
	 * retracting.
	 *
	 * @throws This property can throw when used.
	 * 此属性在使用时可能会抛出异常。
	 */
	readonly isMoving: boolean;
	/**
	 * @remarks
	 * 活塞的当前状态。
	 *
	 * The current state of the piston.
	 *
	 * @throws This property can throw when used.
	 * 此属性在使用时可能会抛出异常。
	 */
	readonly state: BlockPistonState;
	static readonly componentId = "minecraft:piston";
	/**
	 * @remarks
	 * 获取与此活塞连接的一组方块。
	 *
	 * Retrieves a set of blocks that this piston is connected
	 * with.
	 *
	 * @throws This function can throw errors.
	 * 此函数可能会抛出错误。
	 */
	getAttachedBlocks(): Block[];
	/**
	 * @remarks
	 * 获取与此活塞连接的一组方块位置。
	 *
	 * Retrieves a set of block locations that this piston is
	 * connected with.
	 *
	 * @throws This function can throw errors.
	 * 此函数可能会抛出错误。
	 */
	getAttachedBlocksLocations(): Vector3[];
}
