/**
 * Describes the source of damage from an Entity.
 * 表示实体的伤害来源。
 */
export enum EntityDamageCause {
	/**
	 * @remarks
	 * Damage caused by a falling anvil.
	 *
	 * 表示由掉落的铁砧造成的伤害。
	 */
	anvil = "anvil",
	/**
	 * @remarks
	 * Damage caused from a non-Entity explosion. For example, an
	 * exploding bed.
	 *
	 * 表示由非实体爆炸造成的伤害。例如，爆炸的床。
	 */
	blockExplosion = "blockExplosion",
	/**
	 * @remarks
	 * Damage caused by Campfires.
	 *
	 * 表示由营火造成的伤害。
	 */
	campfire = "campfire",
	/**
	 * @remarks
	 * Unused.
	 *
	 * 未使用。
	 */
	charging = "charging",
	/**
	 * @remarks
	 * Damage caused by physically touching an Entity or Block. For
	 * example, touching a Sweet Berry bush or Pufferfish.
	 *
	 * 表示通过物理接触实体或方块造成的伤害。例如，接触甜浆果灌木或河豚。
	 */
	contact = "contact",
	/**
	 * @remarks
	 * Damage caused by an Entity being out of air and inside a
	 * liquid block.
	 *
	 * 表示实体因缺氧且位于液体方块中而造成的伤害。
	 */
	drowning = "drowning",
	/**
	 * @remarks
	 * Damage caused by an Entity attack.
	 *
	 * 表示由实体攻击造成的伤害。
	 */
	entityAttack = "entityAttack",
	/**
	 * @remarks
	 * Damage caused by an Entity explosion. For example, a Creeper
	 * or Wither.
	 *
	 * 表示由实体爆炸造成的伤害。例如，苦力怕或凋灵。
	 */
	entityExplosion = "entityExplosion",
	/**
	 * @remarks
	 * Damage caused by falling onto the ground.
	 *
	 * 表示因坠落到地面造成的伤害。
	 */
	fall = "fall",
	/**
	 * @remarks
	 * Damage caused by falling blocks. Note: Anvils and
	 * Stalactites have their own damage causes.
	 *
	 * 表示由掉落的方块造成的伤害。注意：铁砧和钟乳石有各自的伤害原因。
	 */
	fallingBlock = "fallingBlock",
	/**
	 * @remarks
	 * Damage caused by catching on fire.
	 *
	 * 表示因着火造成的伤害。
	 */
	fire = "fire",
	/**
	 * @remarks
	 * Damage caused by burning over time.
	 *
	 * 表示因长时间燃烧造成的伤害。
	 */
	fireTick = "fireTick",
	/**
	 * @remarks
	 * Damage caused by fireworks.
	 *
	 * 表示由烟花造成的伤害。
	 */
	fireworks = "fireworks",
	/**
	 * @remarks
	 * Damage caused by flying into a wall at high speed while
	 * gliding with Elytra.
	 *
	 * 表示在使用鞘翅滑翔时高速撞墙造成的伤害。
	 */
	flyIntoWall = "flyIntoWall",
	/**
	 * @remarks
	 * Damage caused by staying inside a Powder Snow block.
	 *
	 * 表示因停留在细雪方块中造成的伤害。
	 */
	freezing = "freezing",
	/**
	 * @remarks
	 * Damage caused by touching a Lava block.
	 *
	 * 表示因接触岩浆方块造成的伤害。
	 */
	lava = "lava",
	/**
	 * @remarks
	 * Damage caused by being struck by lightning.
	 *
	 * 表示因被闪电击中造成的伤害。
	 */
	lightning = "lightning",
	maceSmash = "maceSmash",
	/**
	 * @remarks
	 * Damage caused by magical attacks. For example, Evoker Fang
	 * or Conduit Block.
	 *
	 * 表示由魔法攻击造成的伤害。例如，唤魔者尖牙或潮涌核心。
	 */
	magic = "magic",
	/**
	 * @remarks
	 * Damage caused by touching a Magma block.
	 *
	 * 表示因接触岩浆块造成的伤害。
	 */
	magma = "magma",
	/**
	 * @remarks
	 * Damage caused by no source. For example, from a command or
	 * script.
	 *
	 * 表示无特定来源的伤害。例如，由命令或脚本造成的伤害。
	 */
	none = "none",
	/**
	 * @remarks
	 * Damage caused by an indirect source. For example, setting a
	 * mob's health to 0 in a behavior pack.
	 *
	 * 表示由间接来源造成的伤害。例如，在行为包中将生物的生命值设为0。
	 */
	override = "override",
	/**
	 * @remarks
	 * Damage caused by a Piston.
	 *
	 * 表示由活塞造成的伤害。
	 */
	piston = "piston",
	/**
	 * @remarks
	 * Damage caused by a projectile.
	 *
	 * 表示由抛射物造成的伤害。
	 */
	projectile = "projectile",
	/**
	 * @remarks
	 * Damage caused by Goat ramming.
	 *
	 * 表示由山羊冲撞造成的伤害。
	 */
	ramAttack = "ramAttack",
	/**
	 * @remarks
	 * Damage caused by the /kill command.
	 *
	 * 表示由 /kill 命令造成的伤害。
	 */
	selfDestruct = "selfDestruct",
	/**
	 * @remarks
	 * Damage caused by the Warden's Sonic Boom attack.
	 *
	 * 表示由监守者的音波攻击造成的伤害。
	 */
	sonicBoom = "sonicBoom",
	/**
	 * @remarks
	 * Damage caused by a Soul Campfire.
	 *
	 * 表示由灵魂营火造成的伤害。
	 */
	soulCampfire = "soulCampfire",
	/**
	 * @remarks
	 * Damage caused by a falling Stalactite block.
	 *
	 * 表示由掉落的钟乳石方块造成的伤害。
	 */
	stalactite = "stalactite",
	/**
	 * @remarks
	 * Damage caused by touching a Stalagmite block.
	 *
	 * 表示因接触石笋方块造成的伤害。
	 */
	stalagmite = "stalagmite",
	/**
	 * @remarks
	 * Damage caused over time by having an empty hunger bar.
	 *
	 * 表示因饥饿条为空而持续造成的伤害。
	 */
	starve = "starve",
	/**
	 * @remarks
	 * Damage caused by an Entity being out of air and inside a
	 * non-liquid block.
	 *
	 * 表示实体因缺氧且位于非液体方块中而造成的伤害。
	 */
	suffocation = "suffocation",
	/**
	 * @remarks
	 * Damage caused by an Entity killing itself. For example, from
	 * the /kill command.
	 *
	 * 表示实体自杀造成的伤害。例如，由 /kill 命令导致的伤害。
	 */
	suicide = "suicide",
	/**
	 * @remarks
	 * Damage caused by an Entity being in an inhabitable climate.
	 * For example, a Snow Golem in a biome with a temperature
	 * greater than 1.
	 *
	 * 表示实体处于不适宜生存的气候中造成的伤害。例如，雪傀儡处于温度大于1的生物群系中。
	 */
	temperature = "temperature",
	/**
	 * @remarks
	 * Damage caused by the Thorns armor enchantment and by the
	 * Guardian thorns effect.
	 *
	 * 表示由荆棘护甲附魔和守卫者荆棘效果造成的伤害。
	 */
	thorns = "thorns",
	/**
	 * @remarks
	 * Damage caused over time by falling into the void.
	 *
	 * 表示因掉入虚空而持续造成的伤害。
	 */
	"void" = "void",
	/**
	 * @remarks
	 * Damage caused by the Wither effect. For example, from
	 * touching a Wither Rose.
	 *
	 * 表示因凋零效果造成的伤害。例如，接触凋零玫瑰。
	 */
	wither = "wither",
}
