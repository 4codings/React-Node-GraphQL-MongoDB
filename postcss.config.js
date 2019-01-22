const postcssReset = require('postcss-css-reset');
const postcssPresetEnv = require('postcss-preset-env');
const postcssNested = require('postcss-nested');

module.exports = {
    plugins: [
        postcssReset,
        postcssNested,
        postcssPresetEnv({
            stage: 0,
            features: {
                'custom-properties': false,
            },
        }),
    ],
};
