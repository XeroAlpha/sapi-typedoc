/**
 * Modal tool state event payload
 */
export type SelectedModalToolChangedEventPayload = {
    tool:
        | {
              id: string;
              isActive: boolean;
          }
        | undefined;
};
