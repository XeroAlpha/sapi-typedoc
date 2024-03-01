/* IMPORT */ import { BlockCustomComponent, minecraftcommon } from '../index';

/**
 * @beta
 * Provides the functionality for registering custom components
 * for blocks.
 */
export class BlockTypeRegistry {
    private constructor();
    /**
     * @remarks
     * Registers a block custom component that can be used in block
     * JSON configuration.
     *
     * @param name
     * The id that represents this custom component. Must have a
     * namespace. This id can be specified in a block's JSON
     * configuration under the 'minecraft:custom_components' block
     * component.
     * @param customComponent
     * The collection of event functions that will be called when
     * the event occurs on a block using this custom component id.
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link Error}
     */
    registerCustomComponent(name: string, customComponent: BlockCustomComponent): void;
}