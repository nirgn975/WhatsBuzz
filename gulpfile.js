var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

/**
 * Static server
 */
gulp.task('browser-sync', function() {
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
    gulp.watch('./whats_buzz/static/**', browserSync.reload);
});


/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['browser-sync', 'watch']);
