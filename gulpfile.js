
var gulp        = require("gulp");
var sass = require("gulp-sass");
var browserSync = require("browser-sync").create();
var sourcemaps = require('gulp-sourcemaps');


// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("scss/**/*.scss", ['sass']);
});

// Compile scss into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("scss/candy-grid.scss")
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: "expanded"}).on("error", sass.logError))
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest("dist/css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
