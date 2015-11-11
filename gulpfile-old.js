var gulp     = require('gulp');
var postcss  = require('gulp-postcss');
var rename   = require('gulp-rename');
var filter = require('gulp-filter');
var sass = require('gulp-sass');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');
var bemLinter = require('postcss-bem-linter');
var reporter = require('postcss-reporter');
var autoprefixer = require('autoprefixer');
var pxtorem = require('postcss-pxtorem');
var reporterOptions = {
  clearMessages: true
};
/*
var onError = function(err) {
  notify.onError({
    title:    "Gulp",
    subtitle: "Failure!",
    message:  "Error: <%= error.message %>",
    sound:    "Beep"
  })(err);
  this.emit('end');
};
*/

var notifyError = function(err) {
  notify.onError({
    title: 'Compile Error',
    message: '<%= error.message %>',
    sound: 'Beep'
  })(err);
  this.emit('end');
};


var processors = [
  pxtorem({
    prop_white_list: [
      'font',
      'font-size',
      'margin',
      'margin-top',
      'margin-right',
      'margin-bottom',
      'margin-left',
      'padding',
      'padding-top',
      'padding-right',
      'padding-bottom',
      'padding-left'
    ]
  }),
  autoprefixer,
  reporter
];

gulp.task('sass', function () {
  gulp.src('./css/src/scss/index.scss')
    .pipe(plumber({"errorHandler": notifyError}))
    .pipe(sass())
    .pipe(rename('howto.css'))
    .pipe(gulp.dest('css/dist'))
    .pipe(postcss([
      bemLinter,
      reporter(reporterOptions)
    ]));
});

gulp.task('postcss', function() {
  return gulp.src('css/src/**/*.css')
    .pipe(postcss([
      bemLinter,
      reporter(reporterOptions)
    ]))
    .pipe(filter(['index.css']))
    .pipe(postcss(processors))
    .pipe(rename('howto.css'))
    .pipe(gulp.dest('css/dist'));
});



gulp.task('css', ['sass']);
gulp.task('default', ['css']);
gulp.task('watch', function() {
  gulp.watch('css/src/**/*.css', ['css']);
});
