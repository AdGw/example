let gulp = require('gulp');
let uglify = require('gulp-uglify');
let sass = require('gulp-sass');
// let jshint = require('gulp-jshint');
let webserver = require('gulp-webserver');

gulp.task('minifyjs', ()=>
    gulp.src('src/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('app/js'))
);

gulp.task('sass', ()=>
    gulp.src('scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('/app/css'))
);

// gulp.task('hint', ()=>
//     gulp.src('scss/*.scss')
//         .pipe(jshint())
//         .pipe(jshint.reporter('default'))
// );

gulp.task('webserver', ()=>
    gulp.src('app')
        .pipe(webserver({
            port: '4000',
            livereload: true,
            open: true
        }))
);

gulp.task('watch', function(){
        gulp.watch('src/*.js', ['minifiedjs']);
        gulp.watch('scss/*.scss', ['sass']);
});

gulp.task('default', ['minifyjs', 'sass', 'watch', 'webserver'])