/* IMPORT */ import { EntityComponent } from '../index';

/**
 * 当添加此组件时，会使实体生成时带有指定类型的骑乘者。
 * 
 * When added, this component makes the entity spawn with a
 * rider of the specified entityType.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityAddRiderComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 表示在特定条件下生成该实体时，作为骑乘者添加的实体类型。
     * 
     * The type of entity that is added as a rider for this entity
     * when spawned under certain conditions.
     *
     * @throws This property can throw when used.
     */
    readonly entityType: string;
    /**
     * @remarks
     * 表示当骑乘者为该实体生成时，可选的触发骑乘者的生成事件。
     * 
     * Optional spawn event to trigger on the rider when that rider
     * is spawned for this entity.
     *
     * @throws This property can throw when used.
     */
    readonly spawnEvent: string;
    static readonly componentId = 'minecraft:addrider';
}