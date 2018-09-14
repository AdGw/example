let gulp = require('gulp');
let uglify = require('gulp-uglify');

gulp.task('minifyjs', ()=>
    gulp.src('src/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist'))
    );
gulp.task('default', ['minifyjs'])