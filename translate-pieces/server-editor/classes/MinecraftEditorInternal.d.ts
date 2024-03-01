/* IMPORT */ import { DataStore, minecraftserver } from '../index';

export class MinecraftEditorInternal {
    private constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getDataStore(player: minecraftserver.Player): DataStore;
}