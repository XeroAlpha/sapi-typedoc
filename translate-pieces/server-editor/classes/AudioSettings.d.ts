/* IMPORT */ import { AudioSettingsPropertyTypeMap } from '..';

export class AudioSettings {
    private constructor();
    get<T extends keyof AudioSettingsPropertyTypeMap>(property: T): AudioSettingsPropertyTypeMap[T] | undefined;
    getAll(): AudioSettingsPropertyTypeMap;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws
     */
    set<T extends keyof AudioSettingsPropertyTypeMap>(property: T, value: AudioSettingsPropertyTypeMap[T]): void;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws
     */
    setAll(properties: AudioSettingsPropertyTypeMap): void;
}
