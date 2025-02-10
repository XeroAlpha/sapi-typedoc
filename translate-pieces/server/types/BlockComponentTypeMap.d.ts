/* IMPORT */ import { BlockFluidContainerComponent, BlockInventoryComponent, BlockMapColorComponent, BlockPistonComponent, BlockRecordPlayerComponent, BlockSignComponent } from '../index';

/**
 * @beta
 */
export type BlockComponentTypeMap = {
    fluid_container: BlockFluidContainerComponent;
    inventory: BlockInventoryComponent;
    map_color: BlockMapColorComponent;
    'minecraft:fluid_container': BlockFluidContainerComponent;
    'minecraft:inventory': BlockInventoryComponent;
    'minecraft:map_color': BlockMapColorComponent;
    'minecraft:piston': BlockPistonComponent;
    'minecraft:record_player': BlockRecordPlayerComponent;
    'minecraft:sign': BlockSignComponent;
    piston: BlockPistonComponent;
    record_player: BlockRecordPlayerComponent;
    sign: BlockSignComponent;
};