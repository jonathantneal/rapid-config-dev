module.exports = {
	css: {
		plugins: [
			require('postcss-partial-import')(),
			require('postcss-cssnext')({
				'autoprefixer': false
			}),
			require('postcss-easings')(),
			require('postcss-short')(),
			require('postcss-svg-fragments')(),
			require('postcss-vmax')(),
			require('cssnano')({
				'autoprefixer': false
			})
		],
		syntax: require('postcss-scss')
	},
	js: {
		plugins: [
			require('rollup-plugin-json')(),
			require('rollup-plugin-node-resolve')({
				jsnext: true
			}),
			require('rollup-plugin-babel')({
				presets: [
					require('babel-preset-env')({
						loose: true,
						modules: false
					})
				],
				plugins: [
					require('babel-plugin-external-helpers')
				]
			}),
			require('rollup-plugin-uglify')()
		]
	}
};
