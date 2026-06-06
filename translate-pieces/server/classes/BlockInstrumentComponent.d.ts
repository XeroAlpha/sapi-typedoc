/* IMPORT */ import { InvalidArgumentError } from '../../common';
/* IMPORT */ import { BlockComponent, Direction, LocationInUnloadedChunkError, LocationOutOfWorldBoundariesError, WorldSoundOptions } from '..';

/**
 * @beta
 * Represents the instruments a block can have assigned to it's
 * up and down faces.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockInstrumentComponent extends BlockComponent {
    private constructor();
    static readonly componentId = 'minecraft:instrument_sound';
    /**
     * @remarks
     * A getter method to get the name of an instrument for a given
     * valid face Direction.
     *
     * @param face
     * the face Direction to get the instrument name for.
     * @returns
     * Returns the name of the instrument for a given valid face
     * Direction.
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    getInstrumentName(face: Direction): string;
    /**
     * @remarks
     * plays the instrument sound for a given valid face Direction
     * at the components block location using optional
     * WorldSoundOptions.
     *
     * @worldMutation
     *
     * @param face
     * the face Direction for which instrument sound to play.
     * @param soundOptions
     * optional WorldSoundOptions to use when playing the
     * insturment sound; if omitted the default values are used.
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    playInstrumentSound(face: Direction, soundOptions?: WorldSoundOptions): void;
}
