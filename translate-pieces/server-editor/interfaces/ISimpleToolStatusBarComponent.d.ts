/* IMPORT */ import { IPlayerUISession, ISimpleTool, IStatusBarItem } from '../index';

export interface ISimpleToolStatusBarComponent {
    get session(): IPlayerUISession;
    get simpleTool(): ISimpleTool;
    get statusBarItem(): IStatusBarItem;
    hide(): void;
    show(): void;
}