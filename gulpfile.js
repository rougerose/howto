// *************************************
//
// Gulpfile
// (cf. https://github.com/drewbarontini/noise/blob/master/gulpfile.js)
//
// *************************************
//
// Available tasks:
//  'gulp'
//  'gulp watch'
//  'gulp compile:scss'
//
// *************************************


"use strict";


// -------------------------------------
// Plugins
// -------------------------------------

const gulp            = require("gulp");
const sass            = require("gulp-sass");
const autoprefixer    = require("gulp-autoprefixer");
const plumberNotifier = require("gulp-plumber-notifier");

// -------------------------------------
// Options
// -------------------------------------

var options = {

  // ----- Default ----- //
  default: {
    tasks: ['compile:scss']
  },

  // ----- SCSS ----- //
  scss: {
    paths       : ['./node_modules/'],
    file        : '_src/scss/howto.scss',
    files       : '_src/scss/**/*.scss',
    destination : 'css'
  },

  // ----- CSS ----- //
  css: {
    file        : 'css/howto.css',
    destination : 'css'
  },

  // ----- Watch ----- //
  watch: {
    files: function () {
      return [
        options.scss.files
      ]
    },
    run: function () {
      return [
        ['compile:scss']
      ]
    }
  }
};


// -------------------------------------
// Task : default
// -------------------------------------

gulp.task( 'default', options.default.tasks );


// -------------------------------------
// Task: compile:scss
// -------------------------------------

gulp.task( 'compile:scss', function () {
  gulp.src( options.scss.files )
    .pipe( plumberNotifier() )
    .pipe( sass({
      includePaths: options.scss.paths,
      outputStyle: 'compressed'
    }) )
    .pipe( autoprefixer({
      browsers: [ 'last 2 versions' ],
      cascade: true
    }) )
    .pipe( gulp.dest(options.scss.destination) )
});


// -------------------------------------
// Task : watch
// -------------------------------------

gulp.task('watch', function() {
  var watchFiles = options.watch.files();
  watchFiles.forEach( function( files, index ) {
    gulp.watch( files, options.watch.run()[ index ]  );
  });
});
