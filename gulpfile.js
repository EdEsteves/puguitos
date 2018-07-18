/* Requires globais */
var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-sass');
var data = require('gulp-data');
var path = require('path');

/*Diretórios*/

var paths = {
    dist: './dist/',
    sass: './src/sass/',
    data: './src/data',
    css: './dist/css/',
}

gulp.task('pug', function(){
    return gulp.src('./src/*.pug')
        .pipe(pug())
        .on('error', function(erro){
            process.stderr.write(erro.message + '\n');
            this.emit('end');
        })
        .pipe(gulp.dest(paths.dist));
});

gulp.task('scss', function(){
    return gulp.src(paths.sass + '*.scss')
        .pipe(sass()
        .on('error', sass.logError))
        .pipe(gulp.dest(paths.css));
});
