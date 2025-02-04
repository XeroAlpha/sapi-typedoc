/**
 * Game rules. These values can also be controlled via the
 * /gamerule command.
 * 
 * 游戏规则。这些值也可以通过 /gamerule 命令来控制。
 */
export enum GameRule {
    /**
     * @remarks
     * Whether command blocks should notify admins when they
     * perform commands.
     *
     * 是否在命令方块执行命令时通知管理员。
     */
    CommandBlockOutput = 'commandBlockOutput',
    /**
     * @remarks
     * Controls whether command blocks can execute commands.
     *
     * 控制命令方块是否可以执行命令。
     */
    CommandBlocksEnabled = 'commandBlocksEnabled',
    /**
     * @remarks
     * Controls whether the day and night cycles progress.
     *
     * 控制昼夜循环是否进行。
     */
    DoDayLightCycle = 'doDayLightCycle',
    /**
     * @remarks
     * Controls whether non-mob entities do drops. ie. Item Frame
     *
     * 控制非生物实体是否掉落物品。例如，物品展示框。
     */
    DoEntityDrops = 'doEntityDrops',
    /**
     * @remarks
     * Controls whether fire spreads.
     *
     * 控制火是否蔓延。
     */
    DoFireTick = 'doFireTick',
    /**
     * @remarks
     * Controls whether players immediately respawn or are shown
     * the death screen.
     *
     * 控制玩家是立即重生还是显示死亡界面。
     */
    DoImmediateRespawn = 'doImmediateRespawn',
    /**
     * @remarks
     * Controls whether players deal with the effects of not
     * sleeping (such as Phantom spawning).
     *
     * 控制玩家是否受到不睡觉的影响（例如幻翼生成）。
     */
    DoInsomnia = 'doInsomnia',
    /**
     * @remarks
     * Determines whether players should be able to craft only
     * those recipes that they've unlocked first - when
     * dolimitedcrafting is set to true.
     *
     * 决定玩家是否只能合成已解锁的配方 - 当 dolimitedcrafting 为 true 时。
     */
    DoLimitedCrafting = 'doLimitedCrafting',
    /**
     * @remarks
     * Controls whether mobs drop loot.
     *
     * 控制生物是否掉落战利品。
     */
    DoMobLoot = 'doMobLoot',
    /**
     * @remarks
     * Controls whether mobs spawn naturally in the world.
     *
     * 控制生物是否自然生成在世界中。
     */
    DoMobSpawning = 'doMobSpawning',
    /**
     * @remarks
     * Controls whether blocks drop items when destroyed.
     *
     * 控制方块被破坏时是否掉落物品。
     */
    DoTileDrops = 'doTileDrops',
    /**
     * @remarks
     * Controls whether the weather can change naturally.
     *
     * 控制天气是否可以自然变化。
     */
    DoWeatherCycle = 'doWeatherCycle',
    /**
     * @remarks
     * Controls whether entities take damage from drowning.
     *
     * 控制实体是否因溺水而受伤。
     */
    DrowningDamage = 'drowningDamage',
    /**
     * @remarks
     * Controls whether entities take damage from falling.
     *
     * 控制实体是否因坠落而受伤。
     */
    FallDamage = 'fallDamage',
    /**
     * @remarks
     * Controls whether entities take damage from fire.
     *
     * 控制实体是否因火而受伤。
     */
    FireDamage = 'fireDamage',
    /**
     * @remarks
     * Controls whether there is damage from freezing.
     *
     * 控制是否因冻结而受伤。
     */
    FreezeDamage = 'freezeDamage',
    /**
     * @remarks
     * The maximum number of commands that can be executed
     * simultaneously by the /function command.
     *
     * /function 命令可以同时执行的最大命令数量。
     */
    FunctionCommandLimit = 'functionCommandLimit',
    /**
     * @remarks
     * Controls whether players keep their inventories when they
     * die.
     *
     * 控制玩家死亡时是否保留物品栏。
     */
    KeepInventory = 'keepInventory',
    /**
     * @remarks
     * The maximum number of chained commands that can execute per
     * tick.
     *
     * 每个刻可以执行的最大连锁命令数量。
     */
    MaxCommandChainLength = 'maxCommandChainLength',
    /**
     * @remarks
     * Controls whether mob griefing can happen in the world.
     * Example: A Creeper explosion destroying blocks.
     *
     * 控制生物破坏是否可以发生在世界中。例如：苦力怕爆炸破坏方块。
     */
    MobGriefing = 'mobGriefing',
    /**
     * @remarks
     * Controls whether players can regenerate health.
     *
     * 控制玩家是否可以再生生命值。
     */
    NaturalRegeneration = 'naturalRegeneration',
    /**
     * @remarks
     * The percentage of players required to be sleeping in order
     * to advance to the next day.
     *
     * 需要多少百分比的玩家入睡才能进入第二天。
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
     * 控制投射物（具有投射物组件的实体，如箭、投掷的三叉戟或烟花）是否可以破坏某些支持此交互的方块（如歌萤果、滴水石或装饰罐）。对哪些投射物可以破坏哪些方块有相应限制。
     */
    ProjectilesCanBreakBlocks = 'projectilesCanBreakBlocks',
    /**
     * @remarks
     * Controls whether players can damage each other.
     *
     * 控制玩家是否可以互相伤害。
     */
    Pvp = 'pvp',
    /**
     * @remarks
     * Controls how frequently random ticks occur. A value of 0 or
     * less will disable random ticks. The default value is 1.
     *
     * 控制随机刻的发生频率。值为0或更小将禁用随机刻。默认值为1。
     */
    RandomTickSpeed = 'randomTickSpeed',
    /**
     * @remarks
     * Controls whether built-in (vanilla) recipes automatically
     * unlock as the player progresses through the game (one
     * alternative to this is to use the /recipe command based on
     * custom gameplay logic.)
     *
     * 控制内置（原版）配方是否会随着玩家游戏进程自动解锁（另一种选择是根据自定义游戏逻辑使用 /recipe 命令）。
     */
    RecipesUnlock = 'recipesUnlock',
    /**
     * @remarks
     * Controls whether respawn blocks (e.g. Bed, Respawn Anchor)
     * explode in other dimensions.
     *
     * 控制重生方块（例如床、重生锚）是否在其他维度爆炸。
     */
    RespawnBlocksExplode = 'respawnBlocksExplode',
    /**
     * @remarks
     * Controls whether command output is displayed to players.
     * Also controls whether Command Block output is stored by
     * default.
     *
     * 控制是否向玩家显示命令输出。还控制是否默认存储命令方块输出。
     */
    SendCommandFeedback = 'sendCommandFeedback',
    /**
     * @remarks
     * Controls whether Border Block effects are shown.
     *
     * 控制是否显示边界方块效果。
     */
    ShowBorderEffect = 'showBorderEffect',
    /**
     * @remarks
     * Controls whether player coordinates are displayed.
     *
     * 控制是否显示玩家坐标。
     */
    ShowCoordinates = 'showCoordinates',
    /**
     * @remarks
     * Controls whether the days a player has played is displayed.
     *
     * 控制是否显示玩家已玩天数。
     */
    ShowDaysPlayed = 'showDaysPlayed',
    /**
     * @remarks
     * Controls whether death messages are displayed in chat.
     *
     * 控制是否在聊天中显示死亡消息。
     */
    ShowDeathMessages = 'showDeathMessages',
    /**
     * @remarks
     * Controls whether standard player notifications for recipes
     * will show. When set to false, 'player unlocked recipes' are
     * no longer sent as player notifications.
     *
     * 控制是否显示配方的标准玩家通知。当设置为 false 时，“玩家解锁配方”不再作为玩家通知发送。
     */
    ShowRecipeMessages = 'showRecipeMessages',
    /**
     * @remarks
     * Controls whether item tags are shown. E.g. 'Can Place On',
     * 'Can Destroy', item lock icons, etc.
     *
     * 控制是否显示物品标签。例如“可以放置在”、“可以破坏”、“物品锁定图标”等。
     */
    ShowTags = 'showTags',
    /**
     * @remarks
     * The block radius from world spawn that a player is allowed
     * to spawn in. Does not affect Adventure mode. The default
     * value is 10 blocks.
     *
     * 玩家可以在世界出生点生成的方块半径。不影响冒险模式。默认值为10个方块。
     */
    SpawnRadius = 'spawnRadius',
    /**
     * @remarks
     * Affects whether TNT blocks can be lit.
     *
     * 影响TNT方块是否可以被点燃。
     */
    TntExplodes = 'tntExplodes',
    /**
     * @remarks
     * Controls whether blocks randomly drop loot or all blocks
     * drop loot when destroyed by an explosion. Defaults to false.
     *
     * 控制方块在爆炸时是否随机掉落战利品或所有方块都掉落战利品。默认为 false。
     */
    TntExplosionDropDecay = 'tntExplosionDropDecay',
}