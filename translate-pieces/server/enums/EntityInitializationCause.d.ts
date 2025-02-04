/**
 * An enumeration describing initialization cause of an entity.
 *
 * 表示实体初始化原因的枚举。
 */
export enum EntityInitializationCause {
	/**
	 * @remarks
	 * Case when an entity is created as child of other entity or
	 * entities, e.g., cows making a cow or slimes making smaller
	 * slimes after dying.
	 *
	 * 表示当一个实体作为其他实体或实体的子实体被创建时的情况，例如，牛生小牛或史莱姆死亡后生成小史莱姆。
	 */
	Born = "Born",
	/**
	 * @remarks
	 * Case when an entity is created by an event, e.g., a
	 * Wandering trader spawning llamas.
	 *
	 * 表示当一个实体由事件生成时的情况，例如，流浪商人生成羊驼。
	 */
	Event = "Event",
	/**
	 * @remarks
	 * Case when an entity is loaded into the world.
	 *
	 * 表示当一个实体被加载到世界中时的情况。
	 */
	Loaded = "Loaded",
	/**
	 * @remarks
	 * Case when an entity is naturally spawned in the world.
	 *
	 * 表示当一个实体自然生成在世界中时的情况。
	 */
	Spawned = "Spawned",
	/**
	 * @remarks
	 * Case when an entity is transformed into another entity.
	 *
	 * 表示当一个实体转变为另一个实体时的情况。
	 */
	Transformed = "Transformed",
}
