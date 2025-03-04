import { fixupPluginRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import stylistic from '@stylistic/eslint-plugin-ts'
import _import from 'eslint-plugin-import';
import jest from 'eslint-plugin-jest';
import unicorn from 'eslint-plugin-unicorn';
import globals from 'globals';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import tseslint from 'typescript-eslint';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all,
});

export default [
    js.configs.recommended,
    ...tseslint.configs.recommended,
    {
        plugins: {
            '@stylistic': stylistic,
            import: fixupPluginRules(_import),
            jest,
            unicorn,
        },

        languageOptions: {
            globals: {
                ...globals.node,
                ...globals.jest,
                ...jest.environments.globals.globals,
            },

            parser: tsParser,
            ecmaVersion: 5,
            sourceType: 'module',

            parserOptions: {
                project: 'tsconfig.json',
            },
        },

        settings: {
            'import/internal-regex': '^(config|core|http-server|logging|operation-log|persistence|test|utils)/',
        },

        rules: {
            'array-bracket-spacing': [
                'error',
                'never'],
            'arrow-parens': 'error',
            'arrow-spacing': 'error',
            'block-spacing': [
                'error',
                'always'],
            'brace-style': [
                'error',
                '1tbs'],
            camelcase: 'off',
            'class-methods-use-this': [
                'warn',
                {
                    exceptMethods: ['intercept', 'configure', 'getSession'],
                },
            ],
            complexity: 'error',
            'comma-dangle': ['warn', 'always-multiline'],
            'computed-property-spacing': [
                'error',
                'never'],
            'constructor-super': 'error',
            curly: 'error',
            'dot-notation': 'error',
            'eol-last': 'error',
            eqeqeq: [
                'error',
                'always',
                {
                    null: 'never',
                },
            ],
            'func-call-spacing': [
                'error',
                'never'],
            'func-style': [
                'error',
                'declaration'],
            'generator-star-spacing': 'error',
            'guard-for-in': 'error',
            'key-spacing': 'error',
            'keyword-spacing': 'error',
            'linebreak-style': 'error',
            'max-len': [
                'error',
                {
                    code: 120,
                    ignoreTemplateLiterals: true,
                    ignoreComments: true,
                },
            ],
            'new-parens': 'error',
            'no-bitwise': 'error',
            'no-caller': 'error',
            'no-console': 'error',
            'no-constant-condition': 'error',
            'no-debugger': 'error',
            'no-delete-var': 'error',
            'no-eval': 'error',
            'no-extra-bind': 'error',
            'no-extra-semi': 'error',
            'no-invalid-this': 'error',
            'no-invalid-regexp': 'error',
            'no-irregular-whitespace': 'error',
            'no-multi-spaces': [
                'error',
                {
                    ignoreEOLComments: true,
                },
            ],
            'no-multi-str': 'error',
            'no-multiple-empty-lines': [
                'error',
                {
                    max: 1,
                    maxBOF: 0,
                    maxEOF: 1,
                },
            ],
            'no-new-func': 'error',
            'no-new-wrappers': 'error',
            'no-octal-escape': 'error',
            'no-param-reassign': 'error',
            'no-plusplus': [
                'error',
                {
                    allowForLoopAfterthoughts: true,
                },
            ],
            'no-regex-spaces': 'error',
            'no-restricted-imports': [
                'error',
                {
                    patterns: ['../*'],
                },
            ],
            'no-return-await': 'error',
            'no-sequences': 'error',
            'no-shadow': 'off',
            'no-sparse-arrays': 'error',
            'no-template-curly-in-string': 'error',
            'no-trailing-spaces': 'error',
            'no-undef-init': 'error',
            'no-unsafe-finally': 'error',
            'no-unused-expressions': 'off',
            'no-unused-labels': 'error',
            'no-useless-rename': 'error',
            'no-var': 'error',
            'no-void': 'error',
            'no-warning-comments': 'warn',
            'no-whitespace-before-property': 'error',
            'no-with': 'error',
            'object-curly-spacing': [
                'error',
                'always'],
            'object-shorthand': [
                'error',
                'always',
                {
                    avoidQuotes: true,
                },
            ],
            'one-var': [
                'error',
                'never'],
            'padded-blocks': [
                'error',
                'never'],
            'prefer-const': 'error',
            'prefer-object-spread': 'error',
            'prefer-template': 'error',
            quotes: [
                'error',
                'single',
                {
                    avoidEscape: true,
                },
            ],
            'quote-props': [
                'error',
                'as-needed'],
            radix: 'error',
            'rest-spread-spacing': 'error',
            'semi-spacing': 'error',
            'space-before-function-paren': [
                'error',
                {
                    asyncArrow: 'always',
                    anonymous: 'always',
                    named: 'never',
                },
            ],
            'space-in-parens': [
                'error',
                'never'],
            'space-infix-ops': 'error',
            'space-unary-ops': 'error',
            'spaced-comment': 'error',
            'switch-colon-spacing': 'error',
            'template-curly-spacing': 'error',
            'template-tag-spacing': 'error',
            'use-isnan': 'error',
            'valid-typeof': 'error',
            'yield-star-spacing': 'error',
            'import/export': 'error',
            'import/first': 'error',
            'import/no-cycle': 'error',
            'import/order': [
                'error',
                {
                    groups: [['builtin', 'external'], ['internal'], ['sibling', 'parent', 'index']],
                    'newlines-between': 'always',
                    alphabetize: {
                        order: 'asc',
                    },
                },
            ],
            'import/no-deprecated': 'warn',
            'import/no-duplicates': 'error',
            'import/no-extraneous-dependencies': 'error',
            'import/no-mutable-exports': 'error',
            'import/no-relative-parent-imports': 'error',
            'import/no-unused-modules': 'error',
            'jest/consistent-test-it': [
                'error',
                {
                    fn: 'test',
                },
            ],
            'jest/expect-expect': [
                'error',
                {
                    assertFunctionNames: ['expect', 'assert*'],
                },
            ],
            'jest/no-alias-methods': 'error',
            'jest/no-commented-out-tests': 'warn',
            'jest/no-conditional-in-test': 'warn',
            'jest/no-deprecated-functions': 'warn',
            'jest/no-disabled-tests': 'warn',
            'jest/no-export': 'error',
            'jest/no-focused-tests': 'error',
            'jest/no-identical-title': 'error',
            'jest/no-jasmine-globals': 'error',
            'jest/no-mocks-import': 'error',
            'jest/no-standalone-expect': [
                'error',
                {
                    additionalTestBlockFunctions: ['beforeEach'],
                },
            ],
            'jest/no-test-prefixes': 'warn',
            'jest/no-test-return-statement': 'error',
            'jest/prefer-lowercase-title': [
                'error',
                {
                    ignore: ['describe'],
                },
            ],
            'jest/prefer-spy-on': 'error',
            'jest/prefer-to-be': 'error',
            'jest/prefer-to-contain': 'error',
            'jest/prefer-to-have-length': 'warn',
            'jest/prefer-todo': 'error',
            'jest/require-to-throw-message': 'error',
            'jest/valid-describe-callback': 'error',
            'jest/valid-expect': 'error',
            'jest/valid-expect-in-promise': 'error',
            'unicorn/filename-case': 'error',
            '@stylistic/member-delimiter-style': [
                'error',
                {
                    singleline: {
                        delimiter: 'comma',
                        requireLast: false,
                    },
                },
            ],
            '@stylistic/semi': 'error',
            '@stylistic/type-annotation-spacing': 'error',
            '@typescript-eslint/array-type': [
                'error',
                {
                    default: 'array',
                },
            ],
            '@typescript-eslint/await-thenable': 'error',
            '@typescript-eslint/adjacent-overload-signatures': 'error',
            '@typescript-eslint/consistent-type-assertions': [
                'error',
                {
                    assertionStyle: 'as',
                },
            ],
            '@typescript-eslint/explicit-function-return-type': [
                'error',
                {
                    allowExpressions: true,
                },
            ],
            '@typescript-eslint/explicit-module-boundary-types': [
                'error',
                {
                    allowHigherOrderFunctions: true,
                    allowTypedFunctionExpressions: true,
                },
            ],
            '@typescript-eslint/member-ordering': [
                'error',
                {
                    default: ['static-field', 'instance-field', 'static-method', 'instance-method'],
                },
            ],
            '@typescript-eslint/naming-convention': [
                'error',
                {
                    selector: 'default',
                    format: ['camelCase'],
                    leadingUnderscore: 'allow',
                    trailingUnderscore: 'forbid',
                },
                {
                    selector: 'variable',
                    format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
                    leadingUnderscore: 'allow',
                },
                {
                    selector: 'function',
                    format: ['camelCase', 'PascalCase'],
                },
                {
                    selector: 'property',
                    format: ['camelCase', 'PascalCase', 'snake_case', 'UPPER_CASE'],
                    leadingUnderscore: 'allow',
                },
                {
                    selector: 'enumMember',
                    format: ['PascalCase'],
                },
                {
                    selector: 'typeLike',
                    format: ['PascalCase'],
                },
            ],
            '@typescript-eslint/no-array-constructor': 'error',
            '@typescript-eslint/no-dynamic-delete': 'error',
            '@typescript-eslint/no-explicit-any': 'error',
            '@typescript-eslint/no-empty-function': [
                'error',
                {
                    allow: ['arrowFunctions'],
                },
            ],
            '@typescript-eslint/no-empty-interface': [
                'error',
                {
                    allowSingleExtends: true,
                },
            ],
            '@typescript-eslint/no-extraneous-class': 'error',
            '@typescript-eslint/no-floating-promises': 'error',
            '@typescript-eslint/no-for-in-array': 'error',
            '@typescript-eslint/no-misused-new': 'error',
            '@typescript-eslint/no-require-imports': 'error',
            '@typescript-eslint/no-shadow': 'error',
            '@typescript-eslint/no-this-alias': 'error',
            '@typescript-eslint/no-unnecessary-qualifier': 'error',
            '@typescript-eslint/no-unnecessary-type-arguments': 'error',
            '@typescript-eslint/no-unnecessary-type-assertion': 'error',
            '@typescript-eslint/no-unused-vars': [
                'error',
                {
                    ignoreRestSiblings: true,
                    argsIgnorePattern: 'error|_.*',
                    varsIgnorePattern: '^_.*',
                },
            ],
            '@typescript-eslint/no-use-before-define': [
                'error',
                {
                    functions: false,
                    classes: false,
                },
            ],
            '@typescript-eslint/no-useless-constructor': 'error',
            '@typescript-eslint/no-var-requires': 'error',
            '@typescript-eslint/only-throw-error': 'error',
            '@typescript-eslint/prefer-for-of': 'error',
            '@typescript-eslint/prefer-function-type': 'error',
            '@typescript-eslint/prefer-nullish-coalescing': 'warn',
            '@typescript-eslint/prefer-optional-chain': 'error',
            '@typescript-eslint/prefer-readonly': 'error',
            '@typescript-eslint/promise-function-async': 'error',
            '@typescript-eslint/require-await': 'error',
            '@typescript-eslint/restrict-plus-operands': 'error',
            '@typescript-eslint/unbound-method': [
                'error',
                {
                    ignoreStatic: true,
                },
            ],
            '@typescript-eslint/unified-signatures': 'error',
        },
    },
    {
        files: ['**/cli*.ts', '**/main*.ts'],
        rules: {
            'no-console': 'off',
        },
    },
    {
        files: ['**/*.spec.ts'],
        rules: {
            'class-methods-use-this': 'off',
            'no-unused-expressions': 'off',
            '@typescript-eslint/no-empty-function': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/unbound-method': 'off',
            '@typescript-eslint/ban-types': 'off',
        },
    },
];
