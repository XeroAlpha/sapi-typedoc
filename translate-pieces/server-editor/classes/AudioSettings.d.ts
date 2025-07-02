/* IMPORT */ import { AudioSettingsPropertyTypeMap } from '../index';

export class AudioSettings {
    private constructor();
    get<T extends keyof AudioSettingsPropertyTypeMap>(property: T): AudioSettingsPropertyTypeMap[T] | undefined;
    getAll(): AudioSettingsPropertyTypeMap;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    set<T extends keyof AudioSettingsPropertyTypeMap>(property: T, value: AudioSettingsPropertyTypeMap[T]): void;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    setAll(properties: AudioSettingsPropertyTypeMap): void;
}