/* IMPORT */ import { minecraftserver } from '../index';

export class NavigationResult {
    private constructor();
    readonly isFullPath: boolean;
    getPath(): minecraftserver.Vector3[];
}