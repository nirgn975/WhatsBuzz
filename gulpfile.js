'use strict';

var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var cssmin      = require('gulp-cssmin');

/**
 * Convert SASS to CSS, minify all the files and add prefix.
 */
gulp.task('sass', function () {
  return gulp.src('./whats_buzz/static/sass/main.scss')
    .pipe(sass({
      includePaths: ['css'],
      onError: browserSync.notify
    }))
    .pipe(cssmin())
    .pipe(gulp.dest('./static/css'))
    .pipe(browserSync.reload({stream:true}));
});

/**
 * Static server
 */
gulp.task('browser-sync', ['sass', 'javascript'], function() {
    browserSync.init({
        proxy: "localhost:8000"
    });
});

/**
 * Watch scss files for changes & recompile
 */
gulp.task('watch', function () {
    gulp.watch('./static/sass/**', ['sass']);
});

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['browser-sync', 'watch']);

/**
 *  Convert SASS to CSS, concat SASS.
 */
gulp.task('deploy', ['sass']);