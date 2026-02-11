/* IMPORT */ import { BasicTooltipContent, ICollectionTreeFolder, LocalizedString } from '..';

/**
 * Parameters to create an action button on the folder header
 */
export type ICollectionTreeFolderHeaderActionParams = {
    title?: LocalizedString;
    tooltip?: BasicTooltipContent;
    enabled?: boolean;
    onClick: (folder: ICollectionTreeFolder) => void;
};
