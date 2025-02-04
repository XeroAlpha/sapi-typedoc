/* IMPORT */ import { BlockPermutation, EntityComponent } from '../index';

/**
 * 定义实体可以在何种方块中呼吸，并赋予它们窒息的能力。
 *
 * Defines what blocks this entity can breathe in and gives
 * them the ability to suffocate.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityBreathableComponent extends EntityComponent {
	private constructor();
	/**
	 * @beta
	 * @remarks
	 * 表示实体当前的空气供应量。
	 *
	 * The current air supply of the entity.
	 *
	 * This property can't be edited in read-only mode.
	 *
	 * @throws
	 * 若空气供应超出范围 [suffocationTime, maxAirSupply]，将抛出错误。
	 *
	 * Will throw an error if the air supply is out of bounds
	 * [suffocationTime, maxAirSupply].
	 */
	airSupply: number;
	/**
	 * @remarks
	 * 若为 `true`，则表示该实体可以在空气中呼吸。
	 *
	 * If true, this entity can breathe in air.
	 *
	 * @throws 使用时可能抛出错误。
	 *
	 * This property can throw when used.
	 */
	readonly breathesAir: boolean;
	/**
	 * @remarks
	 * 若为 `true`，则表示该实体可以在岩浆中呼吸。
	 *
	 * If true, this entity can breathe in lava.
	 *
	 * @throws 使用时可能抛出错误。
	 *
	 * This property can throw when used.
	 */
	readonly breathesLava: boolean;
	/**
	 * @remarks
	 * 若为 `true`，则表示该实体可以在固体方块中呼吸。
	 *
	 * If true, this entity can breathe in solid blocks.
	 *
	 * @throws 使用时可能抛出错误。
	 *
	 * This property can throw when used.
	 */
	readonly breathesSolids: boolean;
	/**
	 * @remarks
	 * 若为 `true`，则表示该实体可以在水中呼吸。
	 *
	 * If true, this entity can breathe in water.
	 *
	 * @throws 使用时可能抛出错误。
	 *
	 * This property can throw when used.
	 */
	readonly breathesWater: boolean;
	/**
	 * @beta
	 * @remarks
	 * 若为 `true`，则表示该实体能够呼吸。
	 *
	 * If true, the entity is able to breathe.
	 *
	 * @throws 使用时可能抛出错误。
	 *
	 * This property can throw when used.
	 */
	readonly canBreathe: boolean;
	/**
	 * @remarks
	 * 若为 `true`，则表示该实体在水中时会有可见的气泡。
	 *
	 * If true, this entity will have visible bubbles while in
	 * water.
	 *
	 * @throws 使用时可能抛出错误。
	 *
	 * This property can throw when used.
	 */
	readonly generatesBubbles: boolean;
	/**
	 * @remarks
	 * 表示恢复到最大呼吸所需的时间（以秒为单位）。
	 *
	 * Time in seconds to recover breath to maximum.
	 *
	 * @throws 使用时可能抛出错误。
	 *
	 * This property can throw when used.
	 */
	readonly inhaleTime: number;
	/**
	 * @remarks
	 * 表示窒息伤害之间的时间间隔（以秒为单位）。
	 *
	 * Time in seconds between suffocation damage.
	 *
	 * @throws 使用时可能抛出错误。
	 *
	 * This property can throw when used.
	 */
	readonly suffocateTime: number;
	/**
	 * @remarks
	 * 表示实体可以屏住呼吸的时间（以秒为单位）。
	 *
	 * Time in seconds the entity can hold its breath.
	 *
	 * @throws 使用时可能抛出错误。
	 *
	 * This property can throw when used.
	 */
	readonly totalSupply: number;
	static readonly componentId = 'minecraft:breathable';
	/**
	 * @remarks
	 * 表示该实体可以呼吸的方块列表，除了分类的方块属性外。
	 *
	 * List of blocks this entity can breathe in, in addition to
	 * the separate properties for classes of blocks.
	 *
	 * @throws 调用此函数可能会抛出错误。
	 *
	 * This function can throw errors.
	 */
	getBreatheBlocks(): BlockPermutation[];
	/**
	 * @remarks
	 * 表示该实体不能呼吸的方块列表。
	 *
	 * List of blocks this entity can't breathe in.
	 *
	 * @throws 调用此函数可能会抛出错误。
	 *
	 * This function can throw errors.
	 */
	getNonBreatheBlocks(): BlockPermutation[];
}
