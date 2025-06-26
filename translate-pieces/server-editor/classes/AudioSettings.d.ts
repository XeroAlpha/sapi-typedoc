/* IMPORT */ import { AudioSettingsProperty } from '../index';

export class AudioSettings {
    private constructor();
    get(property: AudioSettingsProperty): boolean | number | undefined;
    getAll(): Record<string, boolean | number>;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    set(property: AudioSettingsProperty, value: boolean | number): void;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    setAll(properties: Record<string, boolean | number>): void;
}