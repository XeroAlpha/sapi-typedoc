/* IMPORT */ import { TickingAreaManager } from '..';

/**
 * @beta
 * The reason that the {@link
 * @minecraft/server.TickingAreaError} was thrown.
 */
export enum TickingAreaErrorReason {
    /**
     * @remarks
     * Added a ticking area with an identifier that already exists.
     *
     */
    IdentifierAlreadyExists = 'IdentifierAlreadyExists',
    /**
     * @remarks
     *  Adding this ticking area pushed the ticking areas over the
     * limit specified by {@link TickingAreaManager.maxChunkCount}.
     *
     */
    OverChunkLimit = 'OverChunkLimit',
    /**
     * @remarks
     * Exceeded the 255 chunk limit for the length or width of the
     * ticking area.
     *
     */
    SideLengthExceeded = 'SideLengthExceeded',
    /**
     * @remarks
     * Tried to remove ticking area with identifier not registered
     * in the {@link TickingAreaManager}.
     *
     */
    UnknownIdentifier = 'UnknownIdentifier',
}
