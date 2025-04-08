/**
 * Game rules. These values can also be controlled via the
 * /gamerule command.
 */
export enum GameRule {
    /**
     * @remarks
     * Whether command blocks should notify admins when they
     * perform commands.
     *
     */
    CommandBlockOutput = 'commandBlockOutput',
    /**
     * @remarks
     * Controls whether command blocks can execute commands.
     *
     */
    CommandBlocksEnabled = 'commandBlocksEnabled',
    /**
     * @remarks
     * Controls whether the day and night cycles progress.
     *
     */
    DoDayLightCycle = 'doDayLightCycle',
    /**
     * @remarks
     * Controls whether non-mob entities do drops. ie. Item Frame
     *
     */
    DoEntityDrops = 'doEntityDrops',
    /**
     * @remarks
     * Controls whether fire spreads.
     *
     */
    DoFireTick = 'doFireTick',
    /**
     * @remarks
     * Controls whether players immediately respawn or are shown
     * the death screen.
     *
     */
    DoImmediateRespawn = 'doImmediateRespawn',
    /**
     * @remarks
     * Controls whether players deal with the effects of not
     * sleeping (such as Phantom spawning).
     *
     */
    DoInsomnia = 'doInsomnia',
    /**
     * @remarks
     * Determines whether players should be able to craft only
     * those recipes that they've unlocked first - when
     * dolimitedcrafting is set to true.
     *
     */
    DoLimitedCrafting = 'doLimitedCrafting',
    /**
     * @remarks
     * Controls whether mobs drop loot.
     *
     */
    DoMobLoot = 'doMobLoot',
    /**
     * @remarks
     * Controls whether mobs spawn naturally in the world.
     *
     */
    DoMobSpawning = 'doMobSpawning',
    /**
     * @remarks
     * Controls whether blocks drop items when destroyed.
     *
     */
    DoTileDrops = 'doTileDrops',
    /**
     * @remarks
     * Controls whether the weather can change naturally.
     *
     */
    DoWeatherCycle = 'doWeatherCycle',
    /**
     * @remarks
     * Controls whether entities take damage from drowning.
     *
     */
    DrowningDamage = 'drowningDamage',
    /**
     * @remarks
     * Controls whether entities take damage from falling.
     *
     */
    FallDamage = 'fallDamage',
    /**
     * @remarks
     * Controls whether entities take damage from fire.
     *
     */
    FireDamage = 'fireDamage',
    /**
     * @remarks
     * Controls whether there is damage from freezing.
     *
     */
    FreezeDamage = 'freezeDamage',
    /**
     * @remarks
     * The maximum number of commands that can be executed
     * simultaneously by the /function command.
     *
     */
    FunctionCommandLimit = 'functionCommandLimit',
    /**
     * @remarks
     * Controls whether players keep their inventories when they
     * die.
     *
     */
    KeepInventory = 'keepInventory',
    /**
     * @beta
     */
    LocatorBar = 'locatorBar',
    /**
     * @remarks
     * The maximum number of chained commands that can execute per
     * tick.
     *
     */
    MaxCommandChainLength = 'maxCommandChainLength',
    /**
     * @remarks
     * Controls whether mob griefing can happen in the world.
     * Example: A Creeper explosion destroying blocks.
     *
     */
    MobGriefing = 'mobGriefing',
    /**
     * @remarks
     * Controls whether players can regenerate health.
     *
     */
    NaturalRegeneration = 'naturalRegeneration',
    /**
     * @remarks
     * The percentage of players required to be sleeping in order
     * to advance to the next day.
     *
     */
    PlayersSleepingPercentage = 'playersSleepingPercentage',
    /**
     * @remarks
     * Controls whether projectiles (entities with a projectile
     * component, like Arrows, thrown Tridents or Fireworks) can
     * destroy certain blocks that support this interaction (such
     * as Chorus Fruit, Dripstone or Decorated Pots). Restrictions
     * on which projectiles can destroy certain blocks apply.
     *
     */
    ProjectilesCanBreakBlocks = 'projectilesCanBreakBlocks',
    /**
     * @remarks
     * Controls whether players can damage each other.
     *
     */
    Pvp = 'pvp',
    /**
     * @remarks
     * Controls how frequently random ticks occur. A value of 0 or
     * less will disable random ticks. The default value is 1.
     *
     */
    RandomTickSpeed = 'randomTickSpeed',
    /**
     * @remarks
     * Controls whether built-in (vanilla) recipes automatically
     * unlock as the player progresses through the game (one
     * alternative to this is to use the /recipe command based on
     * custom gameplay logic.)
     *
     */
    RecipesUnlock = 'recipesUnlock',
    /**
     * @remarks
     * Controls whether respawn blocks (e.g. Bed, Respawn Anchor)
     * explode in other dimensions.
     *
     */
    RespawnBlocksExplode = 'respawnBlocksExplode',
    /**
     * @remarks
     * Controls whether command output is displayed to players.
     * Also controls whether Command Block output is stored by
     * default.
     *
     */
    SendCommandFeedback = 'sendCommandFeedback',
    /**
     * @remarks
     * Controls whether Border Block effects are shown.
     *
     */
    ShowBorderEffect = 'showBorderEffect',
    /**
     * @remarks
     * Controls whether player coordinates are displayed.
     *
     */
    ShowCoordinates = 'showCoordinates',
    /**
     * @remarks
     * Controls whether the days a player has played is displayed.
     *
     */
    ShowDaysPlayed = 'showDaysPlayed',
    /**
     * @remarks
     * Controls whether death messages are displayed in chat.
     *
     */
    ShowDeathMessages = 'showDeathMessages',
    /**
     * @remarks
     * Controls whether standard player notifications for recipes
     * will show. When set to false, 'player unlocked recipes' are
     * no longer sent as player notifications.
     *
     */
    ShowRecipeMessages = 'showRecipeMessages',
    /**
     * @remarks
     * Controls whether item tags are shown. E.g. 'Can Place On',
     * 'Can Destroy', item lock icons, etc.
     *
     */
    ShowTags = 'showTags',
    /**
     * @remarks
     * The block radius from world spawn that a player is allowed
     * to spawn in. Does not affect Adventure mode. The default
     * value is 10 blocks.
     *
     */
    SpawnRadius = 'spawnRadius',
    /**
     * @remarks
     * Affects whether TNT blocks can be lit.
     *
     */
    TntExplodes = 'tntExplodes',
    /**
     * @remarks
     * Controls whether blocks randomly drop loot or all blocks
     * drop loot when destroyed by an explosion. Defaults to false.
     *
     */
    TntExplosionDropDecay = 'tntExplosionDropDecay',
}