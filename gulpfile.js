const gulp = require('gulp'),
     sass = require('gulp-sass')(require('sass')),
     rename = require('gulp-rename'),
     autoprefixer = require('gulp-autoprefixer'),
     sourcemaps = require('gulp-sourcemaps'),
     browserSync = require('browser-sync');

browserSync.create();

function test(done) {
    gulp.src('scss/style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        // .pipe(sass({includePaths: ['node_modules']})) 
        .pipe(rename('style-min.css'))
        .pipe(autoprefixer({
            browsers: ['last 10 versions'],
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