/* IMPORT */ import { Block, CustomCommandSource, Entity } from '../index';

/**
 * @rc
 * Details about the origins of the command.
 */
export class CustomCommandOrigin {
    private constructor();
    /**
     * @remarks
     * If this command was initiated via an NPC, returns the entity
     * that initiated the NPC dialogue.
     *
     */
    readonly initiator?: Entity;
    /**
     * @remarks
     * Source block if this command was triggered via a block
     * (e.g., a commandblock.)
     *
     */
    readonly sourceBlock?: Block;
    /**
     * @remarks
     * Source entity if this command was triggered by an entity
     * (e.g., a NPC).
     *
     */
    readonly sourceEntity?: Entity;
    /**
     * @remarks
     * Returns the type of source that fired this command.
     *
     */
    readonly sourceType: CustomCommandSource;
}