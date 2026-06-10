/* IMPORT */ import { FogSettingsError, InvalidEntityError } from '..';

/**
 * @beta
 * Provides access to the fog definitions stack of a player
 * entity, allowing scripts to push, pop, remove, and query
 * active fog definitions.
 */
export class FogSettings {
    private constructor();
    /**
     * @remarks
     * Returns the list of fog identifiers currently on the
     * player's fog stack, ordered from bottom to top.
     *
     * @worldMutation
     *
     * @returns
     * An array of fog definition identifiers currently on the
     * stack.
     * @throws
     * Throws if the entity is invalid.
     *
     * {@link InvalidEntityError}
     */
    getStack(): string[];
    /**
     * @remarks
     * Returns the list of tags currently present on the player's
     * fog stack.
     *
     * @worldMutation
     *
     * @returns
     * An array of tag strings associated with fog settings on the
     * stack.
     * @throws
     * Throws if the entity is invalid.
     *
     * {@link InvalidEntityError}
     */
    getTags(): string[];
    /**
     * @remarks
     * Removes the most recently pushed fog definition from the
     * player's fog stack.
     *
     * @worldMutation
     *
     * @param tag
     * An optional tag identifying which entry to pop. If provided,
     * searches the stack from top to bottom and removes the most
     * recently pushed entry with this tag. If omitted, removes the
     * most recently pushed entry regardless of tag.
     * @returns
     * Returns the identifier of the popped fog definition, or
     * undefined if the stack was unchanged.
     * @throws
     * Throws if the entity is invalid.
     *
     * {@link InvalidEntityError}
     */
    pop(tag?: string): string | undefined;
    /**
     * @remarks
     * Pushes a new fog definition onto the player's fog stack.
     *
     * @worldMutation
     *
     * @param fogId
     * The identifier of the fog definition to push onto the stack
     * (e.g. 'minecraft:fog_bamboo_jungle').
     * @param tag
     * An optional tag used to label this fog definition on the
     * stack, allowing it to be targeted by pop or remove. If
     * omitted, the entry is stored with the tag 'untagged'.
     * @returns
     * Returns the zero-based index at which the fog definition was
     * inserted into the stack.
     * @throws
     * Throws if the entity is invalid, the fog identifier is
     * invalid, or if the stack limit of 16 has been exceeded.
     *
     * {@link FogSettingsError}
     *
     * {@link InvalidEntityError}
     */
    push(fogId: string, tag?: string): number;
    /**
     * @remarks
     * Removes all fog definitions with the given tag from the
     * player's fog stack. If no tag is provided, clears all fog
     * definitions.
     *
     * @worldMutation
     *
     * @param tag
     * An optional tag identifying which the entries to remove. If
     * omitted, clears all fog definitions regardless of tag.
     * @returns
     * Returns true if at least one entry was removed, or false if
     * the stack was unchanged.
     * @throws
     * Throws if the entity is invalid.
     *
     * {@link InvalidEntityError}
     */
    remove(tag?: string): boolean;
    /**
     * @remarks
     * Sets the player's fog stack to the given list of fog
     * identifiers, replacing any existing entries.
     *
     * @worldMutation
     *
     * @param fogIds
     * A stack of fog definition identifiers to set on the player's
     * fog stack (e.g. ['minecraft:fog_bamboo_jungle']). Maximum of
     * 16 entries.
     * @param tag
     * An optional tag to associate with the new entries, used to
     * target them with pop or remove.
     * @throws
     * Throws if the entity is invalid, if more than 16 fog
     * identifiers are provided, or if any fog identifier is
     * invalid.
     *
     * {@link FogSettingsError}
     *
     * {@link InvalidEntityError}
     */
    setStack(fogIds: string[], tag?: string): void;
}
