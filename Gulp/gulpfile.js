let gulp = require('gulp');
let uglify = require('gulp-uglify');
let sass = require('gulp-sass');

gulp.task('minifyjs', ()=>
    gulp.src('src/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist'))
    );

gulp.task('sass', ()=>
    gulp.src('scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'))
    );
gulp.task('default', ['minifyjs', 'sass'])