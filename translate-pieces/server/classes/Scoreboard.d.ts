/* IMPORT */ import { DisplaySlotId, ScoreboardIdentity, ScoreboardObjective, ScoreboardObjectiveDisplayOptions } from '../index';

/**
 * Contains objectives and participants for the scoreboard.
 * @seeExample updateScoreboard.ts
 */
export class Scoreboard {
    private constructor();
    /**
     * @remarks
     * Adds a new objective to the scoreboard.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     * @seeExample updateScoreboard.ts
     */
    addObjective(objectiveId: string, displayName?: string): ScoreboardObjective;
    /**
     * @remarks
     * Clears the objective that occupies a display slot.
     *
     * @worldMutation
     *
     */
    clearObjectiveAtDisplaySlot(displaySlotId: DisplaySlotId): ScoreboardObjective | undefined;
    /**
     * @remarks
     * Returns a specific objective (by id).
     *
     * @param objectiveId
     * Identifier of the objective.
     */
    getObjective(objectiveId: string): ScoreboardObjective | undefined;
    /**
     * @remarks
     * Returns an objective that occupies the specified display
     * slot.
     *
     */
    getObjectiveAtDisplaySlot(displaySlotId: DisplaySlotId): ScoreboardObjectiveDisplayOptions | undefined;
    /**
     * @remarks
     * Returns all defined objectives.
     *
     */
    getObjectives(): ScoreboardObjective[];
    /**
     * @remarks
     * Returns all defined scoreboard identities.
     *
     */
    getParticipants(): ScoreboardIdentity[];
    /**
     * @remarks
     * Removes an objective from the scoreboard.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    removeObjective(objectiveId: ScoreboardObjective | string): boolean;
    /**
     * @remarks
     * Sets an objective into a display slot with specified
     * additional display settings.
     *
     * @worldMutation
     *
     * @returns
     * Returns the previous `ScoreboardObjective` set at the
     * display slot, if no objective was previously set it returns
     * `undefined`.
     * @throws This function can throw errors.
     */
    setObjectiveAtDisplaySlot(
        displaySlotId: DisplaySlotId,
        objectiveDisplaySetting: ScoreboardObjectiveDisplayOptions,
    ): ScoreboardObjective | undefined;
}