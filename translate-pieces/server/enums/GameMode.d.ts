/**
 * Represents a game mode for the current world experience.
 * 表示当前游戏世界的游戏模式。
 */
export enum GameMode {
	/**
	 * @remarks
	 * World is in a more locked-down experience, where blocks may
	 * not be manipulated.
	 *
	 * 表示世界处于限制更多的世界中，方块可能无法被操作。
	 */
	adventure = "adventure",
	/**
	 * @remarks
	 * World is in a full creative mode. In creative mode, the
	 * player has all the resources available in the item selection
	 * tabs and the survival selection tab. They can also destroy
	 * blocks instantly including those which would normally be
	 * indestructible. Command and structure blocks can also be
	 * used in creative mode. Items also do not lose durability or
	 * disappear.
	 *
	 * 表示世界处于创造模式。在创造模式中，玩家可以从物品选择标签和生存选择标签中获得所有资源。他们还可以立即破坏方块，包括那些通常无法破坏的方块。命令方块和结构方块在创造模式中也可以使用。物品也不会失去耐久或消失。
	 */
	creative = "creative",
	/**
	 * @remarks
	 * World is in spectator mode. In spectator mode, spectators
	 * are always flying and cannot become grounded. Spectators can
	 * pass through solid blocks and entities without any
	 * collisions, and cannot use items or interact with blocks or
	 * mobs. Spectators cannot be seen by mobs or other players,
	 * except for other spectators; spectators appear as a
	 * transparent floating head.
	 *
	 * 表示处于旁观者模式。在旁观者模式中，旁观者总是处于飞行状态，无法着陆。旁观者可以穿过实体和实体而不会发生碰撞，不能使用物品或与方块或生物互动。除了其他旁观者外，旁观者不会被生物或其他玩家看到；旁观者显示为一个透明的漂浮头。
	 */
	spectator = "spectator",
	/**
	 * @remarks
	 * World is in a survival mode, where players can take damage
	 * and entities may not be peaceful. Survival mode is where the
	 * player must collect resources, build structures while
	 * surviving in their generated world. Activities can, over
	 * time, chip away at player health and hunger bar.
	 *
	 * 表示处于生存模式，玩家可能会受到伤害，实体可能不友好。在生存模式中，玩家必须在生成的世界中收集资源、建造结构以求生存。活动可能会随着时间的推移逐渐减少玩家的生命值和饥饿值。
	 */
	survival = "survival",
}
