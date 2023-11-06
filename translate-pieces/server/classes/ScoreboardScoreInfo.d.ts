/**
 * Contains a pair of a scoreboard participant and its
 * respective score.
 */
export class ScoreboardScoreInfo {
    private constructor();
    /**
     * @remarks
     * This scoreboard participant for this score.
     *
     */
    readonly participant: ScoreboardIdentity;
    /**
     * @remarks
     * Score value of the identity for this objective.
     *
     */
    readonly score: number;
}