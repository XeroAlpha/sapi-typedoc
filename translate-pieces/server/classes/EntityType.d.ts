/**
 * Represents information about a type of entity.
 */
export class EntityType {
    private constructor();
    /**
     * @remarks
     * Identifier of this entity type - for example,
     * 'minecraft:skeleton'.
     *
     */
    readonly id: string;
    /**
     * @beta
     * @remarks
     * Key for the localization of this EntityType's name used in
     * .lang files.
     *
     */
    readonly localizationKey: string;
}
