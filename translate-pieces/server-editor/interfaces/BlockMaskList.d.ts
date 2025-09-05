/* IMPORT */ import { BlockPermutation, BlockType } from '../../server';
/* IMPORT */ import { BlockMaskListType } from '..';

export interface BlockMaskList {
    blockList: (BlockPermutation | BlockType | string)[];
    maskType: BlockMaskListType;
}
