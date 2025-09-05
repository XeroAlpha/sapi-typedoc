/* IMPORT */ import { ObservableValidator } from '..';

/**
 * Validates observable objects that support string list as
 * BlockType
 */
export declare class BlockIdentifierListObservableValidator implements ObservableValidator<string[]> {
    validate(newValue: string[]): string[];
}
