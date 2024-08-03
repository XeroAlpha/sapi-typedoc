/* IMPORT */ import { ObservableValidator } from '../index';

/**
 * Validates observable objects that support string as
 * EntityType
 */
export declare class EntityIdentifierObservableValidator implements ObservableValidator<string> {
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     *
     */
    protected _defaultValue: string;
    get defaultValue(): string;
    /**
     * @remarks
     * Constructs a new instance of the
     * `EntityIdentifierObservableValidator` class
     *
     */
    constructor(defaultValue: string);
    validate(newValue: string): string;
}