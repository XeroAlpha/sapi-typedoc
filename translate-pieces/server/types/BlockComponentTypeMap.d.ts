/* IMPORT */ import { BlockFluidContainerComponent, BlockInventoryComponent, BlockMapColorComponent, BlockMovableComponent, BlockPistonComponent, BlockRecordPlayerComponent, BlockSignComponent } from '../index';

export type BlockComponentTypeMap = {
    fluid_container: BlockFluidContainerComponent;
    inventory: BlockInventoryComponent;
    map_color: BlockMapColorComponent;
    'minecraft:fluid_container': BlockFluidContainerComponent;
    'minecraft:inventory': BlockInventoryComponent;
    'minecraft:map_color': BlockMapColorComponent;
    'minecraft:movable': BlockMovableComponent;
    'minecraft:piston': BlockPistonComponent;
    'minecraft:record_player': BlockRecordPlayerComponent;
    'minecraft:sign': BlockSignComponent;
    movable: BlockMovableComponent;
    piston: BlockPistonComponent;
    record_player: BlockRecordPlayerComponent;
    sign: BlockSignComponent;
};