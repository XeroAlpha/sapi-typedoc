/**
 * @rc
 * An enumeration describing the reason for the namespace name
 * error being thrown
 *
 * 描述命名空间名称错误被抛出的原因的枚举
 */
export enum NamespaceNameErrorReason {
	/**
	 * @remarks
	 * A restricted namespace was used as the namespace
	 *
	 * 使用了受限的命名空间
	 *
	 */
	DisallowedNamespace = "DisallowedNamespace",
	/**
	 * @remarks
	 * The name was missing a namespace when one is required
	 *
	 * 在需要命名空间的情况下缺少命名空间
	 *
	 */
	NoNamespace = "NoNamespace",
}
