/* IMPORT */ import { BlockMaskListType, minecraftserver } from '../index';

export interface BlockMaskList {
    blockList: (minecraftserver.BlockPermutation | minecraftserver.BlockType | string)[];
    maskType: BlockMaskListType;
}