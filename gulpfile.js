var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var clean = require('gulp-clean');
var sass = require('gulp-ruby-sass');
var browserify = require('browserify');
//var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
//var gutil = require('gulp-util');

var paths = {
 dist: 'dist/',
 scriptEntry: 'app/app.js',
 scripts: ['app/app.js', 'app/components/**/*.js', 'app/shared/**/*.js'],
 libs: ['node_modules/**/*.js'],
 styles: ['app/static/sass/**/*'],
 styleEntry: 'app/static/sass/app.scss',
 html: ['app/**/*.html', '!app/static/'],
 images: ['app/static/images/**/*'],
 extras: [],
};

gulp.task('default', ['watch']);

gulp.task('watch', function() {
  gulp.watch(paths.html, ['build-html']);
  gulp.watch(paths.images, ['build-images']);
  gulp.watch(paths.scripts, ['build-scripts']);
  gulp.watch(paths.styles, ['build-styles']);
});

gulp.task('build', ['build-html', 'build-images', 'build-scripts', 'build-styles']);

gulp.task('build-clean', function() {
  gulp.src(paths.dist)
  .pipe(clean());
});

gulp.task('build-html', function() {
 gulp.src(paths.html)
 .pipe(gulp.dest(paths.dist));
});

gulp.task('build-images', function() {
  gulp.src(paths.images)
  .pipe(gulp.dest(paths.dist + 'images/'));
});

gulp.task('build-scripts', ['browserify']);

gulp.task('build-styles', ['sass']);

gulp.task('browserify', function () {
  // set up the browserify instance on a task basis
  var b = browserify({
    entries: paths.scriptEntry,
    debug: true
  });

  return b.bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
        // Add transformation tasks to the pipeline here.
        //.pipe(uglify())
        //.on('error', gutil.log)
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.dist + 'js/'));
});

gulp.task('sass', function() {
  sass(paths.styleEntry)
    .pipe(gulp.dest(paths.dist + 'css/'));
});
