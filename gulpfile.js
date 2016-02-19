'use strict';

var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

/**
 * Convert SASS to CSS, minify all the files and add prefix.
 */
gulp.task('sass', function () {
  return gulp.src('./whats_buzz/static/sass/*.scss')
    //.pipe(sass().on('error', sass.logError))
    .pipe(sass({
      includePaths: ['css'],
      onError: browserSync.notify
    }))
    //.pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
    .pipe(gulp.dest('./whats_buzz/static/css'));
});

/**
 * Static server
 */
gulp.task('browser-sync', ['sass'], function() {
    browserSync.init({
        proxy: "localhost:8000"
    });
});

/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function () {
    gulp.watch('./whats_buzz/templates/**', browserSync.reload);
    gulp.watch('./whats_buzz/static/javascript/*.js', browserSync.reload);
    gulp.watch('./whats_buzz/static/sass/*.scss', ['sass']);
});

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['sass', 'browser-sync', 'watch']);
