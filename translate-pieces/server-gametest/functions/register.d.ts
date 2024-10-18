/* IMPORT */ import { RegistrationBuilder, Test } from '../index';

/**
 * @remarks
 * Registers a new GameTest function. This GameTest will become
 * available in Minecraft via `/gametest run
 * [testClassName]:[testName]`.
 *
 * This function can't be called in read-only mode.
 *
 * This function can be called in early-execution mode.
 *
 * @param testClassName
 * Name of the class of tests this test should be a part of.
 * @param testName
 * Name of this specific test.
 * @param testFunction
 * Implementation of the test function.
 * @returns
 * Returns a {@link RegistrationBuilder} object where
 * additional options for this test can be specified via
 * builder methods.
 * @seeExample simpleMobGameTest.ts
 */
export function register(
    testClassName: string,
    testName: string,
    testFunction: (arg: Test) => void,
): RegistrationBuilder;