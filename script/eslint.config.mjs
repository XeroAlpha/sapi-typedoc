import js from '@eslint/js';
import prettier from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import ts from 'typescript-eslint';

export default [
    js.configs.recommended,
    ...ts.configs.strictTypeChecked,
    ...ts.configs.stylisticTypeChecked,
    prettier,
    {
        languageOptions: {
            globals: {
                ...globals.node
            },
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname
            }
        },
        rules: {
            '@typescript-eslint/restrict-template-expressions': ['error', { allowNumber: true }]
        }
    }
];
