/* IMPORT */ import { Vector3 } from '../index';

export class NavigationResult {
    private constructor();
    readonly isFullPath: boolean;
    getPath(): Vector3[];
}