var gulp = require('gulp');
var paths = require('../paths');

gulp.task('default', ['css']);
gulp.task('watch', function() {
  gulp.watch(paths.css.watchSrc, ['css']);
});
