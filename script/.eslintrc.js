module.exports = {
    root: true,
    plugins: ['prettier'],
    extends: ['eslint:recommended', 'prettier'],
    parserOptions: {
        ecmaVersion: 'latest'
    },
    env: {
        commonjs: true,
        es2021: true,
        node: true
    },
    rules: {
        'prettier/prettier': 'error'
    }
};
