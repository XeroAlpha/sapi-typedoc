/* IMPORT */ import { Component, Entity, InvalidEntityError } from "../index";

/**
 * 用于下游实体组件的基本类。(所有实体组件的父类。)
 *
 * Base class for downstream entity components.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityComponent extends Component {
	private constructor();
	/**
	 * @remarks
	 * 拥有此组件的实体。若该实体已被移除，则为 undefined。
	 *
	 * The entity that owns this component. The entity will be
	 * undefined if it has been removed.
	 *
	 * @throws 使用时可能会抛出异常。
	 *
	 * @throws This property can throw when used.
	 *
	 * {@link InvalidEntityError}
	 */
	readonly entity: Entity;
}
