/* IMPORT */ import { Entity } from '..';

/**
 * @beta
 * Represents the source of a container access.
 */
export interface ContainerAccessSource {
    /**
     * @remarks
     * The entity that triggered the container access.
     *
     */
    entity?: Entity;
}
