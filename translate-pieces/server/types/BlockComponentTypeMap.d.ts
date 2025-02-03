/* IMPORT */ import { BlockFluidContainerComponent, BlockInventoryComponent, BlockMapColorComponent, BlockPistonComponent, BlockRecordPlayerComponent, BlockSignComponent } from '../index';

/**
 * @beta
 * @beta
 */
export type BlockComponentTypeMap = {
    fluidContainer: BlockFluidContainerComponent;
    inventory: BlockInventoryComponent;
    map_color: BlockMapColorComponent;
    'minecraft:fluidContainer': BlockFluidContainerComponent;
    'minecraft:inventory': BlockInventoryComponent;
    'minecraft:map_color': BlockMapColorComponent;
    'minecraft:piston': BlockPistonComponent;
    'minecraft:record_player': BlockRecordPlayerComponent;
    'minecraft:sign': BlockSignComponent;
    piston: BlockPistonComponent;
    record_player: BlockRecordPlayerComponent;
    sign: BlockSignComponent;
};