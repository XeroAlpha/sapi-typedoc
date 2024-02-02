/* IMPORT */ import { minecraftserver } from '../index';

export class PrimarySelectionChangedEvent {
    private constructor();
    readonly volume?: minecraftserver.CompoundBlockVolume;
}