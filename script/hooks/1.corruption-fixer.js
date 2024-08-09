/* eslint-disable no-unused-vars */
const { strict: assert } = require('assert');
const { SyntaxKind } = require('ts-morph');

/** @type {((context: import('./hook').TranslateHookContext) => void)[]} */
const patches = [];

const errors = [];
/** @type {import('./hook').Hook} */
module.exports = {
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
};
