var gulp = require("gulp");
var sass = require("gulp-sass");
var jade = require("gulp-jade");
var connect = require('gulp-connect');
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');

gulp.task("connect", function() {
  connect.server({
    root: "public",
    livereload: true
  });
});

gulp.task("html", function () {
  gulp.src("./public/index.html")
    .pipe(connect.reload());
});

gulp.task("css", function () {
  gulp.src("./public/stylesheets/main.css")
    .pipe(connect.reload());
});

gulp.task("sass", function () {
  return gulp.src("./app/stylesheets/*.sass")
    .pipe(sass({
      includePaths: ['node_modules/foundation-sites/scss']
    }).on('error', sass.logError))
    .pipe(plumber())
    .pipe(autoprefixer({
      browsers: ['> 1%', 'IE >= 9']
    }))
    .pipe(plumber.stop())
    .pipe(gulp.dest("./public/"));
});

gulp.task("jade", function() {
    return gulp.src("./app/index.jade")
      .pipe(plumber())
      .pipe(jade())
      .pipe(gulp.dest("./public/"));
});

gulp.task("images", function () {
  gulp.src("./app/images/**")
    .pipe(gulp.dest("./public/images/"));
});

gulp.task("javascript", function () {
  gulp.src("./app/scripts/*")
    .pipe(plumber())
    .pipe(gulp.dest("./public/"));
});

gulp.task("watch", function() {
  gulp.watch("./app/images/**", ["images"]);
  gulp.watch("./app/stylesheets/*.sass", ["sass"]);
  gulp.watch("./app/*.jade", ["jade"]);
  gulp.watch("app/scripts/**", ["javascript"]);
});

gulp.task("default", ["connect", "sass", "jade", "javascript", "images", "watch"]);     