const gulp  = require('gulp');
const del   = require('del');
const shell = require('gulp-shell');

gulp.task('build:clean', (done) => {
	del(['./build/*']);
	done();
});

gulp.task('build:prepare', () => {
	return gulp.src(['./app/**/*',
									 'app.js',
									 './views',
									 'package.json',
									 'README.md'],
									 { base:'.' }).
			pipe(gulp.dest('./build/'));
});

gulp.task('build:pack', shell.task('cd build; npm pack'));

gulp.task('build:publish', shell.task('cd build; npm publish'));

gulp.task('build', gulp.series('build:clean',
															 'build:prepare',
															 'build:pack',
															 'build:publish'));