/* IMPORT */ import { ObservableValidator, minecraftserver } from '../index';

/**
 * Validates min/max limits of observable objects that support
 * Vector3
 */
export declare class Vector3LimitObservableValidator implements ObservableValidator<minecraftserver.Vector3> {
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     *
     */
    protected _max: Partial<minecraftserver.Vector3>;
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     *
     */
    protected _min: Partial<minecraftserver.Vector3>;
    /**
     * @remarks
     * Constructs a new instance of the
     * `Vector3LimitObservableValidator` class
     *
     */
    constructor(min: Partial<minecraftserver.Vector3>, max: Partial<minecraftserver.Vector3>);
    updateLimits(min: Partial<minecraftserver.Vector3>, max: Partial<minecraftserver.Vector3>): void;
    validate(newValue: minecraftserver.Vector3): minecraftserver.Vector3;
}