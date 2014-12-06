var gulp = require('gulp');
var path = require('path');
var del = require('del');
var nib = require('nib');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var stylus = require('gulp-stylus');
var base64 = require('gulp-base64');
var cssmin = require('gulp-cssmin');
var copy = require('gulp-copy');
var fs = require('fs');

gulp.task('jshint',['clean:dest'],function(){
  var srcList = [
    '*.js',
    'controllers/*.js',
    'helpers/*.js',
    'src/*.js'
  ];
  return gulp.src(srcList)
    .pipe(jshint({
      node : true
    }))
    .pipe(jshint.reporter('default'));
});

gulp.task('static_js', ['clean:dest'], function(){
  return gulp.src('./src/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dest'));
});

gulp.task('static_stylus', ['clean:dest'],function(){
  return gulp.src('./src/**/*.styl')
    .pipe(stylus({
      use : nib(),
      compress : true
    }))
    .pipe(cssmin())
    .pipe(gulp.dest('./dest'));
});

gulp.task('static_copy_other', ['clean:dest'], function(){
  gulp.src(['./src/**/*','!src/**/*.styl','!src/**/*.css','!src/**/*.js'])
  .pipe(copy('./dest', {
    prefix : 1
  }));
});

gulp.task('static_css', ['clean:dest'], function(){
  gulp.src('./src/**/*.css')
    .pipe(cssmin())
    .pipe(gulp.dest('./dest'));
});

gulp.task('clean:dest',function(cbf){
  del(['./dest'],cbf);
});

var concatFiles = function(filePath, files){
  var savePath = path.join(filePath, 'merge');
  if(!fs.existsSync(savePath)){
    fs.mkdirSync(savePath);
  }
};





gulp.task('default',['clean:dest','jshint','static_copy_other','static_js','static_stylus','static_css']);