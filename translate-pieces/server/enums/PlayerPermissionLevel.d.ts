/**
 * The player permission level.
 */
export enum PlayerPermissionLevel {
    /**
     * @remarks
     * Visitors can only observe the world, not interact with it.
     *
     */
    Visitor = 0,
    /**
     * @remarks
     * Members can build and mine, attack players and mobs, and
     * interact with items and entities.
     *
     */
    Member = 1,
    /**
     * @remarks
     * Operators can teleport and use commands, in addition to
     * everything Members can do.
     *
     */
    Operator = 2,
    Custom = 3,
}