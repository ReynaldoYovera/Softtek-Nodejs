const { src, dest } = require('gulp');
const uglify = require('gulp-uglify-es').default;

const minify = () => {
	return src('./cache/src/**/*.js')
		.pipe(uglify({ mangle: true }))
		.pipe(dest('dist'));
};

exports.minify = minify;

