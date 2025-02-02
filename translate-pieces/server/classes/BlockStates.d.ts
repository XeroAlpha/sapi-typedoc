/* IMPORT */ import { Block, BlockStateType } from "../index";

/**
 * 枚举所有的 {@link BlockStateType}。
 *
 * Enumerates all {@link BlockStateType}s.
 */
export class BlockStates {
	private constructor();
	/**
	 * @remarks
	 * 获取特定的方块状态实例。
	 *
	 * Retrieves a specific block state instance.
	 *
	 * @returns
	 * 如果找到则返回 {@link Block} 状态实例。如果未找到该方块状态实例，则返回 undefined。
	 *
	 * Returns the {@link Block} state instance if it is found. If
	 * the block state instance is not found returns undefined.
	 */
	static get(stateName: string): BlockStateType | undefined;
	/**
	 * @remarks
	 * 获取所有可用的方块状态集合。
	 *
	 * Retrieves a set of all available block states.
	 *
	 */
	static getAll(): BlockStateType[];
}
