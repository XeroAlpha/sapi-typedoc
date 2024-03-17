export class PropertyOutOfBoundsError extends Error {
    private constructor();
    maxValue: number;
    minValue: number;
    value: number;
}