var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
gulp.task('controller', function() {
    return gulp.src('./public/controller/*.js')
      .pipe(concat('controller.js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('./public/js'));
});
gulp.task('service', function() {
    return gulp.src('./public/services/*.js')
      .pipe(concat('service.js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('./public/js'));
});
gulp.task('watch', function() {
  gulp.watch('./public/controller/*.js',['controller']);
  gulp.watch('./public/services/*.js',['service']);
  });

gulp.task('default', ['controller', 'service', 'watch']);