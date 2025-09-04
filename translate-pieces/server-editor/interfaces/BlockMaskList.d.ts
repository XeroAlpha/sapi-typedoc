/* IMPORT */ import { BlockMaskListType, BlockPermutation, BlockType } from '../index';

export interface BlockMaskList {
    blockList: (BlockPermutation | BlockType | string)[];
    maskType: BlockMaskListType;
}