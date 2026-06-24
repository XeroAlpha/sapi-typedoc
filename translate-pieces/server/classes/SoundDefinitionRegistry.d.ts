/* IMPORT */ import { InvalidArgumentError } from '../../common';
/* IMPORT */ import { SoundDefinition, SoundDefinitionFilter } from '..';

/**
 * @beta
 * Provides read-only access to the sound definitions loaded
 * for the current world.
 */
export class SoundDefinitionRegistry {
    private constructor();
    /**
     * @remarks
     * Returns the sound definitions in the registry, optionally
     * narrowed by a filter.
     *
     * @param filter
     * Optional filter applied to each definition. When omitted,
     * every definition is returned.
     * @returns
     * All sound definitions matching the filter, or every sound
     * definition when no filter is supplied.
     * @throws
     * An error will be thrown if filter.minDuration is greater
     * than filter.maxDuration.
     *
     * {@link InvalidArgumentError}
     */
    getDefinitions(filter?: SoundDefinitionFilter): SoundDefinition[];
}
