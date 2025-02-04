/* IMPORT */ import { EntityComponent } from '../index';

/**
 * 设置实体距离地面的偏移量。
 *
 * Sets the offset from the ground that the entity is actually at.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityGroundOffsetComponent extends EntityComponent {
	private constructor();
	/**
	 * @remarks
	 * 此属性表示当前地面偏移量的值。注意，该值实际上是只读的；设置地面偏移量的值不会对相关实体产生影响。
	 *
	 * Value of this particular ground offset. Note that this value
	 * is effectively read only; setting the ground offset value
	 * will not have an impact on the related entity.
	 *
	 * This property can't be edited in read-only mode.
	 *
	 */
	value: number;
	static readonly componentId = 'minecraft:ground_offset';
}
