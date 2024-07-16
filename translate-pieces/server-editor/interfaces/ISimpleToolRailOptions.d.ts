/* IMPORT */ import { ISimpleToolRailComponent } from '../index';

/**
 * The tool rail component allows the tool to register an icon
 * and button (and dynamic tooltip) in the tool rail on the
 * left side of the display. Adding a tool rail component to a
 * tool will cause the tool to be considered a `modal tool`,
 * and only one single modal tool can be active at any one
 * time. Modal tools are generally tools which take focus and
 * control of the cursor (e.g. selection, clipboards, entity
 * selection, etc) Global tools (tools which do not have a tool
 * rail) are generally things like property pages, settings,
 * etc - things that do not require an active cursor or
 * gameplay interaction
 */
export interface ISimpleToolRailOptions {
    /**
     * @remarks
     * The icon for the tool rail button. This is generally a URL
     * to an image file in the editor extension resource pack e.g.
     * `pack://textures/my-tool-icon.png`
     *
     */
    icon: string;
    onActivate?: (component: ISimpleToolRailComponent) => void;
    onDeactivate?: (component: ISimpleToolRailComponent) => void;
    onFinalize?: (component: ISimpleToolRailComponent) => void;
    onTeardown?: (component: ISimpleToolRailComponent) => void;
    /**
     * @remarks
     * The text for the tool title
     *
     */
    title: string;
    /**
     * @remarks
     * The tooltip description for the tool. Note: if an activation
     * key binding was added to `ISimpleToolOptions`, then the key
     * binding will be appended to the tooltip string.
     *
     */
    tooltip: string;
}