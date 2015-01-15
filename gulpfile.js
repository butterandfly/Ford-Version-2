var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

var sassFiles = ["./css/main.scss", './css/pc_main.scss'];
var jsFiles = ['./js/pc/*.js'];

var targetCssDir = './css/';
var targetJsDir = './js/';

gulp.task('sass', function() {
  gulp.src(sassFiles)
    .pipe(sass())
    .pipe(gulp.dest(targetCssDir));
});

gulp.task('concat-js-pc', function() {
  gulp.src(jsFiles)
    .pipe(concat('main_pc.js'))
    .pipe(gulp.dest(targetJsDir));
})

gulp.task('default', ['sass', 'concat-js-pc'], function() {
  gulp.watch([sassFiles], ['sass']);
  gulp.watch([jsFiles], ['concat-js-pc']);
});