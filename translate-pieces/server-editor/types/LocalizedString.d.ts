/**
 * Represents a localized string or an object with a localized
 * string and optional properties
 */
export declare type LocalizedString =
    | string
    | {
          id: string;
          props?: string[];
      };
