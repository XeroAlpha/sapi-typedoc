/**
 * Options for creating a virtual container with
 * VirtualContainerManager.create. The size sets its number of
 * slots, from 1 to 54, which its screen lays out nine per row.
 * The optional title is the heading on its screen, which is
 * empty by default. A title can be up to 256 bytes and is
 * localized when it names a localization key, in which case
 * the limit applies to the key rather than the localized text.
 * Neither can be changed once the container is created.
 */
export interface VirtualContainerOptions {
    /**
     * @remarks
     * The number of slots in the container, from 1 to 54. The
     * screen lays them out nine per row.
     *
     */
    size: number;
    /**
     * @remarks
     * The heading shown on the container screen, up to 256 bytes.
     * It is localized when it names a localization key. Defaults
     * to no heading.
     *
     */
    title?: string;
}
