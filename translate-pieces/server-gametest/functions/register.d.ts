/* IMPORT */ import { RegistrationBuilder, Test } from '../index';

/**
 * @beta
 * @remarks
 * Registers a new GameTest function. This GameTest will become
 * available in Minecraft via /gametest run
 * [testClassName]:[testName].
 *
 * This function can't be called in read-only mode.
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
 * @example simpleMobTest.ts
 * ```typescript
 * import * as gameTest from '@minecraft/server-gametest';
 *
 * gameTest
 *     .register('StarterTests', 'simpleMobTest', (test: gameTest.Test) => {
 *         const attackerId = 'fox';
 *         const victimId = 'chicken';
 *
 *         test.spawn(attackerId, { x: 5, y: 2, z: 5 });
 *         test.spawn(victimId, { x: 2, y: 2, z: 2 });
 *
 *         test.assertEntityPresentInArea(victimId, true);
 *
 *         test.succeedWhen(() => {
 *             test.assertEntityPresentInArea(victimId, false);
 *         });
 *     })
 *     .maxTicks(400)
 *     .structureName('gametests:mediumglass');
 * ```
 */
export function register(
    testClassName: string,
    testName: string,
    testFunction: (arg: Test) => void,
): RegistrationBuilder;