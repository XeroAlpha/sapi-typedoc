/* IMPORT */ import { IModalTool, ModalToolCreationParameters, NoArgsAction, RegisteredAction } from '../index';

export interface IModalToolContainer {
    /**
     * @remarks
     * Tools within this container.
     *
     */
    readonly currentTools: IModalTool[];
    addTool(params: ModalToolCreationParameters, action?: RegisteredAction<NoArgsAction>): IModalTool;
    getSelectedToolId(): string | undefined;
    removeTool(id: string): void;
    setSelectedToolId(id: string | undefined): void;
}