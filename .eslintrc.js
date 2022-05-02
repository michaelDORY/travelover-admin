module.exports = {
    extends: [
        'prettier',
        'plugin:prettier/recommended',
    ],
    plugins: ['react'],
    env: {
        browser: true,
        es6: true,
    },
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    ignorePatterns: ['.eslintrc.js'],
    rules: {
        'linebreak-style': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/prop-types': 'off',
        'no-param-reassign': ['error', { props: false }],
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto',
                trailingComma: 'all',
            },
        ],
    },
};
