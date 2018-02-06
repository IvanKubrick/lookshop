var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function() {
    return gulp.src('app/scss/**/*.scss')
        .pipe( sass() )
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: true
        }))
        .pipe( gulp.dest('app/css') )
        .pipe( browserSync.reload({stream: true}) )
});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'app',
        },
        notify: false
    });
});

gulp.task('watch', ['browser-sync', 'sass'], function() {
    gulp.watch('app/scss/**/*.scss', [sass]);
    gulp.watch('app/*.html', browserSync.reload);
});