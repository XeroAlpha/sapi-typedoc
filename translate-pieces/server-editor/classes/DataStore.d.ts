/* IMPORT */ import { DataStoreActionContainer, DataStoreAfterEvents, DataStoreMenuContainer } from '../index';

export class DataStore {
    private constructor();
    readonly actionContainer: DataStoreActionContainer;
    readonly afterEvents: DataStoreAfterEvents;
    readonly menuContainer: DataStoreMenuContainer;
}