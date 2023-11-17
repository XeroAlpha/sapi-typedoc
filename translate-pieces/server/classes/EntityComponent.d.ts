/* IMPORT */ import { Component, Entity } from '../index';

/**
 * Base class for downstream entity components.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityComponent extends Component {
    private constructor();
    /**
     * @beta
     * @remarks
     * The entity that owns this component. The entity will be
     * undefined if it has been removed.
     *
     */
    readonly entity?: Entity;
}