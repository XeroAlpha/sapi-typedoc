/* IMPORT */ import { BlockComponentEntityFallOnEvent, BlockComponentOnPlaceEvent, BlockComponentPlayerDestroyEvent, BlockComponentPlayerInteractEvent, BlockComponentPlayerPlaceBeforeEvent, BlockComponentRandomTickEvent, BlockComponentStepOffEvent, BlockComponentStepOnEvent, BlockComponentTickEvent } from '../index';

/**
 * Contains a set of events that will be raised for a block.
 * This object must be bound using the BlockRegistry.
 */
export interface BlockCustomComponent {
    /**
     * @remarks
     * This function will be called before a player places the
     * block.
     *
     */
    beforeOnPlayerPlace?: (arg0: BlockComponentPlayerPlaceBeforeEvent) => void;
    /**
     * @remarks
     * This function will be called when an entity falls onto the
     * block that this custom component is bound to.
     *
     */
    onEntityFallOn?: (arg0: BlockComponentEntityFallOnEvent) => void;
    /**
     * @remarks
     * This function will be called when the block that this custom
     * component is bound to is placed.
     *
     */
    onPlace?: (arg0: BlockComponentOnPlaceEvent) => void;
    /**
     * @remarks
     * This function will be called when a player destroys a
     * specific block.
     *
     */
    onPlayerDestroy?: (arg0: BlockComponentPlayerDestroyEvent) => void;
    /**
     * @remarks
     * This function will be called when a player sucessfully
     * interacts with the block that this custom component is bound
     * to.
     *
     */
    onPlayerInteract?: (arg0: BlockComponentPlayerInteractEvent) => void;
    /**
     * @remarks
     * This function will be called when a block randomly ticks.
     *
     */
    onRandomTick?: (arg0: BlockComponentRandomTickEvent) => void;
    /**
     * @remarks
     * This function will be called when an entity steps off the
     * block that this custom component is bound to.
     *
     */
    onStepOff?: (arg0: BlockComponentStepOffEvent) => void;
    /**
     * @remarks
     * This function will be called when an entity steps onto the
     * block that this custom component is bound to.
     *
     */
    onStepOn?: (arg0: BlockComponentStepOnEvent) => void;
    /**
     * @remarks
     * This function will be called when a block ticks.
     *
     */
    onTick?: (arg0: BlockComponentTickEvent) => void;
}