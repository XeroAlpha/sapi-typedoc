/* IMPORT */ import { BlockEvent, Entity } from '../index';

/**
 * 描述了实体从特定方块上离开的信息。
 *
 * Contains information regarding an entity stepping off a
 * specific block.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentStepOffEvent extends BlockEvent {
	private constructor();
	/**
	 * @remarks
	 * 表示从方块上离开的实体。
	 *
	 * The entity that stepped off the block.
	 *
	 */
	readonly entity?: Entity;
}
