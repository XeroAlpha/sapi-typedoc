/* IMPORT */ import { BookError, BookPageContentError, InvalidEntityError, InvalidItemStackError, ItemComponent, RawMessage } from '..';

/**
 * When present on an item, this item is a book item. Can
 * access and modify the contents of the book and sign it.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemBookComponent extends ItemComponent {
    private constructor();
    /**
     * @remarks
     * The name of the author of the book if it is signed,
     * otherwise undefined.
     *
     * @throws {InvalidItemStackError}
     */
    readonly author?: string;
    /**
     * @remarks
     * The contents of pages in the book that are in string format.
     * Entries not in string format will be undefined.
     *
     * @throws {InvalidItemStackError}
     */
    readonly contents: (string | undefined)[];
    /**
     * @remarks
     * Determines whether the book has been signed or not.
     *
     * @throws {InvalidItemStackError}
     */
    readonly isSigned: boolean;
    /**
     * @remarks
     * The amount of pages the book has.
     *
     * @throws {InvalidItemStackError}
     */
    readonly pageCount: number;
    /**
     * @remarks
     * The contents of pages in the book that are in
     * {@link RawMessage} format. Entries not in {@link RawMessage}
     * format will be undefined.
     *
     * @throws {InvalidItemStackError}
     */
    readonly rawContents: (RawMessage | undefined)[];
    /**
     * @remarks
     * The title of the book if it is signed, otherwise undefined.
     *
     * @throws {InvalidItemStackError}
     */
    readonly title?: string;
    static readonly componentId = 'minecraft:book';
    /**
     * @remarks
     * Gets the string format content of a page for a given index.
     *
     * @param pageIndex
     * The index of the page.
     * @returns
     * The content of the page if a valid index is provided and it
     * is in string format, otherwise returns undefined.
     * @throws {InvalidItemStackError}
     */
    getPageContent(pageIndex: number): string | undefined;
    /**
     * @remarks
     * Gets the {@link RawMessage} format content of a page for a
     * given index.
     *
     * @param pageIndex
     * The index of the page.
     * @returns
     * The content of the page if a valid index is provided and it
     * is in {@link RawMessage} format, otherwise returns
     * undefined.
     * @throws {InvalidItemStackError}
     */
    getRawPageContent(pageIndex: number): RawMessage | undefined;
    /**
     * @remarks
     * Inserts a page at a given index. Empty pages will be created
     * if the index is greater than the current book size.
     * Pages have a maximum limit of 256 characters for strings as
     * well as the JSON representation of a {@link RawMessage}.
     * Books have a maximum limit of 50 pages.
     *
     * @worldMutation
     *
     * @param pageIndex
     * The index of the page.
     * @param content
     * The content to set for the page. Can be a single string or
     * {@link RawMessage} or an array of strings and/or
     * {@link RawMessage}s
     * @throws {BookError}
     *
     * @throws {BookPageContentError}
     *
     * @throws {InvalidItemStackError}
     */
    insertPage(pageIndex: number, content: (RawMessage | string)[] | RawMessage | string): void;
    /**
     * @remarks
     * Removes a page at a given index. Existing pages following
     * this page will be moved backward to fill the empty space.
     *
     * @worldMutation
     *
     * @param pageIndex
     * The index of the page.
     * @throws {InvalidItemStackError}
     */
    removePage(pageIndex: number): void;
    /**
     * @remarks
     * Sets the contents of the book's pages. Pre-existing pages
     * will be cleared.
     * Pages have a maximum limit of 256 characters for strings as
     * well as the JSON representation of a {@link RawMessage}.
     * Books have a maximum limit of 50 pages.
     *
     * @worldMutation
     *
     * @param contents
     * An array of each page's contents. Each page can be a single
     * string or {@link RawMessage} or an array of strings and/or
     * {@link RawMessage}s.
     * @throws {BookError}
     *
     * @throws {BookPageContentError}
     *
     * @throws {InvalidItemStackError}
     */
    setContents(contents: ((RawMessage | string)[] | RawMessage | string)[]): void;
    /**
     * @remarks
     * Sets or creates the content of a specific page. Empty pages
     * will be created if the index is greater than the current
     * book size.
     * Pages have a maximum limit of 256 characters for strings as
     * well as the JSON representation of a {@link RawMessage}.
     * Books have a maximum limit of 50 pages.
     *
     * @worldMutation
     *
     * @param pageIndex
     * The index of the page.
     * @param content
     * The content to set for the page. Can be a single string or
     * {@link RawMessage} or an array of strings and/or
     * {@link RawMessage}s
     * @throws {BookError}
     *
     * @throws {BookPageContentError}
     *
     * @throws {InvalidItemStackError}
     */
    setPageContent(pageIndex: number, content: (RawMessage | string)[] | RawMessage | string): void;
    /**
     * @remarks
     * Signs a book giving it a title and author name. Once signed
     * players can no longer directly edit the book.
     * Titles have a maximum character limit of 16.
     *
     * @worldMutation
     *
     * @param title
     * The title to give the book.
     * @param author
     * The name of the book's author.
     * @throws {BookError}
     *
     * @throws {InvalidEntityError}
     *
     * @throws {InvalidItemStackError}
     */
    signBook(title: string, author: string): void;
}
