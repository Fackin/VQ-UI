/*
 * @author: fackin
 * @Description
 * @Date: 2019-03-13 14:36:37
 * @LastEditTime: 2019-03-13 14:45:50
 */
'use strict';
// 获取模块
var gulp = require('gulp');
var postcss = require('gulp-postcss');
var cssmin = require('gulp-cssmin');
var salad = require('postcss-salad')(require('./salad.config.json'));

// 压缩task
gulp.task('compile', function () {
  return gulp.src('./src/*.css')
    .pipe(postcss([salad]))
    .pipe(cssmin())
    .pipe(gulp.dest('./lib'));
});

// build watch
gulp.task('build', ['compile']);
gulp.task('watch', function () {
  gulp.watch('./src/*css', ['compile']);
});
