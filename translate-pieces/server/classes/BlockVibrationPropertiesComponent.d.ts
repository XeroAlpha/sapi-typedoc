/* IMPORT */ import { BlockComponent, LocationInUnloadedChunkError, LocationOutOfWorldBoundariesError } from '..';

/**
 * Represents the vibration properties of a block with a
 * 'minecraft:vibration_properties' component.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockVibrationPropertiesComponent extends BlockComponent {
    private constructor();
    static readonly componentId = 'minecraft:vibration_properties';
    /**
     * @remarks
     * Gets whether this block can dampen vibrations. Vibrations
     * that occur on this block will be discarded by this block if
     * it can dampen vibrations. Returns false when the block does
     * not define a 'minecraft:vibration_properties' component.
     *
     * @returns
     * Whether this block can dampen vibrations.
     * @throws {LocationInUnloadedChunkError}
     *
     * @throws {LocationOutOfWorldBoundariesError}
     */
    getCanDampenVibrations(): boolean;
    /**
     * @remarks
     * Gets whether this block can occlude vibrations. Vibrations
     * that pass through this block will be discarded if this block
     * can occlude vibrations. Returns false when the block does
     * not define a 'minecraft:vibration_properties' component.
     *
     * @returns
     * Whether this block can occlude vibrations.
     * @throws {LocationInUnloadedChunkError}
     *
     * @throws {LocationOutOfWorldBoundariesError}
     */
    getCanOccludeVibrations(): boolean;
}
