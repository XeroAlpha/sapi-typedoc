/**
 * @beta
 * Adds NPC capabilities to an entity such as custom skin,
 * name, and dialogue interactions.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityNpcComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * The DialogueScene that is opened when players first interact
     * with the NPC.
     *
     * This property can't be edited in read-only mode.
     *
     */
    defaultScene: string;
    /**
     * @remarks
     * The name of the NPC as it is displayed to players.
     *
     * This property can't be edited in read-only mode.
     *
     */
    name: string;
    /**
     * @remarks
     * The index of the skin the NPC will use.
     *
     * This property can't be edited in read-only mode.
     *
     */
    skinIndex: number;
    static readonly componentId = 'minecraft:npc';
}