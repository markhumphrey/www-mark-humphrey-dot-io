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
    middleware: function(connect, opt) {
      return [ historyApiFallback() ];
    }
  });
});

gulp.task('browserify', function() {
  // Grabs the app.js file
  return browserify('./app/app.js', {debug : true})
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
