var gulp = require('gulp'),
    connect = require('gulp-connect'),
    open = require("gulp-open"),
    browserify = require('gulp-browserify'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    port = process.env.port || 3031;

// browserify and transform JSX
gulp.task('browserify', function() {
    gulp.src('./app/src/app.js')
      .pipe(browserify({transform: 'reactify'}))
      .pipe(gulp.dest('./app/dist/js'));
});

// launch browser in a port
gulp.task('open', function(){
  var options = {
    url: 'http://localhost:' + port,
  };
  gulp.src('app/index.html')
    .pipe(open('', options));
});

// live reload server
gulp.task('connect', function() {
  connect.server({
    root: 'app',
    port: port,
    livereload: true
  });
});

// live reload js
gulp.task('js', function () {
  gulp.src('./app/dist/js/*.js')
    .pipe(connect.reload());
});

// live reload html
gulp.task('html', function () {
  gulp.src('./app/*.html')
    .pipe(connect.reload());
});

// live reload css
gulp.task('css', function () {
  gulp.src('./app/public/css/*.css')
    .pipe(connect.reload());
});

// Compile sass files
gulp.task('sass', function () {
  gulp.src('./app/bootstrap-sass/assets/stylesheets/*.scss')
    .pipe(sass({
      outputStyle: 'compressed',
      sourceComments: 'map',
      includePaths: './app/bootstrap-sass/assets/stylesheets'
    }).on('error', sass.logError))
    .pipe(gulp.dest('./app/public/css'));
});

// Watch files for live reload
gulp.task('watch', function() {
    gulp.watch('app/dist/js/*.js', ['js']);
    gulp.watch('app/*.html', ['html']);
    gulp.watch('app/src/**/*.jsx', ['browserify']);
    gulp.watch('./app/public/css/*.css', ['css']);
    gulp.watch('./app/bootstrap-sass/assets/stylesheets/*.scss', ['sass']);
});

gulp.task('default', ['browserify']);

gulp.task('serve', ['browserify', 'connect', 'open', 'watch']);
