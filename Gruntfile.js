module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        loadPath: ['bower_components']
      },
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'css/styles.min.css': 'css/scss/styles.scss'
        }        
      },
      dev: {
        options: {
          style: 'nested',
          lineNumbers: true
        },
        files: {
          'css/styles.min.css': 'css/scss/styles.scss'
        }
      }
    },
    cssmetrics: {
      common: {
        src: ['css/styles.min.css'],
        options: {
          quiet: false
        }
      }
    },
    watch: {
      grunt: { files: ['Gruntfile.js'] },
      sass: {
        files: 'css/**/*.scss',
        tasks: ['dev']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-css-metrics');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('analyse', ['cssmetrics:common']);
  grunt.registerTask('dist', ['sass:dist']);
  grunt.registerTask('dev', ['sass:dev']);
  grunt.registerTask('default', ['dev','watch','analyse']);
}