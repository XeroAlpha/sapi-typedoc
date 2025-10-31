/* IMPORT */ import { LiquidSettings } from '..';

/**
 * Provides additional options for {@link
 * StructureManager.placeJigsawStructure}.
 */
export interface JigsawStructurePlaceOptions {
    /**
     * @remarks
     * Whether the start height defined in the jigsaw structure
     * definition should be ignored and overridden with the
     * specified y coordinate. Defaults to false.
     *
     */
    ignoreStartHeight?: boolean;
    /**
     * @remarks
     * Whether entities should be included in the structure.
     * Defaults to true.
     *
     */
    includeEntities?: boolean;
    /**
     * @remarks
     * Whether the jigsaw blocks should be kept when generating the
     * structure. Defaults to false.
     *
     */
    keepJigsaws?: boolean;
    /**
     * @rc
     * @remarks
     * Specifies how to handle waterloggable blocks overlapping
     * with existing liquid. Defaults to `ApplyWaterlogging`.
     *
     */
    liquidSettings?: LiquidSettings;
}
