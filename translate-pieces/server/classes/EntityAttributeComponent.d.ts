/* IMPORT */ import { EntityComponent } from "../index";

/**
 * 这是一个用于实体组件的基础抽象类，主要用于处理数值类型
 * 并且可以定义最小值、最大值和默认值。
 *
 * This is a base abstract class for any entity component that
 * centers around a number and can have a minimum, maximum, and
 * default defined value.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityAttributeComponent extends EntityComponent {
	private constructor();
	/**
	 * @remarks
	 * 此实例中该属性的当前值。
	 *
	 * Current value of this attribute for this instance.
	 *
	 * @throws 使用时可能会抛出异常。
	 *
	 * @throws This property can throw when used.
	 */
	readonly currentValue: number;
	/**
	 * @remarks
	 * 返回该属性定义的默认值。
	 *
	 * Returns the default defined value for this attribute.
	 *
	 * @throws 使用时可能会抛出异常。
	 *
	 * @throws This property can throw when used.
	 */
	readonly defaultValue: number;
	/**
	 * @remarks
	 * 返回在任何其他环境组件或因素影响下，该属性的有效最大值。
	 *
	 * Returns the effective max of this attribute given any other
	 * ambient components or factors.
	 *
	 * @throws 使用时可能会抛出异常。
	 *
	 * @throws This property can throw when used.
	 */
	readonly effectiveMax: number;
	/**
	 * @remarks
	 * 返回在任何其他环境组件或因素影响下，该属性的有效最小值。
	 *
	 * Returns the effective min of this attribute given any other
	 * ambient components or factors.
	 *
	 * @throws 使用时可能会抛出异常。
	 *
	 * @throws This property can throw when used.
	 */
	readonly effectiveMin: number;
	/**
	 * @remarks
	 * 将该属性的当前值重置为定义的默认值。
	 *
	 * Resets the current value of this attribute to the defined
	 * default value.
	 *
	 * This function can't be called in read-only mode.
	 *
	 * @throws 此函数可能会抛出错误。
	 *
	 * @throws This function can throw errors.
	 */
	resetToDefaultValue(): void;
	/**
	 * @remarks
	 * 将该属性的当前值重置为定义的最大值。
	 *
	 * Resets the current value of this attribute to the maximum
	 * defined value.
	 *
	 * This function can't be called in read-only mode.
	 *
	 * @throws 此函数可能会抛出错误。
	 *
	 * @throws This function can throw errors.
	 */
	resetToMaxValue(): void;
	/**
	 * @remarks
	 * 将该属性的当前值重置为定义的最小值。
	 *
	 * Resets the current value of this attribute to the minimum
	 * defined value.
	 *
	 * This function can't be called in read-only mode.
	 *
	 * @throws 此函数可能会抛出错误。
	 *
	 * @throws This function can throw errors.
	 */
	resetToMinValue(): void;
	/**
	 * @remarks
	 * 设置该属性的当前值。提供的值将被限制在该属性的范围内。
	 *
	 * Sets the current value of this attribute. The provided value
	 * will be clamped to the range of this attribute.
	 *
	 * This function can't be called in read-only mode.
	 *
	 * @throws 此函数可能会抛出错误。
	 *
	 * @throws This function can throw errors.
	 */
	setCurrentValue(value: number): boolean;
}
