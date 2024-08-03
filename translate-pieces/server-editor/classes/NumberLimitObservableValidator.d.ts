/* IMPORT */ import { ObservableValidator } from '../index';

/**
 * Validates min/max limits of observable objects that support
 * number
 */
export declare class NumberLimitObservableValidator implements ObservableValidator<number> {
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     *
     */
    protected _isInteger?: boolean;
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     *
     */
    protected _max?: number;
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     *
     */
    protected _min?: number;
    /**
     * @remarks
     * Constructs a new instance of the
     * `NumberLimitObservableValidator` class
     *
     */
    constructor(min: number | undefined, max: number | undefined, isInteger?: boolean);
    updateLimits(min: number | undefined, max: number | undefined): void;
    validate(newValue: number): number;
}