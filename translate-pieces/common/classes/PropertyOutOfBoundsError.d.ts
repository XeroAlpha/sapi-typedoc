export class PropertyOutOfBoundsError extends Error {
    private constructor();
    /**
     * @remarks
     * @earlyExecution
     *
     */
    readonly maxValue?: number;
    /**
     * @remarks
     * @earlyExecution
     *
     */
    readonly minValue?: number;
    /**
     * @remarks
     * @earlyExecution
     *
     */
    readonly value: number;
}
