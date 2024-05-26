/* IMPORT */ import { IModalTool, IPlayerUISession, ISimpleTool } from '../index';

export interface ISimpleToolRailComponent {
    /**
     * @remarks
     * Get a reference to the IPlayerUISession. This is the primary
     * interface to the editor UI and all of the editor extension
     * controls
     *
     */
    get session(): IPlayerUISession;
    /**
     * @remarks
     * Get a reference to the parent tool.
     *
     */
    get simpleTool(): ISimpleTool;
    /**
     * @remarks
     * Get the implementation interface of the underlying tool rail
     * component
     *
     */
    get toolRail(): IModalTool;
}