/**
 * @beta
 * 表示实体生成原因的枚举。
 *
 * An enum containing reasons an entity could be spawned.
 */
export enum EntitySpawnReason {
	/**
	 * @remarks
	 * 繁殖生成的后代。
	 *
	 * Bred offspring.
	 *
	 */
	Breeding = "Breeding",
	/**
	 * @remarks
	 * 通过桶生成的实体（例如鱼）。
	 *
	 * Spawned from a bucket (e.g. Fish)
	 *
	 */
	Bucket = "Bucket",
	/**
	 * @remarks
	 * 因区块生成而生成的实体。
	 *
	 * Spawned due to a chunk being generated.
	 *
	 */
	ChunkGeneration = "ChunkGeneration",
	/**
	 * @remarks
	 * 通过 /summon 命令生成的实体。
	 *
	 * Spawned via the /summon command.
	 *
	 */
	Command = "Command",
	/**
	 * @remarks
	 * 由其他生物转化生成的实体（例如村民 -> 僵尸村民）。
	 *
	 * Mob converted from another mob (e.g. Villager -> Zombie
	 * Villager).
	 *
	 */
	Conversion = "Conversion",
	/**
	 * @remarks
	 * 从另一个维度传送过来的实体。
	 *
	 * Mob transferred from another dimension.
	 *
	 */
	DimensionTravel = "DimensionTravel",
	/**
	 * @remarks
	 * 通过发射器生成的实体。
	 *
	 * Spawned via dispenser.
	 *
	 */
	Dispenser = "Dispenser",
	/**
	 * @remarks
	 * 因游戏内某些事件生成的实体。
	 *
	 * Mobs spawned due to some in game event.
	 *
	 */
	Event = "Event",
	/**
	 * @remarks
	 * 与其骑乘的实体一起生成的骑乘生物（例如鸡骑士）。
	 *
	 * Jockey spawned with the mob they ride (e.g. Chicken jockey).
	 *
	 */
	Jockey = "Jockey",
	/**
	 * @remarks
	 * 从保存状态加载的实体。
	 *
	 * Mob loaded in from a saved state.
	 *
	 */
	Load = "Load",
	/**
	 * @remarks
	 * 由其他生物召唤生成的实体（例如恼鬼）。
	 *
	 * Mobs summoned via other mobs (e.g. Vex).
	 *
	 */
	MobSummoned = "MobSummoned",
	/**
	 * @remarks
	 * 自然生成的生物。
	 *
	 * Natural Mob Spawning.
	 *
	 */
	Natural = "Natural",
	/**
	 * @remarks
	 * 因巡逻而生成的生物。
	 *
	 * Mobs spawned due to a patrol.
	 *
	 */
	Patrol = "Patrol",
	/**
	 * @remarks
	 * 因增援属性生成的生物（例如僵尸）。
	 *
	 * Mobs spawned from the reinforcement attribute (e.g.
	 * Zombies).
	 *
	 */
	Reinforcement = "Reinforcement",
	/**
	 * @remarks
	 * 通过刷怪蛋生成的实体。
	 *
	 * Spawned from a spawn egg.
	 *
	 */
	SpawnEgg = "SpawnEgg",
	/**
	 * @remarks
	 * 由刷怪笼生成的实体。
	 *
	 * Spawner spawns.
	 *
	 */
	Spawner = "Spawner",
	/**
	 * @remarks
	 * 特定结构内生成的实体（下界堡垒、海底神殿、女巫小屋等）。
	 *
	 * Mobs generated specifically within some structure (Nether
	 * Fortress, Ocean Monument, Witch Hut, etc).
	 *
	 */
	Structure = "Structure",
	/**
	 * @remarks
	 * 由试验性刷怪笼生成的实体。
	 *
	 * Mobs spawned from a Trial Spawner.
	 *
	 */
	TrialSpawner = "TrialSpawner",
	/**
	 * @remarks
	 * 某些玩家触发的生物生成（例如骷髅马陷阱、凋灵、雪傀儡）。
	 *
	 * Some type of player triggered mob spawn (e.g. Skeleton Horse
	 * Traps, Wither, Snow Golem).
	 *
	 */
	Triggered = "Triggered",
}
