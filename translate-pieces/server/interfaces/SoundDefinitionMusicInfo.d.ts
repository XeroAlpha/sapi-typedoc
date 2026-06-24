/**
 * @beta
 * Music metadata declared on a sound definition. Each field is
 * optional and is undefined when the sound definition does not
 * declare a value for it.
 */
export interface SoundDefinitionMusicInfo {
    /**
     * @remarks
     * Artist declared for this sound. Undefined when no artist was
     * declared.
     *
     */
    artist?: string;
    /**
     * @remarks
     * Genres declared for this sound. Undefined when no genres
     * were declared.
     *
     */
    genres?: string[];
    /**
     * @remarks
     * Moods declared for this sound. Undefined when no moods were
     * declared.
     *
     */
    moods?: string[];
    /**
     * @remarks
     * Title declared for this sound. Undefined when no title was
     * declared.
     *
     */
    title?: string;
}
