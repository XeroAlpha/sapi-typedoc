/**
 * @beta
 * Criteria used to narrow a set of sound definitions. Each
 * field is optional and applies its constraint only when
 * defined; a definition must satisfy every defined field to
 * pass.
 */
export interface SoundDefinitionFilter {
    /**
     * @remarks
     * Artist names to match against the definition's
     * music_info.artist. Comparison is case-insensitive. When
     * defined as a non-empty array, a definition passes only when
     * its declared artist matches one of the supplied values. When
     * undefined, no constraint on artist is applied.
     *
     */
    artists?: string[];
    /**
     * @remarks
     * Genres to match against the definition's music_info.genres.
     * Comparison is case-insensitive. When defined as a non-empty
     * array, a definition passes only when at least one of its
     * declared genres matches one of the supplied values. When
     * undefined, no constraint on genres is applied.
     *
     */
    genres?: string[];
    /**
     * @remarks
     * Upper bound in seconds, inclusive. When defined, definitions
     * with a longer duration and definitions without a declared
     * duration are excluded. When undefined, no upper bound is
     * applied.
     *
     */
    maxDuration?: number;
    /**
     * @remarks
     * Lower bound in seconds, inclusive. When defined, definitions
     * with a shorter duration and definitions without a declared
     * duration are excluded. When undefined, no lower bound is
     * applied.
     *
     */
    minDuration?: number;
    /**
     * @remarks
     * Moods to match against the definition's music_info.moods.
     * Comparison is case-insensitive. When defined as a non-empty
     * array, a definition passes only when at least one of its
     * declared moods matches one of the supplied values. When
     * undefined, no constraint on moods is applied.
     *
     */
    moods?: string[];
    /**
     * @remarks
     * Tag constraints to match against the definition's tags.
     * Comparisons of tag names and values are case-insensitive.
     * When defined as a non-empty record, a definition passes only
     * when, for each entry with a non-empty value array, the tag
     * name is present on the definition with at least one matching
     * value. When undefined, no constraint on tags is applied.
     *
     */
    tags?: Record<string, string[]>;
    /**
     * @remarks
     * Titles to match against the definition's music_info.title.
     * Comparison is case-insensitive. When defined as a non-empty
     * array, a definition passes only when its declared title
     * matches one of the supplied values. When undefined, no
     * constraint on title is applied.
     *
     */
    titles?: string[];
}
