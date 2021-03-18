const gulp = require('gulp');
const babel = require('gulp-babel');
const del = require('del');
const install = require('gulp-install');
const zip = require('gulp-zip');
const runSequence = require('gulp4-run-sequence');
const { exec } = require('child_process');

const paths = {
    srcJS: 'src/**/*.js',
    config: 'config/*.json',
    tmp: 'tmp',
    tmpJS: 'tmp/**/*.js',
    dist: 'dist',
    distJS: 'dist/**/*.js',
    docs: 'docs/*.wsdl',
};

// First we need to clean out the dist folder and remove the compiled zip file.
gulp.task('clean', () => {
    return del([
        'dist',
        'dist.zip',
    ]);
});

gulp.task('js', () =>
    gulp.src(paths.srcJS)
        .pipe(babel())
        .pipe(gulp.dest('dist')),
);

gulp.task('config', (callback) => {
    gulp.src(paths.config, { base: '.' })
        .pipe(gulp.dest('./dist'))
        .on('end', callback);
});

// Next copy over environment variables managed outside of source control.
gulp.task('env', async () => {
    gulp.src('./.env')
        //.pipe(rename('.env'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('docs', (callback) => {
    gulp.src(paths.docs)
        .pipe(gulp.dest('./dist'))
        .on('end', callback);
});

// Here we want to install npm packages to dist, ignoring devDependencies.
gulp.task('npm', (callback) => {
    gulp.src('./package.json')
        .pipe(gulp.dest('./dist/'))
        .pipe(install({ production: true }, callback));
});

// Now the dist directory is ready to go. Zip it.
gulp.task('zip', (callback) => {
    gulp.src(['dist/**/*', '!dist/package.json', 'dist/.*', 'dist/node_modules'])
        .pipe(zip('dist.zip'))
        .pipe(gulp.dest('./'))
        .on('end', callback);
});

gulp.task('version', (callback) => {
    exec('git rev-parse HEAD > dist/version.txt', (err, stdout, stderr) => {
        console.log(stdout);
        console.log(stderr);
        callback(err);
    });
});

gulp.task('default', (callback) => {
    return runSequence(
        ['clean'],
        ['js', 'config', 'npm', 'docs'],
        ['version'],
        ['zip'],
        callback,
    );
});
