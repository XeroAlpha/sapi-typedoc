/* IMPORT */ import { Direction, Entity, GameTestError, InvalidArgumentError, InvalidEntityError, ItemStack, LookDuration, MoveToOptions, NavigationResult, Player, PlayerSkinData, Vector2, Vector3 } from '../index';

/**
 * A simulated player can be used within GameTests to represent
 * how a player moves throughout the world and to support
 * testing of how entities and the environment will react to a
 * player. This type derives much of its structure and methods
 * from the {@link Player} type. Note that many
 * types of events that may be available for entities more
 * broadly, such as item use events, may not fire in the same
 * capacity for simulated players.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class SimulatedPlayer extends Player {
    private constructor();
    /**
     * @remarks
     * Rotation of the head across pitch and yaw angles.
     *
     * @throws This property can throw when used.
     */
    readonly headRotation: Vector2;
    /**
     * @remarks
     * Returns whether the simulated player is sprinting.
     *
     * @worldMutation
     *
     */
    isSprinting: boolean;
    /**
     * @remarks
     * Causes the simulated player to make an attack 'swipe'.
     * Returns true if the attack was performed - for example, the
     * player was not on cooldown and had a valid target. Target
     * selection is performed by raycasting from the player's head.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    attack(): boolean;
    /**
     * @remarks
     * Causes the simulated player to attack the provided target.
     * Returns true if the attack was performed - for example, the
     * player was not on cooldown and had a valid target. The
     * attack can be performed at any distance and does not require
     * line of sight to the target entity.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    attackEntity(entity: Entity): boolean;
    /**
     * @remarks
     * Destroys the block at blockLocation, respecting the rules of
     * the server player's game mode. The block will be hit until
     * broken, an item is used or stopBreakingBlock is called.
     * Returns true if the block at blockLocation is solid.
     *
     * @worldMutation
     *
     * @param blockLocation
     * Location of the block to interact with.
     * @param direction
     * Direction to place the specified item within.
     * Defaults to: 1
     * @throws This function can throw errors.
     *
     * {@link GameTestError}
     *
     * {@link InvalidEntityError}
     */
    breakBlock(blockLocation: Vector3, direction?: Direction): boolean;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    chat(message: string): void;
    /**
     * @remarks
     * Simulates and performs a disconnection of the simulated
     * player from the world.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    disconnect(): void;
    /**
     * @remarks
     * Drops the simulated player's selected item
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    dropSelectedItem(): boolean;
    /**
     * @remarks
     * Causes the simulated player to start flying as though they
     * were flying in creative mode. For flying with Elytra, see
     * function glide.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    fly(): void;
    /**
     * @remarks
     * Gives the simulated player a particular item stack.
     *
     * @worldMutation
     *
     * @param itemStack
     * Item to give.
     * @param selectSlot
     * Whether to set the selected slot once given.
     * Defaults to: false
     * @throws This function can throw errors.
     */
    giveItem(itemStack: ItemStack, selectSlot?: boolean): boolean;
    /**
     * @remarks
     * Causes the simulated player to start gliding. Elytra must be
     * equipped and the player must be in the air.
     *
     * @worldMutation
     *
     * @returns
     * Returns true if the simulated player begins to glide.
     * Returns false if the player is already gliding, or the
     * player does not have Elytra equipped, is in water or is on
     * the ground.
     * @throws This function can throw errors.
     */
    glide(): boolean;
    /**
     * @remarks
     * Performs a raycast from the player’s head and interacts with
     * the first intersected block or entity. Returns true if the
     * interaction was successful. Maximum range is 6 blocks.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    interact(): boolean;
    /**
     * @remarks
     * Causes the simulated player to interact with a block. The
     * block at the specified block location must be solid. Returns
     * true if the interaction was performed.
     *
     * @worldMutation
     *
     * @param blockLocation
     * Location of the block to interact with.
     * @param direction
     * Direction to place the specified item within.
     * Defaults to: 1
     * @throws This function can throw errors.
     *
     * {@link GameTestError}
     *
     * {@link InvalidEntityError}
     */
    interactWithBlock(
        blockLocation: Vector3,
        direction?: Direction,
    ): boolean;
    /**
     * @remarks
     * Causes the simulated player to interact with a mob. Returns
     * true if the interaction was performed.
     *
     * @worldMutation
     *
     * @param entity
     * Entity to interact with.
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     *
     * {@link InvalidEntityError}
     */
    interactWithEntity(entity: Entity): boolean;
    /**
     * @remarks
     * Causes the simulated player to jump.
     *
     * @worldMutation
     *
     * @returns
     * True if a jump was performed.
     * @throws This function can throw errors.
     */
    jump(): boolean;
    /**
     * @remarks
     * Rotates the simulated player's head/body to look at the
     * given block location.
     *
     * @worldMutation
     *
     * @param duration
     * Defaults to: 2
     * @throws This function can throw errors.
     *
     * {@link GameTestError}
     *
     * {@link InvalidEntityError}
     */
    lookAtBlock(blockLocation: Vector3, duration?: LookDuration): void;
    /**
     * @remarks
     * Rotates the simulated player's head/body to look at the
     * given entity.
     *
     * @worldMutation
     *
     * @param duration
     * Defaults to: 2
     * @throws This function can throw errors.
     */
    lookAtEntity(entity: Entity, duration?: LookDuration): void;
    /**
     * @remarks
     * Rotates the simulated player's head/body to look at the
     * given location.
     *
     * @worldMutation
     *
     * @param duration
     * Defaults to: 2
     * @throws This function can throw errors.
     */
    lookAtLocation(location: Vector3, duration?: LookDuration): void;
    /**
     * @remarks
     * Orders the simulated player to walk in the given direction
     * relative to the GameTest.
     *
     * @worldMutation
     *
     * @param speed
     * Defaults to: 1
     * @throws This function can throw errors.
     */
    move(westEast: number, northSouth: number, speed?: number): void;
    /**
     * @remarks
     * Orders the simulated player to walk in the given direction
     * relative to the player's current rotation.
     *
     * @worldMutation
     *
     * @param speed
     * Defaults to: 1
     * @throws This function can throw errors.
     */
    moveRelative(leftRight: number, backwardForward: number, speed?: number): void;
    /**
     * @remarks
     * Orders the simulated player to move to the given block
     * location in a straight line. If a move or navigation is
     * already playing, this will override the last
     * move/navigation.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    moveToBlock(blockLocation: Vector3, options?: MoveToOptions): void;
    /**
     * @remarks
     * Orders the simulated player to move to the given location in
     * a straight line. If a move or navigation is already playing,
     * this will override the last move/navigation.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link GameTestError}
     *
     * {@link InvalidEntityError}
     */
    moveToLocation(location: Vector3, options?: MoveToOptions): void;
    /**
     * @remarks
     * Orders the simulated player to move to a specific block
     * location using navigation. If a move or navigation is
     * already playing, this will override the last move/walk. Note
     * that if the simulated player gets stuck, that simulated
     * player will stop. The player must be touching the ground in
     * order to start navigation.
     *
     * @worldMutation
     *
     * @param speed
     * Defaults to: 1
     * @throws This function can throw errors.
     *
     * {@link GameTestError}
     *
     * {@link InvalidEntityError}
     */
    navigateToBlock(blockLocation: Vector3, speed?: number): NavigationResult;
    /**
     * @remarks
     * Will use navigation to follow the selected entity to within
     * a one block radius. If a move or navigation is already
     * playing, this will override the last move/navigation.
     *
     * @worldMutation
     *
     * @param speed
     * Defaults to: 1
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     *
     * {@link InvalidEntityError}
     */
    navigateToEntity(entity: Entity, speed?: number): NavigationResult;
    /**
     * @remarks
     * Orders the simulated player to move to a specific location
     * using navigation. If a move or navigation is already
     * playing, this will override the last move/walk. Note that if
     * the simulated player gets stuck, that simulated player will
     * stop. The player must be touching the ground in order to
     * start navigation.
     *
     * @worldMutation
     *
     * @param speed
     * Defaults to: 1
     * @throws This function can throw errors.
     *
     * {@link GameTestError}
     *
     * {@link InvalidEntityError}
     */
    navigateToLocation(location: Vector3, speed?: number): NavigationResult;
    /**
     * @remarks
     * Use navigation to follow the route provided via the
     * locations parameter. If a move or navigation is already
     * playing, this will override the last move/navigation.
     *
     * @worldMutation
     *
     * @param locations
     * A list of locations to use for routing.
     * @param speed
     * Net speed to use for doing the navigation.
     * Defaults to: 1
     * @throws This function can throw errors.
     *
     * {@link GameTestError}
     *
     * {@link InvalidEntityError}
     */
    navigateToLocations(locations: Vector3[], speed?: number): void;
    /**
     * @remarks
     * Respawns the particular simulated player.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    respawn(): boolean;
    /**
     * @remarks
     * Causes the simulated player to turn by the provided angle,
     * relative to the player's current rotation.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    rotateBody(angleInDegrees: number): void;
    /**
     * @remarks
     * Causes the simulated player to turn to face the provided
     * angle, relative to the GameTest.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    setBodyRotation(angleInDegrees: number): void;
    /**
     * @remarks
     * Sets a particular item for the simulated player.
     *
     * @worldMutation
     *
     * @param itemStack
     * Item to set.
     * @param slot
     * Slot to place the given item in.
     * @param selectSlot
     * Whether to set the selected slot once set.
     * Defaults to: false
     * @throws This function can throw errors.
     */
    setItem(itemStack: ItemStack, slot: number, selectSlot?: boolean): boolean;
    /**
     * @remarks
     * Updates information about the player's skin.
     *
     * @worldMutation
     *
     * @param options
     * Options for the skin to set on the player.
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    setSkin(options: PlayerSkinData): void;
    /**
     * @remarks
     * @worldMutation
     *
     * @param slot
     * Defaults to: 0
     * @throws This function can throw errors.
     */
    startBuild(slot?: number): void;
    /**
     * @remarks
     * Stops destroying the block that is currently being hit.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    stopBreakingBlock(): void;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    stopBuild(): void;
    /**
     * @remarks
     * Causes the simulated player to stop flying.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    stopFlying(): void;
    /**
     * @remarks
     * Causes the simulated player to stop gliding.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    stopGliding(): void;
    /**
     * @remarks
     * Stops interacting with entities or blocks.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    stopInteracting(): void;
    /**
     * @remarks
     * Stops moving/walking/following if the simulated player is
     * moving.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    stopMoving(): void;
    /**
     * @remarks
     * Causes the simulated player to stop swimming.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    stopSwimming(): void;
    /**
     * @remarks
     * Stops using the currently active item.
     *
     * @worldMutation
     *
     * @returns
     * Returns the item that was in use. Undefined if no item was
     * in use.
     * @throws This function can throw errors.
     */
    stopUsingItem(): ItemStack | undefined;
    /**
     * @remarks
     * Causes the simulated player to start swimming.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    swim(): void;
    /**
     * @remarks
     * Causes the simulated player to use an item. Does not consume
     * the item. Returns false if the item is on cooldown.
     *
     * @worldMutation
     *
     * @param itemStack
     * Item to use.
     * @throws This function can throw errors.
     */
    useItem(itemStack: ItemStack): boolean;
    /**
     * @remarks
     * Causes the simulated player to hold and use an item in their
     * inventory.
     *
     * @worldMutation
     *
     * @param slot
     * Index of the inventory slot.
     * @throws This function can throw errors.
     */
    useItemInSlot(slot: number): boolean;
    /**
     * @remarks
     * Causes the simulated player to use an item in their
     * inventory on a block. The block at the specified block
     * location must be solid. Returns true if the item was used.
     *
     * @worldMutation
     *
     * @param slot
     * Index of the slot to use.
     * @param blockLocation
     * Location to use the item upon.
     * @param direction
     * Direction to place the specified item within.
     * Defaults to: 1
     * @param faceLocation
     * Location relative to the bottom north-west corner of the
     * block where the item is placed.
     * Defaults to: null
     * @throws This function can throw errors.
     *
     * {@link GameTestError}
     *
     * {@link InvalidEntityError}
     */
    useItemInSlotOnBlock(
        slot: number,
        blockLocation: Vector3,
        direction?: Direction,
        faceLocation?: Vector3,
    ): boolean;
    /**
     * @remarks
     * Causes the simulated player to use an item on a block. The
     * block at the specified block location must be solid. Returns
     * true if the item was used.
     *
     * @worldMutation
     *
     * @param itemStack
     * Item to use.
     * @param blockLocation
     * Location to use the item upon.
     * @param direction
     * Direction to place the specified item within.
     * Defaults to: 1
     * @param faceLocation
     * Location relative to the bottom north-west corner of the
     * block where the item is placed.
     * Defaults to: null
     * @throws This function can throw errors.
     *
     * {@link GameTestError}
     *
     * {@link InvalidEntityError}
     */
    useItemOnBlock(
        itemStack: ItemStack,
        blockLocation: Vector3,
        direction?: Direction,
        faceLocation?: Vector3,
    ): boolean;
}