/**
 * Describes what kind of platform is a device.
 *
 * 表示设备属于哪种平台。
 */
export enum PlatformType {
	/**
	 * @remarks
	 * Specialized gaming device.
	 *
	 * 表示专用游戏设备。
	 */
	Console = "Console",
	/**
	 * @remarks
	 * Personal Computer (PC).
	 *
	 * 表示个人电脑（PC）。
	 */
	Desktop = "Desktop",
	/**
	 * @remarks
	 * Handheld device such smartphone or tablet.
	 *
	 * 表示手持设备，例如智能手机或平板电脑。
	 */
	Mobile = "Mobile",
}
