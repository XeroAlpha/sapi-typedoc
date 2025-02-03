/* IMPORT */ import { BlockFluidContainerComponent, BlockInventoryComponent, BlockPistonComponent, BlockRecordPlayerComponent, BlockSignComponent } from '../index';

/**
 * @beta
 * @beta
 */
export type BlockComponentTypeMap = {
    fluidContainer: BlockFluidContainerComponent;
    inventory: BlockInventoryComponent;
    'minecraft:fluidContainer': BlockFluidContainerComponent;
    'minecraft:inventory': BlockInventoryComponent;
    'minecraft:piston': BlockPistonComponent;
    'minecraft:record_player': BlockRecordPlayerComponent;
    'minecraft:sign': BlockSignComponent;
    piston: BlockPistonComponent;
    record_player: BlockRecordPlayerComponent;
    sign: BlockSignComponent;
};