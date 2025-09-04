/* IMPORT */ import { ObservableValidator, Vector3 } from '../index';

/**
 * Validates min/max limits of observable objects that support
 * Vector3
 */
export declare class Vector3LimitObservableValidator implements ObservableValidator<Vector3> {
    /**
     * @remarks
     * @worldMutation
     *
     */
    protected _isInteger?: boolean;
    /**
     * @remarks
     * @worldMutation
     *
     */
    protected _max: Partial<Vector3>;
    /**
     * @remarks
     * @worldMutation
     *
     */
    protected _min: Partial<Vector3>;
    /**
     * @remarks
     * Constructs a new instance of the
     * `Vector3LimitObservableValidator` class
     *
     */
    constructor(min: Partial<Vector3>, max: Partial<Vector3>, isInteger?: boolean);
    updateLimits(min: Partial<Vector3>, max: Partial<Vector3>): void;
    validate(newValue: Vector3): Vector3;
}