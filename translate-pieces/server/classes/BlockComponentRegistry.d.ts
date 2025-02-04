/* IMPORT */ import { BlockCustomComponent, BlockCustomComponentAlreadyRegisteredError, BlockCustomComponentReloadNewComponentError, BlockCustomComponentReloadNewEventError, BlockCustomComponentReloadVersionError, CustomComponentInvalidRegistryError, NamespaceNameError, minecraftcommon } from '../index';

export class BlockComponentRegistry {
	private constructor();
	/**
	 * @remarks
	 *  此函数可在早期模式下被执行。
	 *
	 * This function can be called in early-execution mode.
	 *
	 * @throws This function can throw errors.
	 *
	 * {@link BlockCustomComponentAlreadyRegisteredError}
	 *
	 * {@link BlockCustomComponentReloadNewComponentError}
	 *
	 * {@link BlockCustomComponentReloadNewEventError}
	 *
	 * {@link BlockCustomComponentReloadVersionError}
	 *
	 * {@link CustomComponentInvalidRegistryError}
	 *
	 * {@link minecraftcommon.EngineError}
	 *
	 * {@link NamespaceNameError}
	 */
	registerCustomComponent(name: string, customComponent: BlockCustomComponent): void;
}
