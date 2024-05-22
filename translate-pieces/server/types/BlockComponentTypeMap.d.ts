/* IMPORT */ import { BlockInventoryComponent, BlockLavaContainerComponent, BlockPistonComponent, BlockPotionContainerComponent, BlockRecordPlayerComponent, BlockSignComponent, BlockSnowContainerComponent, BlockWaterContainerComponent } from '../index';

/**
 * @beta
 */
export type BlockComponentTypeMap = {
    inventory: BlockInventoryComponent;
    lavaContainer: BlockLavaContainerComponent;
    'minecraft:inventory': BlockInventoryComponent;
    'minecraft:lavaContainer': BlockLavaContainerComponent;
    'minecraft:piston': BlockPistonComponent;
    'minecraft:potionContainer': BlockPotionContainerComponent;
    'minecraft:record_player': BlockRecordPlayerComponent;
    'minecraft:sign': BlockSignComponent;
    'minecraft:snowContainer': BlockSnowContainerComponent;
    'minecraft:waterContainer': BlockWaterContainerComponent;
    piston: BlockPistonComponent;
    potionContainer: BlockPotionContainerComponent;
    record_player: BlockRecordPlayerComponent;
    sign: BlockSignComponent;
    snowContainer: BlockSnowContainerComponent;
    waterContainer: BlockWaterContainerComponent;
};