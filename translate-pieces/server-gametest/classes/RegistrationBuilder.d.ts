/* IMPORT */ import { DimensionType, EngineError, InvalidArgumentError, Vector3 } from '../index';

/**
 * A utility class to set GameTest parameters for a test.
 * Methods can be chained together to set multiple properties.
 */
export class RegistrationBuilder {
    private constructor();
    /**
     * @remarks
     * Sets the batch for the test to run in.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param batchName
     * Name of the batch for the test.
     * @returns
     * RegistrationBuilder object where additional configuration
     * methods can be called.
     */
    batch(batchName: string): RegistrationBuilder;
    /**
     * @remarks
     * Sets the maximum number of times a test will try to rerun if
     * it fails.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @returns
     * RegistrationBuilder object where additional configuration
     * methods can be called.
     */
    maxAttempts(attemptCount: number): RegistrationBuilder;
    /**
     * @remarks
     * Sets the maximum number of ticks a test will run for before
     * timing out and failing.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @returns
     * RegistrationBuilder object where additional configuration
     * methods can be called.
     */
    maxTicks(tickCount: number): RegistrationBuilder;
    /**
     * @remarks
     * Size around the GameTest, in blocks, that should be reserved
     * for the test when running multiple tests together.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param paddingBlocks
     * Size, in blocks, around the GameTest where additional
     * GameTests should not be created.
     * @returns
     * RegistrationBuilder object where additional configuration
     * methods can be called.
     */
    padding(paddingBlocks: number): RegistrationBuilder;
    /**
     * @remarks
     * Whether this test is required to pass as part of its broader
     * set of tests.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param isRequired
     * If set to true, the test must pass in order for the entire
     * run of tests to pass.
     * @returns
     * RegistrationBuilder object where additional configuration
     * methods can be called.
     */
    required(isRequired: boolean): RegistrationBuilder;
    /**
     * @remarks
     * Sets the number of successful test runs to be considered
     * successful.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @returns
     * RegistrationBuilder object where additional configuration
     * methods can be called.
     */
    requiredSuccessfulAttempts(attemptCount: number): RegistrationBuilder;
    /**
     * @remarks
     * If true, runs the test in all four rotations when run via
     * /gametest runset.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    rotateTest(rotate: boolean): RegistrationBuilder;
    /**
     * @remarks
     * Sets the number of ticks for a test to wait before executing
     * when the structure is spawned.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @returns
     * RegistrationBuilder object where additional configuration
     * methods can be called.
     */
    setupTicks(tickCount: number): RegistrationBuilder;
    /**
     * @remarks
     * Overrides the default structure placement with a specific
     * location and dimension. If height (y) is set to
     * Dimension.heightRange.max, the structure will snap to the
     * ground. If the dimension is not specified, it will run in
     * the dimension the command was run from.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @returns
     * RegistrationBuilder object where additional configuration
     * methods can be called.
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     *
     * {@link InvalidArgumentError}
     */
    structureLocation(
        structureLocation: Vector3,
        structureDimension?: DimensionType | string,
    ): RegistrationBuilder;
    /**
     * @remarks
     * Sets the name of the structure for a test to use. "xyz:bar"
     * will load `/structures/xyz/bar.mcstructure` from the
     * behavior pack stack.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @returns
     * RegistrationBuilder object where additional configuration
     * methods can be called.
     * @seeExample phantomsShouldFlyFromCats.ts
     */
    structureName(structureName: string): RegistrationBuilder;
    /**
     * @remarks
     * Adds a tag to a test. You can run all tests with a given tag
     * with `/gametest runset <tag>`.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @returns
     * RegistrationBuilder object where additional configuration
     * methods can be called.
     * @seeExample phantomsShouldFlyFromCats.ts
     */
    tag(tag: string): RegistrationBuilder;
}