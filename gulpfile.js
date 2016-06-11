var gulp = require('gulp');
var preprocess = require('gulp-preprocess');
var ts = require('gulp-typescript');

var package = require('./package.json');

var target = ['./app/*.ts'];
var outputDir = './dist';

gulp.task('debug', function() {
  gulp.src(target)
    .pipe(preprocess({context: { DEBUG: true, VERSION: package.version }}))
    .pipe(ts())
    .pipe(gulp.dest(outputDir));
});

gulp.task('release', function() {
  gulp.src(target)
    .pipe(preprocess({context: { PROD: true, VERSION: package.version }}))
    .pipe(ts())
    .pipe(gulp.dest(outputDir));
});
