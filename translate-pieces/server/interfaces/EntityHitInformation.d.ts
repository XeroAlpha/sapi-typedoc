/* IMPORT */ import { Entity } from '../index';

/**
 * Contains additional information about an entity that was
 * hit.
 */
export interface EntityHitInformation {
    /**
     * @remarks
     * Entity that was hit.
     *
     */
    entity?: Entity;
}