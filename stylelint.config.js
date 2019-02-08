module.exports = {
    extends: 'stylelint-config-recess-order',
    rules: {
        'block-no-empty': true,
        'color-no-invalid-hex': true,
        'color-hex-case': 'lower',
        'unit-no-unknown': true,
        'comment-no-empty': true,
        'color-named': 'never',
        'max-nesting-depth': [
            4,
            {
                ignore: ['blockless-at-rules'],
            },
        ],
        'color-hex-length': 'short',
        'length-zero-no-unit': true,
        'property-case': 'lower',
        'unit-case': 'lower',
        'declaration-no-important': true,
        'declaration-colon-space-after': 'always',
        'declaration-colon-space-before': 'never',
        'declaration-block-semicolon-newline-after': 'always-multi-line',
        'block-closing-brace-empty-line-before': 'never',
        'block-closing-brace-newline-after': [
            'always',
            {
                ignoreAtRules: [
                    'if',
                    'else',
                ],
            },
        ],
        'max-empty-lines': [
            1,
            {
                ignore: ['comments'],
            },
        ],
        indentation: 4,
    },
};
