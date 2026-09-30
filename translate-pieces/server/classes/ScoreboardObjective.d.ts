/* IMPORT */ import { Entity, ScoreboardIdentity, ScoreboardScoreInfo } from '..';

/**
 * Contains objectives and participants for the scoreboard.
 */
export class ScoreboardObjective {
    private constructor();
    /**
     * @remarks
     * Returns the player-visible name of this scoreboard
     * objective.
     *
     * @throws
     */
    readonly displayName: string;
    /**
     * @remarks
     * Identifier of the scoreboard objective.
     *
     * @throws
     */
    readonly id: string;
    /**
     * @remarks
     * Returns true if the ScoreboardObjective reference is still
     * valid.
     *
     */
    readonly isValid: boolean;
    /**
     * @remarks
     * Adds a score to the given participant and objective.
     *
     * @worldMutation
     *
     * @param participant
     * Participant to apply the scoreboard value addition to.
     * @throws
     */
    addScore(participant: Entity | ScoreboardIdentity | string, scoreToAdd: number): number;
    /**
     * @remarks
     * Returns all objective participant identities.
     *
     * @throws
     */
    getParticipants(): ScoreboardIdentity[];
    /**
     * @remarks
     * Returns a specific score for a participant.
     *
     * @param participant
     * Identifier of the participant to retrieve a score for.
     * @throws
     */
    getScore(participant: Entity | ScoreboardIdentity | string): number | undefined;
    /**
     * @remarks
     * Returns specific scores for this objective for all
     * participants.
     *
     * @throws
     */
    getScores(): ScoreboardScoreInfo[];
    /**
     * @remarks
     * Returns if the specified identity is a participant of the
     * scoreboard objective.
     *
     * @throws
     */
    hasParticipant(participant: Entity | ScoreboardIdentity | string): boolean;
    /**
     * @remarks
     * Removes a participant from this scoreboard objective.
     *
     * @worldMutation
     *
     * @param participant
     * Participant to remove from being tracked with this
     * objective.
     * @throws
     */
    removeParticipant(participant: Entity | ScoreboardIdentity | string): boolean;
    /**
     * @remarks
     * Sets a score for a participant.
     *
     * @worldMutation
     *
     * @param participant
     * Identity of the participant.
     * @param score
     * New value of the score.
     * @throws
     */
    setScore(participant: Entity | ScoreboardIdentity | string, score: number): void;
}
