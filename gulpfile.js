const gulp = require('gulp');
const babel = require('gulp-babel');
const gutil = require('gulp-util');
const del = require('del');
const rename = require('gulp-rename');
const install = require('gulp-install');
const zip = require('gulp-zip');
const fs = require('fs');
const AWS = require('aws-sdk');
const runSequence = require('run-sequence');

const paths = {
    srcJS: 'src/**/*.js',
    tmp: 'tmp',
    tmpJS: 'tmp/**/*.js',
    dist: 'dist',
    distJS: 'dist/**/*.js',
};

// First we need to clean out the dist folder and remove the compiled zip file.
gulp.task('clean', (cb) => {
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

// Next copy over environment variables managed outside of source control.
gulp.task('env', () => {
    gulp.src('./config.env.development')
        .pipe(rename('.env'))
        .pipe(gulp.dest('./dist'));
});

// Here we want to install npm packages to dist, ignoring devDependencies.
gulp.task('npm', (callback) => {
    gulp.src('./package.json')
        .pipe(gulp.dest('./dist/'))
        .pipe(install({ production: true }, callback));
});

// Now the dist directory is ready to go. Zip it.
gulp.task('zip', () => {
    gulp.src(['dist/**/*', '!dist/package.json', 'dist/.*', 'dist/node_modules'])
        .pipe(zip('dist.zip'))
        .pipe(gulp.dest('./'));
});

// Per the gulp guidelines, we do not need a plugin for something that can be
// done easily with an existing node module. #CodeOverConfig
//
// Note: This presumes that AWS.config already has credentials. This will be
// the case if you have installed and configured the AWS CLI.
//
// See http://aws.amazon.com/sdk-for-node-js/
gulp.task('upload', () => {

    // TODO: This should probably pull from package.json
    AWS.config.region = 'eu-west-1';
    AWS.config.credentials = new AWS.SharedIniFileCredentials({profile: 'oph-dev'});
    const lambda = new AWS.Lambda();
    const functionName = 'getOpintoOikeudet';

    lambda.getFunction({FunctionName: functionName}, (err, data) => {
        if (err) {
            if (err.statusCode === 404) {
                gutil.log(`Unable to find lambda function ${functionName}, Verify the lambda function name and AWS region are correct.`);
            } else {
                gutil.log('AWS API request failed. Check your AWS credentials and permissions.', err);
            }
        }

        // This is a bit silly, simply because these five parameters are required.
        const current = data.Configuration;
        const params = {
            FunctionName: functionName,
            Handler: current.Handler,
            Mode: current.Mode,
            Role: current.Role,
            Runtime: current.Runtime,
        };

        fs.readFile('./dist.zip', (err, data) => {
            params['FunctionZip'] = data;
            lambda.uploadFunction(params, (err, data) => {
                if (err) {
                    const warning = 'Package upload failed. ';
                    warning += 'Check your iam:PassRole permissions.';
                    gutil.log(warning);
                }
            });
        });
    });
});

// The key to deploying as a single command is to manage the sequence of events.
gulp.task('default', (callback) => {
    return runSequence(
        ['clean'],
        ['js', 'npm', 'env'],
        ['zip'],
        ['upload'],
        callback,
    );
});
