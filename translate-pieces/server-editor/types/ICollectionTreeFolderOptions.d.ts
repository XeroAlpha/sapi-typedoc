/* IMPORT */ import { RGBA } from '../../server';
/* IMPORT */ import { ICollectionTreeEntry, ICollectionTreeFolder, ICollectionTreeFolderHeaderActionParams, IMenuCreationParams, LocalizedString } from '..';

/**
 * Contains collection folders and entries
 */
export type ICollectionTreeFolderOptions = {
    uniqueId?: string;
    title?: LocalizedString;
    selected?: boolean;
    expanded?: boolean;
    visible?: boolean;
    removable?: boolean;
    selectable?: boolean;
    userData?: unknown;
    color?: RGBA;
    action?: ICollectionTreeFolderHeaderActionParams;
    menu?: IMenuCreationParams[];
    onMenuClicked?: (menuId: string, folder: ICollectionTreeFolder) => void;
    onSelectedChange?: (selected: boolean, folder: ICollectionTreeFolder) => void;
    onBeforeRemoved?: (folder: ICollectionTreeFolder) => boolean;
    onBeforeEntryRemoved?: (entry: ICollectionTreeEntry) => boolean;
};
