/* IMPORT */ import { VirtualContainerOpenError } from '..';

/**
 * Reasons that the {@link VirtualContainerOpenError} was
 * thrown.
 */
export enum VirtualContainerOpenErrorReason {
    /**
     * @remarks
     * The player already has a container screen open, such as
     * their inventory, a chest or another virtual container. Try
     * again after they close it.
     *
     */
    ContainerScreenOpen = 'ContainerScreenOpen',
    /**
     * @remarks
     * The player is dead. Try again after they respawn.
     *
     */
    PlayerDead = 'PlayerDead',
    /**
     * @remarks
     * The player is still loading into the world, is changing
     * dimension, or is standing in a portal. Try again on a later
     * tick.
     *
     */
    PlayerNotReady = 'PlayerNotReady',
    /**
     * @remarks
     * The player is sleeping. Try again after they wake up.
     *
     */
    PlayerSleeping = 'PlayerSleeping',
    /**
     * @remarks
     * The player is in spectator mode.
     *
     */
    PlayerSpectating = 'PlayerSpectating',
    /**
     * @remarks
     * The player's previous container screen is still closing.
     * Open the next container once the virtualContainerClose event
     * for the previous one arrives, or try again on a later tick.
     *
     */
    PreviousScreenClosing = 'PreviousScreenClosing',
}
