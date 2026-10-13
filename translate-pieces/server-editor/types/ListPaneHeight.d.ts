/* IMPORT */ import { ListPaneHeightType } from '..';

/**
 * A supported ListPane height configuration.
 */
export declare type ListPaneHeight =
    | {
          type: ListPaneHeightType.Fixed;
          height?: number;
      }
    | {
          type: ListPaneHeightType.Fit;
      }
    | {
          type: ListPaneHeightType.Expand;
          maxHeight?: number;
      };
