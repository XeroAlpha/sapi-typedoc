/**
 * @beta
 * Specifies how to handle waterloggable blocks overlapping
 * with existing liquid.
 */
export enum LiquidSettings {
    /**
     * @remarks
     * Causes a waterloggable block to become waterlogged, if it
     * overlaps with existing liquid.
     *
     */
    ApplyWaterlogging = 'ApplyWaterlogging',
    /**
     * @remarks
     * Do not waterlog any waterloggable blocks that overlap
     * existing liquid.
     *
     */
    IgnoreWaterlogging = 'IgnoreWaterlogging',
}