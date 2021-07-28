var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));

function compileSass() {
  return gulp.src('styles/Scss/styles.scss')
    .pipe(sass())
    .pipe(gulp.dest('styles/Css'));
}

function watchSassChange() {
  gulp.watch('styles/Scss/**/*.scss', compileSass); 
}

exports.default = gulp.series(compileSass, watchSassChange);