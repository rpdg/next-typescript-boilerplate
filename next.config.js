const path = require('path');
const glob = require('glob');
const webpack = require('webpack');
const withTypescript = require('@zeit/next-typescript');
const sass = require('@zeit/next-sass');
const css = require('@zeit/next-css');
const sourceMaps = require('@zeit/next-source-maps')
const withPlugins = require('next-compose-plugins');

const nextConfig = {
  webpack: (config) => {
    config.plugins.push(new webpack.EnvironmentPlugin(process.env));
    // config.plugins.push(new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/));
    return config;
  },
};

// fix: prevents error when .css files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.css'] = (file) => {}
}

module.exports = withPlugins([
	[css, {
		cssModule: true,
		cssLoaderOptions: {
			importLoaders: 1,
			localIdentName: "[local]___[hash:base64:5]",
		},
	}],
	[sass, {
		cssModule: true,
		cssLoaderOptions: {
			importLoaders: 1,
			localIdentName: "[local]___[hash:base64:5]",
		},
		sassLoaderOptions: {
			includePaths: ['static/scss', 'node_modules']
				.map(d => path.join(__dirname, d))
				.map(g => glob.sync(g))
				.reduce((a, c) => a.concat(c), [])
		},  
	}],
	withTypescript,
	sourceMaps,
], nextConfig);
