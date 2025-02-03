/* IMPORT */ import { EntityComponent } from '../index';

/**
 * 当添加此组件时，表示该实体不会受到火焰伤害。
 * 
 * When added, this component signifies that this entity
 * doesn't take damage from fire.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityFireImmuneComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:fire_immune';
}