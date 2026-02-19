/**
 * An error that is thrown when level storage save state
 * management are used out of sequence or are repeated in an
 * invalid way.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class LevelStorageSaveStateChangeError extends Error {
    private constructor();
}
