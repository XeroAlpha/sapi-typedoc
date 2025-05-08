/* IMPORT */ import { ContainerRules } from '../index';

/**
 * @beta
 * Reasons that the {@link
 * @minecraft/server.ContainerRulesError} was thrown.
 */
export enum ContainerRulesErrorReason {
    /**
     * @remarks
     * Thrown when trying to add item that was defined in {@link
     * ContainerRules.bannedItems}.
     *
     */
    BannedItem = 'BannedItem',
    /**
     * @remarks
     * Thrown when trying to add item with `Storage Item` component
     * to container with {@link
     * ContainerRules.allowNestedStorageItems} set to false.
     *
     */
    NestedStorageItem = 'NestedStorageItem',
    /**
     * @remarks
     * Thrown when trying to add item not defined in non-empty
     * {@link ContainerRules.allowedItems}.
     *
     */
    NotAllowedItem = 'NotAllowedItem',
    /**
     * @remarks
     * Thrown when trying to add item that pushed the containers
     * weight over the {@link ContainerRules.weightLimit}.
     *
     */
    OverWeightLimit = 'OverWeightLimit',
    /**
     * @remarks
     * Thrown when trying to add item with zero weight defined by
     * the `Storage Weight Modifier` component to container with a
     * defined {@link ContainerRules.weightLimit}
     *
     */
    ZeroWeightItem = 'ZeroWeightItem',
}