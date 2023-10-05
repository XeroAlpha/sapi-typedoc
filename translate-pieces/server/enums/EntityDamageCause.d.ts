/**
 * @beta
 * Describes the source of damage from an Entity.
 */
export enum EntityDamageCause {
    /**
     * @beta
     * @remarks
     * Damage caused by a falling anvil.
     *
     */
    anvil = 'anvil',
    /**
     * @beta
     * @remarks
     * Damage caused from a non-Entity explosion. For example, an
     * exploding bed.
     *
     */
    blockExplosion = 'blockExplosion',
    campfire = 'campfire',
    /**
     * @beta
     * @remarks
     * Unused.
     *
     */
    charging = 'charging',
    /**
     * @beta
     * @remarks
     * Damage caused by physically touching an Entity or Block. For
     * example, touching a Sweet Berry bush or Pufferfish.
     *
     */
    contact = 'contact',
    /**
     * @beta
     * @remarks
     * Damage caused by an Entity being out of air and inside a
     * liquid block.
     *
     */
    drowning = 'drowning',
    /**
     * @beta
     * @remarks
     * Damage caused by an Entity attack.
     *
     */
    entityAttack = 'entityAttack',
    /**
     * @beta
     * @remarks
     * Damage caused by an Entity explosion. For example, a Creeper
     * or Wither.
     *
     */
    entityExplosion = 'entityExplosion',
    /**
     * @beta
     * @remarks
     * Damage caused by falling onto the ground.
     *
     */
    fall = 'fall',
    /**
     * @beta
     * @remarks
     * Damage caused by falling blocks. Note: Anvils and
     * Stalactites have their own damage causes.
     *
     */
    fallingBlock = 'fallingBlock',
    /**
     * @beta
     * @remarks
     * Damage caused by catching on fire.
     *
     */
    fire = 'fire',
    /**
     * @beta
     * @remarks
     * Damage caused by burning over time.
     *
     */
    fireTick = 'fireTick',
    /**
     * @beta
     * @remarks
     * Damage caused by fireworks.
     *
     */
    fireworks = 'fireworks',
    /**
     * @beta
     * @remarks
     * Damage caused by flying into a wall at high speed while
     * gliding with Elytra.
     *
     */
    flyIntoWall = 'flyIntoWall',
    /**
     * @beta
     * @remarks
     * Damage caused by staying inside a Powder Snow block.
     *
     */
    freezing = 'freezing',
    /**
     * @beta
     * @remarks
     * Damage caused by touching a Lava block.
     *
     */
    lava = 'lava',
    /**
     * @beta
     * @remarks
     * Damage caused by being struck by lightning.
     *
     */
    lightning = 'lightning',
    /**
     * @beta
     * @remarks
     * Damage caused by magical attacks. For example, Evoker Fang
     * or Conduit Block.
     *
     */
    magic = 'magic',
    /**
     * @beta
     * @remarks
     * Damage caused by touching a Magma block.
     *
     */
    magma = 'magma',
    /**
     * @beta
     * @remarks
     * Damage caused by no source. For example, from a command or
     * script.
     *
     */
    none = 'none',
    /**
     * @beta
     * @remarks
     * Damage caused by an indirect source. For example, setting a
     * mob's health to 0 in a behavior pack.
     *
     */
    override = 'override',
    /**
     * @beta
     * @remarks
     * Damage caused by a Piston.
     *
     */
    piston = 'piston',
    /**
     * @beta
     * @remarks
     * Damage caused by a projectile.
     *
     */
    projectile = 'projectile',
    ramAttack = 'ramAttack',
    sonicBoom = 'sonicBoom',
    soulCampfire = 'soulCampfire',
    /**
     * @beta
     * @remarks
     * Damage caused by a falling Stalactite block.
     *
     */
    stalactite = 'stalactite',
    /**
     * @beta
     * @remarks
     * Damage caused by touching a Stalagmite block.
     *
     */
    stalagmite = 'stalagmite',
    /**
     * @beta
     * @remarks
     * Damage caused over time by having an empty hunger bar.
     *
     */
    starve = 'starve',
    /**
     * @beta
     * @remarks
     * Damage caused by an Entity being out of air and inside a
     * non-liquid block.
     *
     */
    suffocation = 'suffocation',
    /**
     * @beta
     * @remarks
     * Damage caused by an Entity killing itself. For example, from
     * the /kill command.
     *
     */
    suicide = 'suicide',
    /**
     * @beta
     * @remarks
     * Damage caused by an Entity being in an inhabitable climate.
     * For example, a Snow Golem in a biome with a temperature
     * greater than 1.
     *
     */
    temperature = 'temperature',
    /**
     * @beta
     * @remarks
     * Damage caused by the Thorns armor enchantment and by the
     * Guardian thorns effect.
     *
     */
    thorns = 'thorns',
    /**
     * @beta
     * @remarks
     * Damage caused over time by falling into the void.
     *
     */
    'void' = 'void',
    /**
     * @beta
     * @remarks
     * Damage caused by the Wither effect. For example, from
     * touching a Wither Rose.
     *
     */
    wither = 'wither',
}