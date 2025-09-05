/* IMPORT */ import { Block, BlockPermutation, BlockType, Dimension, Direction, Entity, FluidType, GameMode, ItemStack, ItemType, Vector3 } from '../../server';
/* IMPORT */ import { FenceConnectivity, GameTestCompletedError, GameTestError, GameTestSequence, SculkSpreader, SimulatedPlayer } from '..';

/**
 * Main class for GameTest functions, with helpers and data for
 * manipulating the respective test. Note that all methods of
 * this class expect BlockLocations and Locations relative to
 * the GameTest structure block.
 */
export class Test {
    private constructor();
    /**
     * @remarks
     * Tests that the condition specified in _condition_ is true.
     * If not, an error with the specified _message_ is thrown.
     *
     * @param condition
     * Expression of the condition to evaluate.
     * @param message
     * Message that is passed if the _condition_ does not evaluate
     * to true.
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    assert(condition: boolean, message: string): void;
    /**
     * @remarks
     * Tests that a block of the specified type is present at the
     * specified location. If it is not, an exception is thrown.
     *
     * @param blockType
     * Expected block type.
     * @param blockLocation
     * Location of the block to test at.
     * @param isPresent
     * If true, this function tests whether a block of the
     * specified type is at the location. If false, tests that a
     * block of the specified type is not present.
     * Defaults to: true
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    assertBlockPresent(
        blockType: BlockType | string,
        blockLocation: Vector3,
        isPresent?: boolean,
    ): void;
    /**
     * @remarks
     * Tests that a block has a particular state value at the
     * specified location. If it does not have that state value, an
     * exception is thrown.
     *
     * @param blockLocation
     * Location of the block to test at.
     * @param callback
     * Callback function that contains additional tests based on
     * the block at the specified location.
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    assertBlockState(
        blockLocation: Vector3,
        callback: (arg0: Block) => boolean,
    ): void;
    /**
     * @remarks
     * Tests that an entity can reach a particular location.
     * Depending on the value of canReach, throws an exception if
     * the condition is not met.
     *
     * @param mob
     * Entity that you wish to test the location against.
     * @param blockLocation
     * Structure-relative location to test whether the specified
     * mob can reach.
     * @param canReach
     * If true, tests whether the mob can reach the location. If
     * false, tests whether the mob is not able to reach the
     * location.
     * Defaults to: true
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    assertCanReachLocation(
        mob: Entity,
        blockLocation: Vector3,
        canReach?: boolean,
    ): void;
    /**
     * @remarks
     * Tests that a container (e.g., a chest) at the specified
     * location contains a specified of item stack. If not, an
     * error is thrown.
     *
     * @param itemStack
     * Represents the type of item to check for. The specified
     * container must contain at least 1 item matching the item
     * type defined in _itemStack_.
     * @param blockLocation
     * Location of the block with a container (for example, a
     * chest) to test the contents of.
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    assertContainerContains(
        itemStack: ItemStack,
        blockLocation: Vector3,
    ): void;
    /**
     * @remarks
     * Tests that a container (e.g., a chest) at the specified
     * location is empty. If not, an error is thrown.
     *
     * @param blockLocation
     * Location of the block with a container (for example, a
     * chest) to test is empty of contents.
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    assertContainerEmpty(blockLocation: Vector3): void;
    /**
     * @remarks
     * Tests that an entity has a specific piece of armor equipped.
     * If not, an error is thrown.
     *
     * @param entityTypeIdentifier
     * Identifier of the entity to match (e.g.,
     * 'minecraft:skeleton').
     * @param armorSlot
     * Container slot index to test.
     * @param armorName
     * Name of the armor to look for.
     * @param armorData
     * Data value integer to look for.
     * @param blockLocation
     * Location of the entity with armor to test for.
     * @param hasArmor
     * Whether or not the entity is expected to have the specified
     * armor equipped.
     * Defaults to: true
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    assertEntityHasArmor(
        entityTypeIdentifier: string,
        armorSlot: number,
        armorName: string,
        armorData: number,
        blockLocation: Vector3,
        hasArmor?: boolean,
    ): void;
    /**
     * @remarks
     * Tests that an entity has a particular component. If not, an
     * exception is thrown.
     *
     * @param entityTypeIdentifier
     * Identifier of the specified entity (e.g.,
     * 'minecraft:skeleton'). If the namespace is not specified,
     * 'minecraft:' is assumed.
     * @param componentIdentifier
     * Identifier of the component to check for. If the namespace
     * is not specified, 'minecraft:' is assumed.
     * @param blockLocation
     * Location of the block with a container (for example, a
     * chest.)
     * @param hasComponent
     * Determines whether to test that the component exists, or
     * does not.
     * Defaults to: true
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    assertEntityHasComponent(
        entityTypeIdentifier: string,
        componentIdentifier: string,
        blockLocation: Vector3,
        hasComponent?: boolean,
    ): void;
    /**
     * @remarks
     * Depending on the value for isPresent, tests that a
     * particular entity is present or not present at the specified
     * location. Depending on the value of isPresent, if the entity
     * is found or not found, an error is thrown.
     *
     * @param entity
     * Specific entity to test for.
     * @param blockLocation
     * Location of the entity to test for.
     * @param isPresent
     * Whether to test that an entity is present or not present at
     * the specified location.
     * Defaults to: true
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    assertEntityInstancePresent(
        entity: Entity,
        blockLocation: Vector3,
        isPresent?: boolean,
    ): void;
    /**
     * @remarks
     * Tests that an entity instance is present within the GameTest
     * area. If not, an exception is thrown.
     *
     * @param entity
     * Entity instance to test for.
     * @param isPresent
     * If true, this function tests whether the specified entity is
     * present in the GameTest area. If false, tests that the
     * specified entity is not present.
     * Defaults to: true
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     * @seeExample simpleMobTest.ts 582539d0
     */
    assertEntityInstancePresentInArea(entity: Entity, isPresent?: boolean): void;
    /**
     * @remarks
     * Depending on the value of isPresent, tests for the presence
     * or non-presence of entity of a specified type at a
     * particular location. If the condition is not met, an
     * exception is thrown.
     *
     * @param entityTypeIdentifier
     * Type of entity to test for (e.g., 'minecraft:skeleton'). If
     * an entity namespace is not specified, 'minecraft:' is
     * assumed.
     * @param blockLocation
     * Location of the entity to test for.
     * @param searchDistance
     * The distance to search for the entity from the
     * blockLocation.
     * Defaults to: 0
     * @param isPresent
     * If true, this function tests whether an entity of the
     * specified type is present. If false, tests that an entity of
     * the specified type is not present.
     * Defaults to: true
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    assertEntityPresent(
        entityTypeIdentifier: string,
        blockLocation: Vector3,
        searchDistance?: number,
        isPresent?: boolean,
    ): void;
    /**
     * @remarks
     * Tests that an entity of a specified type is present within
     * the GameTest area. If not, an exception is thrown.
     *
     * @param entityTypeIdentifier
     * Type of entity to test for (e.g., 'minecraft:skeleton'). If
     * an entity namespace is not specified, 'minecraft:' is
     * assumed.
     * @param isPresent
     * If true, this function tests whether an entity of the
     * specified type is present in the GameTest area. If false,
     * tests that an entity of the specified type is not present.
     * Defaults to: true
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     * @seeExample simpleMobTest.ts 3a296de4
     * @seeExample simpleMobGameTest.ts
     */
    assertEntityPresentInArea(entityTypeIdentifier: string, isPresent?: boolean): void;
    /**
     * @remarks
     * Tests that an entity (e.g., a skeleton) at the specified
     * location has a particular piece of data. If not, an error is
     * thrown.
     *
     * @param blockLocation
     * Location of the entity to look for.
     * @param entityTypeIdentifier
     * Identifier of the entity (e.g., 'minecraft:skeleton') to
     * look for. Note if no namespace is specified, 'minecraft:' is
     * assumed.
     * @param callback
     * Callback function where facets of the selected entity can be
     * tested for. If this callback function returns false or no
     * entity with the specified identifier is found, an exception
     * is thrown.
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    assertEntityState(
        blockLocation: Vector3,
        entityTypeIdentifier: string,
        callback: (arg0: Entity) => boolean,
    ): void;
    /**
     * @remarks
     * Depending on the value of isTouching, tests that an entity
     * of a specified type is touching or connected to another
     * entity. If the condition is not met, an exception is thrown.
     *
     * @param entityTypeIdentifier
     * Type of entity to test for (e.g., 'minecraft:skeleton'). If
     * an entity namespace is not specified, 'minecraft:' is
     * assumed.
     * @param location
     * Location of the entity to test for.
     * @param isTouching
     * If true, this function tests whether the entity is touching
     * the specified location. If false, tests that an entity is
     * not testing the specified location.
     * Defaults to: true
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    assertEntityTouching(
        entityTypeIdentifier: string,
        location: Vector3,
        isTouching?: boolean,
    ): void;
    /**
     * @remarks
     * Depending on the value of isWaterlogged, tests that a block
     * at a location contains water. If the condition is not met,
     * an error is thrown. Pure water blocks are not considered to
     * be waterlogged.
     *
     * @param blockLocation
     * Location of the block to test for.
     * @param isWaterlogged
     * Whether to test that the block at _position_ is expected to
     * be waterlogged.
     * Defaults to: true
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    assertIsWaterlogged(blockLocation: Vector3, isWaterlogged?: boolean): void;
    /**
     * @remarks
     * Tests that items of a particular type and count are present
     * within an area. If not, an error is thrown.
     *
     * @param itemType
     * Type of item to look for.
     * @param blockLocation
     * Location to search around for the specified set of items.
     * @param searchDistance
     * Range, in blocks, to aggregate a count of items around. If
     * 0, will only search the particular block at _position_.
     * @param count
     * Number of items, at minimum, to look and test for.
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    assertItemEntityCountIs(
        itemType: ItemType | string,
        blockLocation: Vector3,
        searchDistance: number,
        count: number,
    ): void;
    /**
     * @remarks
     * Depending on the value of isPresent, tests whether a
     * particular item entity is present or not at a particular
     * location. If the condition is not met, an exception is
     * thrown.
     *
     * @param itemType
     * Type of item to test for.
     * @param blockLocation
     * Location of the item entity to test for.
     * @param searchDistance
     * Radius in blocks to look for the item entity.
     * Defaults to: 0
     * @param isPresent
     * If true, this function tests whether an item entity of the
     * specified type is present. If false, tests that an item
     * entity of the specified type is not present.
     * Defaults to: true
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    assertItemEntityPresent(
        itemType: ItemType | string,
        blockLocation: Vector3,
        searchDistance?: number,
        isPresent?: boolean,
    ): void;
    /**
     * @remarks
     * Tests that Redstone power at a particular location matches a
     * particular value. If not, an exception is thrown.
     *
     * @param blockLocation
     * Location to test.
     * @param power
     * Expected power level.
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    assertRedstonePower(blockLocation: Vector3, power: number): void;
    /**
     * @remarks
     * Destroys a block at a particular location.
     *
     * @worldMutation
     *
     * @param blockLocation
     * Location of the block to destroy.
     * @param dropResources
     * Whether to add resources exposed with a particular drop.
     * Defaults to: false
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    destroyBlock(blockLocation: Vector3, dropResources?: boolean): void;
    /**
     * @remarks
     * Marks the current test as a failure case.
     *
     * @param errorMessage
     * Error message summarizing the failure condition.
     * @throws This function can throw errors.
     */
    fail(errorMessage: string): void;
    /**
     * @remarks
     * Runs the given callback. If the callback does not throw an
     * exception, the test is marked as a failure.
     *
     * @param callback
     * Callback function that runs. If the function runs
     * successfully, the test is marked as a failure. Typically,
     * this function will have .assertXyz method calls within it.
     * @throws This function can throw errors.
     */
    failIf(callback: () => void): void;
    /**
     * @remarks
     * Gets a block at the specified block location.
     *
     * @worldMutation
     *
     * @param blockLocation
     * Location of the block to retrieve.
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    getBlock(blockLocation: Vector3): Block;
    /**
     * @remarks
     * Gets the dimension of this test.
     *
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    getDimension(): Dimension;
    /**
     * @remarks
     * If the block at the specified block location is a fence,
     * this returns a helper object with details on how a fence is
     * connected.
     *
     * @worldMutation
     *
     * @param blockLocation
     * Location of the block to retrieve.
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    getFenceConnectivity(blockLocation: Vector3): FenceConnectivity;
    /**
     * @remarks
     * Retrieves a sculk spreader object that can be used to
     * control and manage how sculk grows from a block.
     *
     * @worldMutation
     *
     * @param blockLocation
     * Location of the block to retrieve a sculk spreader from.
     * @returns
     * Returns the SculkSpreader or undefined if no SculkSpreader
     * is present on the block.
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    getSculkSpreader(blockLocation: Vector3): SculkSpreader | undefined;
    /**
     * @remarks
     * Returns the direction of the current test - see the {@link
     * minecraftserver.Direction} enum for more information on
     * potential values (north, east, south, west - values 2-5).
     *
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     */
    getTestDirection(): Direction;
    /**
     * @remarks
     * This asynchronous function will wait for the specified time
     * in ticks before continuing execution.
     *
     * @worldMutation
     *
     * @param tickDelay
     * Amount of time to wait, in ticks.
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     */
    idle(tickDelay: number): Promise<void>;
    /**
     * @remarks
     * Returns whether or not the test is currently in the Clean Up
     * step after running.
     *
     * @worldMutation
     *
     */
    isCleaningUp(): boolean;
    /**
     * @remarks
     * Returns whether or not the test has already completed
     *
     * @worldMutation
     *
     */
    isCompleted(): boolean;
    /**
     * @remarks
     * Kills all entities within the GameTest structure.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    killAllEntities(): void;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    onPlayerJump(mob: Entity, jumpAmount: number): void;
    /**
     * @remarks
     * Presses a button at a block location.
     *
     * @worldMutation
     *
     * @param blockLocation
     * Location to push the button at.
     * @throws
     * Will throw an error if a button is not present at the
     * specified position.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    pressButton(blockLocation: Vector3): void;
    /**
     * @remarks
     * Displays the specified message to all players.
     *
     * @worldMutation
     *
     * @param text
     * Message to display.
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    print(text: string): void;
    /**
     * @remarks
     * Pulls a lever at a block location.
     *
     * @worldMutation
     *
     * @param blockLocation
     * Location to pull the lever at.
     * @throws
     * Will throw an error if a lever is not present at the
     * specified position.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    pullLever(blockLocation: Vector3): void;
    /**
     * @remarks
     * Sends a Redstone pulse at a particular location by creating
     * a temporary Redstone block.
     *
     * @worldMutation
     *
     * @param blockLocation
     * Location to pulse Redstone at.
     * @param duration
     * Number of ticks to pulse Redstone.
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    pulseRedstone(blockLocation: Vector3, duration: number): void;
    /**
     * @remarks
     * From a BlockLocation, returns a new BlockLocation with
     * coordinates relative to the current GameTest structure
     * block. For example, the relative coordinates for the block
     * above the structure block are (0, 1, 0). Rotation of the
     * GameTest structure is also taken into account.
     *
     * @param worldBlockLocation
     * Absolute location in the world to convert to a relative
     * location.
     * @returns
     * A location relative to the GameTest command block.
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    relativeBlockLocation(worldBlockLocation: Vector3): Vector3;
    /**
     * @remarks
     * From a location, returns a new location with coordinates
     * relative to the current GameTest structure block. For
     * example, the relative coordinates for the block above the
     * structure block are (0, 1, 0). Rotation of the GameTest
     * structure is also taken into account.
     *
     * @worldMutation
     *
     * @param worldLocation
     * Absolute location in the world to convert to a relative
     * location.
     * @returns
     * A location relative to the GameTest command block.
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    relativeLocation(worldLocation: Vector3): Vector3;
    /**
     * @remarks
     * Removes a simulated player from the world.
     *
     * @worldMutation
     *
     * @param simulatedPlayer
     * Simulated player to remove.
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     */
    removeSimulatedPlayer(simulatedPlayer: SimulatedPlayer): void;
    /**
     * @remarks
     * Returns a relative direction given the current rotation of
     * the current test. Passing in Direction.south will return the
     * test direction; Passing in Direction.north will return the
     * opposite of the test direction, and so on.
     *
     * @worldMutation
     *
     * @param direction
     * Direction to translate into a direction relative to the
     * GameTest facing. Passing in Direction.south will return the
     * test direction; Passing in Direction.north will return the
     * opposite of the test direction, and so on.
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    rotateDirection(direction: Direction): Direction;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    rotateVector(vector: Vector3): Vector3;
    /**
     * @remarks
     * Runs a specific callback after a specified delay of ticks
     *
     * @worldMutation
     *
     * @param delayTicks
     * Number of ticks to delay before running the specified
     * callback.
     * @param callback
     * Callback function to execute.
     * @throws This function can throw errors.
     */
    runAfterDelay(delayTicks: number, callback: () => void): void;
    /**
     * @remarks
     * Runs the given callback after a delay of _tick_ ticks from
     * the start of the GameTest.
     *
     * @worldMutation
     *
     * @param tick
     * Tick (after the start of the GameTest) to run the callback
     * at.
     * @param callback
     * Callback function to execute.
     * @throws This function can throw errors.
     */
    runAtTickTime(tick: number, callback: () => void): void;
    /**
     * @remarks
     * Runs the given callback after the GameTest has completed
     * regardless if the test passed, failed, or timed out.
     *
     * @worldMutation
     *
     * @param callback
     * Callback to execute.
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    runOnFinish(callback: () => void): void;
    /**
     * @remarks
     * Sets a block to a particular configuration (a
     * BlockPermutation) at the specified block location.
     *
     * @worldMutation
     *
     * @param blockData
     * Permutation that contains the configuration data for a
     * block.
     * @param blockLocation
     * Location of the block to set.
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    setBlockPermutation(
        blockData: BlockPermutation,
        blockLocation: Vector3,
    ): void;
    /**
     * @remarks
     * Sets a block to a particular type at the specified block
     * location.
     *
     * @worldMutation
     *
     * @param blockType
     * Type of block to set.
     * @param blockLocation
     * Location of the block to set.
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     * @seeExample minibiomes.ts
     */
    setBlockType(
        blockType: BlockType | string,
        blockLocation: Vector3,
    ): void;
    /**
     * @remarks
     * For blocks that are fluid containers - like a cauldron -
     * changes the type of fluid within that container.
     *
     * @worldMutation
     *
     * @param location
     * Location of the fluid container block.
     * @param type
     * Type of fluid to set. See {@link FluidType}
     * for a list of values.
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    setFluidContainer(location: Vector3, type: FluidType): void;
    /**
     * @remarks
     * Sets the fuse of an explodable entity.
     *
     * @worldMutation
     *
     * @param entity
     * Entity that is explodable.
     * @param fuseLength
     * Length of time, in ticks, before the entity explodes.
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    setTntFuse(entity: Entity, fuseLength: number): void;
    /**
     * @remarks
     * Spawns an entity at a location.
     *
     * @worldMutation
     *
     * @param entityTypeIdentifier
     * Type of entity to create. If no namespace is provided,
     * 'minecraft:' is assumed. Note that an optional initial spawn
     * event can be specified between less than/greater than signs
     * (e.g., namespace:entityType<spawnEvent>).
     * @returns
     * The spawned entity. If the entity cannot be spawned, returns
     * undefined.
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     * @seeExample simpleMobTest.ts 3a296de4
     * @seeExample simpleMobGameTest.ts
     * @seeExample phantomsShouldFlyFromCats.ts
     * @seeExample minibiomes.ts
     */
    spawn(entityTypeIdentifier: string, blockLocation: Vector3): Entity;
    /**
     * @remarks
     * Spawns an entity at a location.
     *
     * @worldMutation
     *
     * @param entityTypeIdentifier
     * Type of entity to create. If no namespace is provided,
     * 'minecraft:' is assumed. Note that an optional initial spawn
     * event can be specified between less than/greater than signs
     * (e.g., namespace:entityType<spawnEvent>).
     * @returns
     * The spawned entity. If the entity cannot be spawned, returns
     * undefined.
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    spawnAtLocation(
        entityTypeIdentifier: string,
        location: Vector3,
    ): Entity;
    /**
     * @remarks
     * Spawns an item entity at a specified location.
     *
     * @worldMutation
     *
     * @param itemStack
     * ItemStack that describes the item entity to create.
     * @param location
     * Location to create the item entity at.
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    spawnItem(
        itemStack: ItemStack,
        location: Vector3,
    ): Entity;
    /**
     * @remarks
     * Creates a new simulated player within the world.
     *
     * @worldMutation
     *
     * @param blockLocation
     * Location where to spawn the simulated player.
     * @param name
     * Name to give the new simulated player.
     * Defaults to: "Simulated Player"
     * @param gameMode
     * Defaults to: 0
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    spawnSimulatedPlayer(
        blockLocation: Vector3,
        name?: string,
        gameMode?: GameMode,
    ): SimulatedPlayer;
    /**
     * @remarks
     * Spawns an entity at a location without any AI behaviors.
     * This method is frequently used in conjunction with methods
     * like .walkTo to create predictable mob actions.
     *
     * @worldMutation
     *
     * @param blockLocation
     * Location where the entity should be spawned.
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    spawnWithoutBehaviors(
        entityTypeIdentifier: string,
        blockLocation: Vector3,
    ): Entity;
    /**
     * @remarks
     * Spawns an entity at a location without any AI behaviors.
     * This method is frequently used in conjunction with methods
     * like .walkTo to create predictable mob actions.
     *
     * @worldMutation
     *
     * @param location
     * Location where the entity should be spawned.
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    spawnWithoutBehaviorsAtLocation(
        entityTypeIdentifier: string,
        location: Vector3,
    ): Entity;
    /**
     * @remarks
     * Tests that a particular item entity is present at a
     * particular location. If not, an exception is thrown.
     *
     * @worldMutation
     *
     * @param blockLocation
     * BlockLocation containing a multiface block.
     * @param fromFace
     * Face to spread from. This face must already be set.
     * @param direction
     * Direction to spread. Use the Minecraft.Direction enum to
     * specify a direction.
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    spreadFromFaceTowardDirection(
        blockLocation: Vector3,
        fromFace: Direction,
        direction: Direction,
    ): void;
    /**
     * @remarks
     * Creates a new GameTestSequence - A set of steps that play
     * out sequentially within a GameTest.
     *
     * @worldMutation
     *
     * @returns
     * A new GameTestSequence with chaining methods that facilitate
     * creating a set of steps.
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     */
    startSequence(): GameTestSequence;
    /**
     * @remarks
     * Marks the current test as a success case.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    succeed(): void;
    /**
     * @remarks
     * Runs the given callback. If the callback does not throw an
     * exception, the test is marked as a success.
     *
     * @worldMutation
     *
     * @param callback
     * Callback function that runs. If the function runs
     * successfully, the test is marked as a success. Typically,
     * this function will have .assertXyz method calls within it.
     * @throws This function can throw errors.
     */
    succeedIf(callback: () => void): void;
    /**
     * @remarks
     * Marks the test as a success at the specified tick.
     *
     * @worldMutation
     *
     * @param tick
     * Tick after the start of the GameTest to mark the test as
     * successful.
     * @throws This function can throw errors.
     */
    succeedOnTick(tick: number): void;
    /**
     * @remarks
     * Runs the given callback at _tick_ ticks after the start of
     * the test. If the callback does not throw an exception, the
     * test is marked as a failure.
     *
     * @worldMutation
     *
     * @param tick
     * Tick after the start of the GameTest to run the testing
     * callback at.
     * @param callback
     * Callback function that runs. If the function runs
     * successfully, the test is marked as a success.
     * @throws This function can throw errors.
     */
    succeedOnTickWhen(tick: number, callback: () => void): void;
    /**
     * @remarks
     * Runs the given callback every tick. When the callback
     * successfully executes, the test is marked as a success.
     * Specifically, the test will succeed when the callback does
     * not throw an exception.
     *
     * @worldMutation
     *
     * @param callback
     * Testing callback function that runs. If the function runs
     * successfully, the test is marked as a success.
     * @throws This function can throw errors.
     * @seeExample simpleMobGameTest.ts
     */
    succeedWhen(callback: () => void): void;
    /**
     * @remarks
     * Depending on the condition of isPresent, tests for the
     * presence of a block of a particular type on every tick. When
     * the specified block of a type is found or not found
     * (depending on isPresent), the test is marked as a success.
     *
     * @worldMutation
     *
     * @param blockType
     * Type of block to test for.
     * @param blockLocation
     * Location of the block to test at.
     * @param isPresent
     * If true, this function tests whether a block of the
     * specified type is present. If false, tests that a block of
     * the specified type is not present.
     * Defaults to: true
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    succeedWhenBlockPresent(
        blockType: BlockType | string,
        blockLocation: Vector3,
        isPresent?: boolean,
    ): void;
    /**
     * @remarks
     * Tests for the presence of a component on every tick.
     * Depending on the value of hasComponent, when the specified
     * component is found, the test is marked as a success.
     *
     * @worldMutation
     *
     * @param entityTypeIdentifier
     * Type of entity to look for. If no namespace is specified,
     * 'minecraft:' is assumed.
     * @param componentIdentifier
     * Type of component to test for the presence of. If no
     * namespace is specified, 'minecraft:' is assumed.
     * @param blockLocation
     * Block location of the entity to test.
     * @param hasComponent
     * If true, this function tests for the presence of a
     * component. If false, this function tests for the lack of a
     * component.
     * @throws This function can throw errors.
     */
    succeedWhenEntityHasComponent(
        entityTypeIdentifier: string,
        componentIdentifier: string,
        blockLocation: Vector3,
        hasComponent: boolean,
    ): void;
    /**
     * @remarks
     * Depending on the value of isPresent, tests for the presence
     * of an entity on every tick. When an entity of the specified
     * type is found or not found (depending on isPresent), the
     * test is marked as a success.
     *
     * @worldMutation
     *
     * @param entityTypeIdentifier
     * Type of entity to test for (e.g., 'minecraft:skeleton'). If
     * an entity namespace is not specified, 'minecraft:' is
     * assumed.
     * @param blockLocation
     * Location of the entity to test for.
     * @param isPresent
     * If true, this function tests whether an entity of the
     * specified type is present. If false, tests that an entity of
     * the specified type is not present.
     * Defaults to: true
     * @throws This function can throw errors.
     * @seeExample phantomsShouldFlyFromCats.ts
     * @seeExample minibiomes.ts
     */
    succeedWhenEntityPresent(
        entityTypeIdentifier: string,
        blockLocation: Vector3,
        isPresent?: boolean,
    ): void;
    /**
     * @remarks
     * Triggers a block event from a fixed list of available block
     * events.
     *
     * @worldMutation
     *
     * @param event
     * Event to trigger. Valid values include minecraft:drip,
     * minecraft:grow_stalagtite, minecraft:grow_stalagmite,
     * minecraft:grow_up, minecraft:grow_down and
     * minecraft:grow_sideways.
     * @param eventParameters
     * Defaults to: []
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    triggerInternalBlockEvent(
        blockLocation: Vector3,
        event: string,
        eventParameters?: number[],
    ): void;
    /**
     * @remarks
     * This asynchronous function will wait until the code in the
     * specified callback successfully completes. until can be used
     * in conjunction with .assert functions to evaluate that a
     * condition is true.
     *
     * @worldMutation
     *
     * @param callback
     * Function with code to evaluate.
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     */
    until(callback: () => void): Promise<void>;
    /**
     * @remarks
     * Forces a mob to walk to a particular location. Usually used
     * in conjunction with methods like .spawnWithoutBehaviors to
     * have more predictable mob behaviors. Mobs will stop
     * navigation as soon as they intersect the target location.
     *
     * @worldMutation
     *
     * @param mob
     * Mob entity to give orders to.
     * @param blockLocation
     * Location where the entity should be walk to.
     * @param speedModifier
     * Adjustable modifier to the mob's walking speed.
     * Defaults to: 1
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    walkTo(
        mob: Entity,
        blockLocation: Vector3,
        speedModifier?: number,
    ): void;
    /**
     * @remarks
     * Forces a mob to walk to a particular location. Usually used
     * in conjunction with methods like .spawnWithoutBehaviors to
     * have more predictable mob behaviors. Mobs will stop
     * navigation as soon as they intersect the target location.
     *
     * @worldMutation
     *
     * @param mob
     * Mob entity to give orders to.
     * @param location
     * Location where the entity should be walk to.
     * @param speedModifier
     * Adjustable modifier to the mob's walking speed.
     * Defaults to: 1
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    walkToLocation(
        mob: Entity,
        location: Vector3,
        speedModifier?: number,
    ): void;
    /**
     * @remarks
     * From a BlockLocation with coordinates relative to the
     * GameTest structure block, returns a new BlockLocation with
     * coordinates relative to world. Rotation of the GameTest
     * structure is also taken into account.
     *
     * @param relativeBlockLocation
     * Location relative to the GameTest command block.
     * @returns
     * An absolute location relative to the GameTest command block.
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    worldBlockLocation(relativeBlockLocation: Vector3): Vector3;
    /**
     * @remarks
     * From a location with coordinates relative to the GameTest
     * structure block, returns a new location with coordinates
     * relative to world. Rotation of the GameTest structure is
     * also taken into account.
     *
     * @param relativeLocation
     * Location relative to the GameTest command block.
     * @returns
     * An absolute location relative to the GameTest command block.
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    worldLocation(relativeLocation: Vector3): Vector3;
}
