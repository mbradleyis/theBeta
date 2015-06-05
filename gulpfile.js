var gulp = require('gulp'),
    connect = require('gulp-connect'),
    open = require("gulp-open"),
    browserify = require('gulp-browserify'),
    concat = require('gulp-concat'),
    sass = require('gulp-ruby-sass'),
    bower = require('gulp-bower'),
    port = process.env.port || 3031;

var root = './app';

var app = {
      dist: root + '/dist',
      pub: root + '/public',
      src: root + '/src'
    },

    pub = {
      css: app.pub + '/css',
      fonts: app.pub + '/fonts',
      js: app.pub + '/js'
    },

    dist = {
      css: app.dist + '/css',
      js: app.dist + '/js',
    };

// browserify and transform JSX
gulp.task('browserify', function() {
    gulp.src(app.src + '/app.js')
      .pipe(browserify({transform: 'reactify'}))
      .pipe(gulp.dest(dist.js));
});

// launch browser in a port
gulp.task('open', function(){
  var options = {
    url: 'http://localhost:' + port,
  };
  gulp.src(root + '/index.html')
    .pipe(open('', options));
});

// live reload server
gulp.task('connect', function() {
  connect.server({
    root: root,
    port: port,
    livereload: true
  });
});

// live reload js
gulp.task('js', function () {
  gulp.src(dist.js + '/*.js')
    .pipe(connect.reload());
});

// live reload html
gulp.task('html', function () {
  gulp.src(root + '/*.html')
    .pipe(connect.reload());
});

// live reload css
gulp.task('css', function () {
  gulp.src(pub.css + '/*.css')
    .pipe(connect.reload());
});

// Watch files for live reload
gulp.task('watch', function() {
    gulp.watch(dist.js + '/*.js', ['js']);
    gulp.watch(root + '/*.html', ['html']);
    gulp.watch(app.src +'/**/*.jsx', ['browserify']);
    gulp.watch(pub.css + '/*.css', ['css']);
});

gulp.task('default', ['browserify']);

gulp.task('serve', ['browserify', 'connect', 'open', 'watch']);
