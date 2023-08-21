const gulp = require("gulp");
const cleanCSS = require("gulp-clean-css");

gulp.task("minify-css", function () {
  return gulp.src("src/css/*.css")
    .pipe(cleanCSS())
    .pipe(gulp.dest("dist/css"));
});
