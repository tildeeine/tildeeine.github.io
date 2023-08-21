import gulp from "gulp";
import cleanCSS from "gulp-clean-css";

gulp.task("minify-css", function () {
  return gulp.src("src/css/*.css")
    .pipe(cleanCSS())
    .pipe(gulp.dest("dist/css"));
});
