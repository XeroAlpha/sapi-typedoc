/**
 * @beta
 * Thrown when the SpawnRulesRegistry is accessed outside of
 * ModuleStartupEvent.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class SpawnRulesInvalidRegistryError extends Error {
    private constructor();
}