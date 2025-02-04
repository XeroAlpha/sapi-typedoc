/**
 * @beta
 * 表示实体生成类别的枚举。
 *
 * An enum containing categories of entity spawning.
 */
export enum EntitySpawnCategory {
	/**
	 * @remarks
	 * 表示是环境生成的生物。
	 *
	 * Mobs that have an ambient spawn.
	 *
	 */
	Ambient = "Ambient",
	/**
	 * @remarks
	 * 表示专门为美西螈生成的类别。
	 *
	 * Specific spawn for axolotls.
	 *
	 */
	Axolotls = "Axolotls",
	/**
	 * @remarks
	 * 表示生物生成。
	 *
	 * Creature spawns.
	 *
	 */
	Creature = "Creature",
	/**
	 * @remarks
	 * 表示其他的生成（例如村民、铁傀儡）。
	 *
	 * Miscellaneous spawns (e.g. Villager, Iron Golem).
	 *
	 */
	Misc = "Misc",
	/**
	 * @remarks
	 * 表示怪物生成。
	 *
	 * Monster spawns.
	 *
	 */
	Monster = "Monster",
	/**
	 * @remarks
	 * 表示在地下水中生成的生物。
	 *
	 * Creatures that spawn underground in the water.
	 *
	 */
	UndergroundWaterCreature = "UndergroundWaterCreature",
	/**
	 * @remarks
	 * 表示是环境生成的水生生物。
	 *
	 * Water mobs that have an ambient spawn.
	 *
	 */
	WaterAmbient = "WaterAmbient",
	/**
	 * @remarks
	 * 表示水生生物生成。
	 *
	 * Water creature spawns.
	 *
	 */
	WaterCreature = "WaterCreature",
}