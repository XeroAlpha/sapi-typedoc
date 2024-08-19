/* IMPORT */ import { CustomComponentNameErrorReason } from '../index';

export class CustomComponentNameError extends Error {
    private constructor();
    reason: CustomComponentNameErrorReason;
}