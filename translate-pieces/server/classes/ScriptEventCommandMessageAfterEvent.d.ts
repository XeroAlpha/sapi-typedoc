/* IMPORT */ import { Block, Entity, ScriptEventSource } from '../index';

/**
 * Returns additional data about a /scriptevent command
 * invocation.
 */
export class ScriptEventCommandMessageAfterEvent {
    private constructor();
    /**
     * @remarks
     * Identifier of this ScriptEvent command message.
     *
     */
    readonly id: string;
    /**
     * @remarks
     * If this command was initiated via an NPC, returns the entity
     * that initiated the NPC dialogue.
     *
     */
    readonly initiator?: Entity;
    /**
     * @remarks
     * Optional additional data passed in with the script event
     * command.
     *
     */
    readonly message: string;
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
    readonly sourceType: ScriptEventSource;
}