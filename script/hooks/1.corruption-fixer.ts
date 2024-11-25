/* eslint-disable @typescript-eslint/no-unused-vars */
import { strict as assert } from 'assert';
import { SyntaxKind } from 'ts-morph';
import type { Hook, TranslateHookContext } from './hook.js';

const patches: ((context: TranslateHookContext) => void)[] = [];

const errors: unknown[] = [];
export default {
    afterLoad(context) {
        patches.forEach((f) => {
            try {
                f(context);
            } catch (err) {
                errors.push(err);
            }
        });
    },
    beforeConvert() {
        if (errors.length > 0) {
            const error = new AggregateError(errors);
            errors.length = 0;
            throw error;
        }
    }
} as Hook;
