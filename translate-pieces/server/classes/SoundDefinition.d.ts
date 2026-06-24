/* IMPORT */ import { SoundDefinitionDurationInfo, SoundDefinitionMusicInfo } from '..';

/**
 * @beta
 * Static metadata about a sound declared in a
 * sound_definitions.json file.
 */
export class SoundDefinition {
    private constructor();
    /**
     * @remarks
     * Duration metadata declared for this sound. Undefined when
     * the sound definition does not specify a duration.
     *
     */
    readonly durationInfo?: SoundDefinitionDurationInfo;
    /**
     * @remarks
     * Music metadata declared for this sound. Undefined when the
     * sound definition does not specify a music_info block.
     *
     */
    readonly musicInfo?: SoundDefinitionMusicInfo;
    /**
     * @remarks
     * Identifier of the sound event this definition declares, in
     * the form 'namespace:name'.
     *
     */
    readonly soundEventId: string;
    /**
     * @remarks
     * Tag metadata declared for this sound, as a record mapping
     * each tag name to its declared values. A tag declared with a
     * single string value is exposed as a single-element array.
     * Undefined when the sound definition does not specify any
     * tags.
     *
     */
    readonly tags?: Record<string, string[]>;
}
