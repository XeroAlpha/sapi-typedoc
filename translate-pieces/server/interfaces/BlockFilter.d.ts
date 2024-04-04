/* IMPORT */ import { BlockPermutation } from '../index';

export interface BlockFilter {
    excludePermutations?: BlockPermutation[];
    excludeTags?: string[];
    excludeTypes?: string[];
    includePermutations?: BlockPermutation[];
    includeTags?: string[];
    includeTypes?: string[];
}