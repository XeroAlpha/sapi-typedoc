/* IMPORT */ import { Widget, minecraftserver } from '../index';

export class CustomWidget extends Widget {
    private constructor();
    readonly location: minecraftserver.Vector3;
    readonly rotation: minecraftserver.Vector2;
    readonly showTextOnlyWhenSelected: boolean;
    getText(): string;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    moveBy(delta: minecraftserver.Vector3): void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    setText(text: string): void;
}