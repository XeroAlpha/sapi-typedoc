/* eslint-disable no-unused-vars */
const { strict: assert } = require('assert');
const { ts } = require('ts-morph');

// FUCK STUPID MOJANG!
/** @type {((context: import('./hook').TranslateHookContext) => void)[]} */
const patches = [];

/** @type {import('./hook').Hook} */
module.exports = {
    afterLoad(context) {
        patches.forEach((f) => f(context));
    }
};
