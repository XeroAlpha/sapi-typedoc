/* IMPORT */ import { BlockFluidContainerComponent, BlockInventoryComponent, BlockMapColorComponent, BlockMovableComponent, BlockPistonComponent, BlockPrecipitationInteractionsComponent, BlockRecordPlayerComponent, BlockRedstoneProducerComponent, BlockSignComponent } from '..';

export type BlockComponentTypeMap = {
    fluid_container: BlockFluidContainerComponent;
    inventory: BlockInventoryComponent;
    map_color: BlockMapColorComponent;
    'minecraft:fluid_container': BlockFluidContainerComponent;
    'minecraft:inventory': BlockInventoryComponent;
    'minecraft:map_color': BlockMapColorComponent;
    'minecraft:movable': BlockMovableComponent;
    'minecraft:piston': BlockPistonComponent;
    'minecraft:precipitation_interactions': BlockPrecipitationInteractionsComponent;
    'minecraft:record_player': BlockRecordPlayerComponent;
    'minecraft:redstone_producer': BlockRedstoneProducerComponent;
    'minecraft:sign': BlockSignComponent;
    movable: BlockMovableComponent;
    piston: BlockPistonComponent;
    precipitation_interactions: BlockPrecipitationInteractionsComponent;
    record_player: BlockRecordPlayerComponent;
    redstone_producer: BlockRedstoneProducerComponent;
    sign: BlockSignComponent;
};
