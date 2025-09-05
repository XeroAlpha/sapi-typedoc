/* IMPORT */ import { EntityComponent } from '..';

/**
 * When present on an entity, this entity is on fire.
 * @seeExample setOnFire.ts
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityOnFireComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * The number of ticks remaining before the fire goes out.
     *
     */
    readonly onFireTicksRemaining: number;
    static readonly componentId = 'minecraft:onfire';
}
