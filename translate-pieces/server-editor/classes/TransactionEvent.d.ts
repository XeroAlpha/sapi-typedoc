/* IMPORT */ import { TransactionProcessState } from '..';

export class TransactionEvent {
    private constructor();
    readonly error?: Error;
    readonly isUndo: boolean;
    readonly state: TransactionProcessState;
}
