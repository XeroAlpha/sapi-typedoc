/* IMPORT */ import { IModalTool, IPlayerUISession, ISimpleTool } from '../index';

export interface ISimpleToolRailComponent {
    get session(): IPlayerUISession;
    get simpleTool(): ISimpleTool;
    get toolRail(): IModalTool;
}