module.exports = {
	css: {
		plugins: [
			require('postcss-partial-import')(),
			require('postcss-cssnext')({
				autoprefixer: false
			}),
			require('postcss-easings')(),
			require('postcss-short')(),
			require('postcss-svg-fragments')(),
			require('postcss-vmax')(),
			require('cssnano')({
				autoprefixer: false,
				normalizeUrl: false,
				svgo: false
			})
		],
		syntax: require('postcss-scss')
	},
	js: {
		plugins: [
			require('rollup-plugin-json')(),
			require('rollup-plugin-node-resolve')(),
			require('rollup-plugin-commonjs')({
				include: 'node_modules/**'
			}),
			require('rollup-plugin-babel')({
				babelrc: false,
				plugins: [
					require('babel-plugin-external-helpers')
				],
				presets: [
					[
						require('babel-preset-env'),
						{
							modules: false
						}
					]
				]
			}),
			require('rollup-plugin-uglify')()
		]
	}
};
