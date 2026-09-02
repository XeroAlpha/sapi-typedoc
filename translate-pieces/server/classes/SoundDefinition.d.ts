/* IMPORT */ import { SoundDefinitionDurationInfo, SoundDefinitionMusicInfo } from '..';

/**
 * Static metadata about a sound declared in a
 * sound_definitions.json file.
 */
export class SoundDefinition {
    private constructor();
    /**
     * @rc
     * @remarks
     * Duration metadata declared for this sound. Undefined when
     * the sound definition does not specify a duration.
     *
     */
    readonly durationInfo?: SoundDefinitionDurationInfo;
    /**
     * @rc
     * @remarks
     * Music metadata declared for this sound. Undefined when the
     * sound definition does not specify a music_info block.
     *
     */
    readonly musicInfo?: SoundDefinitionMusicInfo;
    /**
     * @rc
     * @remarks
     * Identifier of the sound event this definition declares, in
     * the form 'namespace:name'.
     *
     */
    readonly soundEventId: string;
    /**
     * @rc
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
