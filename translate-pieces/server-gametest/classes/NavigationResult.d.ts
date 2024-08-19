/* IMPORT */ import { minecraftserver } from '../index';

/**
 * @beta
 */
export class NavigationResult {
    private constructor();
    readonly isFullPath: boolean;
    getPath(): minecraftserver.Vector3[];
}