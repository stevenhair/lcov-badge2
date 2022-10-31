import { deleteAsync } from 'del';
import gulp from 'gulp';
import header from 'gulp-header';

export async function clean() {
    await deleteAsync(['dist']);
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

export const postbuild = gulp.series(addShebang, copyPackageFiles);
