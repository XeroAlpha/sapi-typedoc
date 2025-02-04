/**
 * Base class for downstream Component implementations.
 */
export class Component {
	private constructor();
	/**
	 * @beta
	 * @remarks
	 * 返回组件是否有效。若组件的拥有者有效，并且组件需要的任何
	 * 额外验证也通过，则该组件被认为是有效的。
	 *
	 * Returns whether the component is valid. A component is
	 * considered valid if its owner is valid, in addition to any
	 * addition to any additional validation required by the
	 * component.
	 *
	 */
	readonly isValid: boolean;
	/**
	 * @remarks
	 * 组件的标识符。
	 * Identifier of the component.
	 *
	 */
	readonly typeId: string;
}
