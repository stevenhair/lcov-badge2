const del = require('del');
const gulp = require('gulp');
const header = require('gulp-header');

function clean() {
    return del(['dist']);
}

function addShebang() {
    return gulp.src('dist/main.js')
        .pipe(header('#!/usr/bin/env node\n'))
        .pipe(gulp.dest('dist'));
}

function copyPackageFiles() {
    return gulp.src(['package.json', 'README.md', 'LICENSE'])
        .pipe(gulp.dest('dist'));
}

module.exports.clean = clean;
module.exports.postbuild = gulp.series(addShebang, copyPackageFiles);
