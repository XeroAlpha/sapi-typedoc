/* IMPORT */ import { PlayerDimensionChangeAfterEvent } from '..';

/**
 * Describes what caused a player to change dimensions. Sent as
 * part of {@link PlayerDimensionChangeAfterEvent}.
 */
export enum PlayerDimensionChangeSource {
    /**
     * @remarks
     * The player respawned in another dimension after dying.
     *
     */
    PlayerRespawn = 'PlayerRespawn',
    /**
     * @remarks
     * The player changed dimensions through a portal.
     *
     */
    Portal = 'Portal',
    /**
     * @remarks
     * The player was teleported to another dimension by a command,
     * such as /tp or /execute, or by a script teleport.
     *
     */
    TeleportCommand = 'TeleportCommand',
    /**
     * @remarks
     * The cause of the dimension change is not known.
     *
     */
    Unknown = 'Unknown',
}
