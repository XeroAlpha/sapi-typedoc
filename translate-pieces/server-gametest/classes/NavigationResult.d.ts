/* IMPORT */ import { Vector3 } from '../../server';

export class NavigationResult {
    private constructor();
    readonly isFullPath: boolean;
    getPath(): Vector3[];
}
