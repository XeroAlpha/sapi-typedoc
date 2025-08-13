/**
 * @beta
 * Pack setting name and value that changed.
 */
export class PackSettingChangeAfterEvent {
    private constructor();
    /**
     * @remarks
     * The name of the setting.
     *
     */
    readonly settingName: string;
    /**
     * @remarks
     * The value of the setting.
     *
     */
    readonly settingValue: boolean | number | string;
}