/* IMPORT */ import { GameTestError } from '..';

/**
 * @remarks
 * Sets a callback that is called before the batch gets called.
 * This will overwrite previously set callbacks for this batch.
 *
 * @worldMutation
 *
 * @earlyExecution
 *
 * @param batchName
 * Name of the batch of tests the callback will run before.
 * @throws {GameTestError}
 */
export function setBeforeBatchCallback(batchName: string, batchCallback: () => void): void;
