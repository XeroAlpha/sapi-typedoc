/* IMPORT */ import { EffectType } from '../index';

/**
 * Represents a type of effect - like poison - that can be
 * applied to an entity.
 */
export class EffectTypes {
    private constructor();
    /**
     * @remarks
     * Effect type for the given identifier.
     *
     * This function can't be called in read-only mode.
     *
     * @returns
     * Effect type for the given identifier or undefined if the
     * effect does not exist.
     */
    static get(identifier: string): EffectType | undefined;
    /**
     * @remarks
     * Gets all effects.
     *
     * This function can't be called in read-only mode.
     *
     * @returns
     * A list of all effects.
     */
    static getAll(): EffectType[];
}