'use strict';

const babelify = require('babelify'),
    browserify = require('browserify'),
    eslint = require('gulp-eslint'),
    gulp = require('gulp'),
    source = require('vinyl-source-stream');

gulp.task('analyse', function () {
  return gulp.src([ 'src/**/*.js' ])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('default', [ 'analyse' ], function () {
  browserify({
    entries: './src/index.js'
  }).
    transform(babelify).
    bundle().
    pipe(source('app.js')).
    pipe(gulp.dest('./build'));
});
