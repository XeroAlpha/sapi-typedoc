/* IMPORT */ import { LiquidSettings } from '..';

/**
 * Provides additional options for {@link
 * StructureManager.placeJigsaw}.
 */
export interface JigsawPlaceOptions {
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
     * @beta
     * @remarks
     * Specifies how to handle waterloggable blocks overlapping
     * with existing liquid. Defaults to `ApplyWaterlogging`.
     *
     */
    liquidSettings?: LiquidSettings;
}
