/* IMPORT */ import { BlockVolumeBase, Vector3 } from '../index';

/**
 * @beta
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ListBlockVolume extends BlockVolumeBase {
    constructor(locations: Vector3[]);
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    add(locations: Vector3[]): void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    remove(locations: Vector3[]): void;
}