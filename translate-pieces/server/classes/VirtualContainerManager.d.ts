/* IMPORT */ import { PropertyOutOfBoundsError } from '../../common';
/* IMPORT */ import { VirtualContainer, VirtualContainerOptions } from '..';

/**
 * Creates virtual containers: containers that only exist in
 * memory and belong to the script that created them.
 */
export class VirtualContainerManager {
    private constructor();
    /**
     * @remarks
     * Creates a new, empty virtual container.
     *
     * @worldMutation
     *
     * @param options
     * The number of slots and the title of the container.
     * @returns
     * The new container.
     * @throws
     * Throws if the size is not between 1 and 54, or if the title
     * is longer than 256 bytes.
     *
     * {@link PropertyOutOfBoundsError}
     */
    create(options: VirtualContainerOptions): VirtualContainer;
}
