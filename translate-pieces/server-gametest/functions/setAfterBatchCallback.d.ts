/* IMPORT */ import { GameTestError } from '..';

/**
 * @remarks
 * Sets a callback that is called after the batch gets called.
 * This will overwrite previously set callbacks for this batch.
 *
 * @worldMutation
 *
 * @earlyExecution
 *
 * @param batchName
 * Name of the batch of tests the callback will run after.
 * @throws This function can throw errors.
 *
 * {@link GameTestError}
 */
export function setAfterBatchCallback(batchName: string, batchCallback: () => void): void;
