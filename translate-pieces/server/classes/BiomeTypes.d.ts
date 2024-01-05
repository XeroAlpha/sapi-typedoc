/* IMPORT */ import { BiomeType } from '../index';

/**
 * @beta
 */
export class BiomeTypes {
    private constructor();
    static get(typeName: string): BiomeType | undefined;
    static getAll(): BiomeType[];
}