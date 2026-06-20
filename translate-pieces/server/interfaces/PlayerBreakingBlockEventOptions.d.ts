/* IMPORT */ import { BlockFilter, EntityFilter, PlayerCancelBreakingBlockAfterEventSignal } from '..';

/**
 * @rc
 * An interface that is passed into {@link
 * PlayerStartBreakingBlockAfterEventSignal.subscribe} or
 * {@link PlayerCancelBreakingBlockAfterEventSignal.subscribe}
 * that filters out which events are passed to the provided
 * callback.
 */
export interface PlayerBreakingBlockEventOptions {
    /**
     * @remarks
     * The {@link BlockFilter} that the callback should be called
     * for. If undefined, the callback will be called for all
     * blocks.
     *
     */
    blockFilter?: BlockFilter;
    /**
     * @remarks
     * The {@link EntityFilter} that the callback should be called
     * for. If undefined, the callback will be called for all
     * players.
     *
     */
    playerFilter?: EntityFilter;
}
