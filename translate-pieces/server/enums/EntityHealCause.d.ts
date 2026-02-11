/**
 * @rc
 * Describes the source of healing of an Entity.
 */
export enum EntityHealCause {
    /**
     * @remarks
     * Healing caused by items such as potions.
     *
     */
    Heal = 'Heal',
    /**
     * @remarks
     * Healing caused by regeneration effects.
     *
     */
    Regeneration = 'Regeneration',
    /**
     * @remarks
     * Healing caused when hunger is full.
     *
     */
    SelfHeal = 'SelfHeal',
}
