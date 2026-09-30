/* IMPORT */ import { SpeedSettingsPropertyTypeMap } from '..';

export class SpeedSettings {
    private constructor();
    get<T extends keyof SpeedSettingsPropertyTypeMap>(property: T): SpeedSettingsPropertyTypeMap[T] | undefined;
    getAll(): SpeedSettingsPropertyTypeMap;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws
     */
    set<T extends keyof SpeedSettingsPropertyTypeMap>(property: T, value: SpeedSettingsPropertyTypeMap[T]): void;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws
     */
    setAll(properties: SpeedSettingsPropertyTypeMap): void;
}
