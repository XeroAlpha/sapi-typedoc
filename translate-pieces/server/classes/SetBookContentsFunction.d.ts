/* IMPORT */ import { LootItemFunction } from '..';

/**
 * @beta
 * Loot item function that modifies the contents of a dropped
 * book.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class SetBookContentsFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * The name of the book's author.
     *
     */
    readonly author: string;
    /**
     * @remarks
     * An array of text to be placed in the pages of the book.
     *
     */
    readonly pages: string[];
    /**
     * @remarks
     * The book's title.
     *
     */
    readonly title: string;
}
