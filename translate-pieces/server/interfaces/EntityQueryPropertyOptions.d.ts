/* IMPORT */ import { EqualsComparison, GreaterThanComparison, GreaterThanOrEqualsComparison, LessThanComparison, LessThanOrEqualsComparison, NotEqualsComparison, RangeComparison } from '../index';

export interface EntityQueryPropertyOptions {
    exclude?: boolean;
    propertyId: string;
    value?:
        | boolean
        | string
        | EqualsComparison
        | GreaterThanComparison
        | GreaterThanOrEqualsComparison
        | LessThanComparison
        | LessThanOrEqualsComparison
        | NotEqualsComparison
        | RangeComparison;
}