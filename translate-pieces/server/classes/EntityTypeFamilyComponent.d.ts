/* IMPORT */ import { EntityComponent } from '..';

export class EntityTypeFamilyComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:type_family';
    /**
     * @throws
     */
    getTypeFamilies(): string[];
    /**
     * @throws
     */
    hasTypeFamily(typeFamily: string): boolean;
}
