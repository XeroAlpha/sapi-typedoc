/* IMPORT */ import { DefinitionModifier, Entity } from '..';

/**
 * @beta
 * Contains information related to firing of a data driven
 * entity version upgrade.
 */
export class EntityUpgradeAfterEvent {
    private constructor();
    /**
     * @remarks
     * Entity that the upgrade triggered on.
     *
     */
    readonly entity: Entity;
    /**
     * @remarks
     * Name of the data driven upgrade being triggered.
     *
     */
    readonly upgradeId: string;
    /**
     * @remarks
     * An updateable list of modifications to component state that
     * are the effect of this triggered upgrade.
     *
     */
    getModifiers(): DefinitionModifier[];
}
