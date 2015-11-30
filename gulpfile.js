var gulp = require('gulp');
var connect = require('gulp-connect');
var sass = require('gulp-ruby-sass');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var historyApiFallback = require('connect-history-api-fallback');

gulp.task('connect', function() {
  connect.server({
    root: [__dirname + "/app/"],
    port: 8000,
    livereload: true,
    middleware: function(connect, opt) {
      return [
        (function() {
          var url = require('url');
          var proxy = require('proxy-middleware');
          //var options = url.parse('http://localhost:8088/api');
          var options = url.parse('http://192.168.99.100:8080/');
          options.route = '/api';
          return proxy(options);
        })(),
        historyApiFallback()
      ];
    }
  });
});

gulp.task('browserify', function() {
  // Grabs the app.js file
  return browserify('./app/app.js', {
      debug: true
    })
    .bundle()
    .pipe(source('bundle.js'))
    // saves it the public/js/ directory
    .pipe(gulp.dest('./app/dist/js/'));
});

gulp.task('sass', function() {
  return sass('app/static/sass/app.scss')
    .pipe(gulp.dest('app/dist/css'));
});

gulp.task('watch', function() {
  gulp.watch(['app/**/*.js',
    '!app/dist/**'
  ], ['browserify']);
  gulp.watch('app/static/sass/**', ['sass']);
});

gulp.task('default', ['connect', 'watch']);
