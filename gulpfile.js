let gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync');
browserSync.create();

function test(done) {
    gulp.src('./scss/style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))  
        .pipe(rename('style-min.css'))
        .pipe(autoprefixer({
            browsers: ['last 5 versions'],
            cascade: false
        }))
        .pipe(sourcemaps.write())
        .pipe(browserSync.stream())     
        .pipe(gulp.dest('./css/'))
  done();
}

function browserReload(done) {
    browserSync.reload();
    done();
}

function autoUpdates(done) {
    browserSync.init({
        server: {
            baseDir: './'
        },
        port: 300
    });
    done();
};

function watchAll(done) {
    gulp.watch('./scss/**/*', test);
    gulp.watch('./**/*.html', browserReload);
    gulp.watch('./**/*.js', browserReload);
    gulp.watch('./**/*.php', browserReload);
    done();
}

exports.default = gulp.parallel(autoUpdates, watchAll);