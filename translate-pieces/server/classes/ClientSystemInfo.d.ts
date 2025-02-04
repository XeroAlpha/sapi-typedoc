/* IMPORT */ import { PlatformType, SystemInfo } from '../index';

/**
 * 描述了客户端实例的设备信息。
 *
 * Contains the device information for a client instance.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ClientSystemInfo extends SystemInfo {
	private constructor();
	/**
	 * @remarks
	 * 设备的最大渲染距离（以区块为单位）。
	 *
	 * The max render distance for the device in chunks.
	 *
	 */
	readonly maxRenderDistance: number;
	/**
	 * @remarks
	 * 设备的平台类型。
	 *
	 * The platform type of the device.
	 *
	 */
	readonly platformType: PlatformType;
}
