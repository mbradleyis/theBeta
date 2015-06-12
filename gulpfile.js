var gulp = require('gulp'),
    connect = require('gulp-connect'),
    open = require("gulp-open"),
    browserify = require('gulp-browserify'),
    concat = require('gulp-concat'),
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

// live reload jsx
gulp.task('js', function () {
  gulp.src('./app/dist/**/*.js')
    .pipe(connect.reload());
});

// live reload html
gulp.task('html', function () {
  gulp.src('./app/*.html')
    .pipe(connect.reload());
});

// watch files for live reload
gulp.task('watch', function() {
    gulp.watch('app/dist/js/*.js', ['js']);
    gulp.watch('app/src/components/js/*.js', ['js']);
    gulp.watch('app/index.html', ['html']);
    gulp.watch('app/src/**/*.jsx', ['browserify']);
});

gulp.task('default', ['browserify']);

gulp.task('serve', ['browserify', 'connect', 'open', 'watch']);
