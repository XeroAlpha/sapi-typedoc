/* IMPORT */ import { Entity } from '../index';

/**
 * 表示效果（例如中毒）的添加到实体前相关的更改信息。
 *
 * Contains information related to changes to an effect - like
 * poison - being added to an entity.
 */
export class EffectAddBeforeEvent {
	private constructor();
	/**
	 * @remarks
	 * 若为 `true`，则表示将取消该事件。
	 *
	 * When set to true will cancel the event.
	 *
	 */
	cancel: boolean;
	/**
	 * @remarks
	 * 效果持续时间。
	 *
	 * Effect duration.
	 *
	 */
	duration: number;
	/**
	 * @remarks
	 * 正在添加的效果类型。
	 *
	 * The type of the effect that is being added.
	 *
	 */
	readonly effectType: string;
	/**
	 * @remarks
	 * 正在添加效果的实体。
	 *
	 * Entity that the effect is being added to.
	 *
	 */
	readonly entity: Entity;
}
