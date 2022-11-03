const webpack = require("@nativescript/webpack");
const { resolve } = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env) => {
	webpack.init(env);

  webpack.chainWebpack((config) => {
    config.plugin('font-awesome').use(CopyWebpackPlugin, [
      {
        patterns: [
          {
            from: resolve(
              __dirname,
              'node_modules/font-awesome/fonts/fontawesome-webfont.ttf'
            ),
            to: 'fonts',
          },
        ],
      },
    ]);
  });

	return webpack.resolveConfig();
};


