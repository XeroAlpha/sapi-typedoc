/* IMPORT */ import { EffectType } from '..';

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
     * @param identifier
     * The identifier for the effect.
     * @returns
     * Effect type for the given identifier or undefined if the
     * effect does not exist.
     */
    static get(identifier: string): EffectType | undefined;
    /**
     * @remarks
     * Gets all effects.
     *
     * @returns
     * A list of all effects.
     */
    static getAll(): EffectType[];
}
