/* IMPORT */ import { BlockEvent, Entity } from '../index';

/**
 * 描述了实体踩在特定方块上的信息。
 *
 * Contains information regarding an entity stepping onto a
 * specific block.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentStepOnEvent extends BlockEvent {
	private constructor();
	/**
	 * @remarks
	 * 表示踩在该方块上的实体。
	 *
	 * The entity that stepped on the block.
	 *
	 */
	readonly entity?: Entity;
}
