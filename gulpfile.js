var gulp = require('gulp');
const babel = require('gulp-babel');
var gutil = require('gulp-util');
var del = require('del');
var rename = require('gulp-rename');
var install = require('gulp-install');
var zip = require('gulp-zip');
var fs = require('fs');
var runSequence = require('run-sequence');

const paths = {
    srcJS: 'src/**/*.js',
    tmp: 'tmp',
    tmpJS: 'tmp/**/*.js',
    dist: 'dist',
    distJS: 'dist/**/*.js',
};

// First we need to clean out the dist folder and remove the compiled zip file.
gulp.task('clean', function(cb) {
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
gulp.task('env', function() {
    gulp.src('./config.env.development')
        .pipe(rename('.env'))
        .pipe(gulp.dest('./dist'));
});


// Here we want to install npm packages to dist, ignoring devDependencies.
gulp.task('npm', function() {
    gulp.src('./package.json')
        .pipe(gulp.dest('./dist/'))
        .pipe(install({production: true}));
});

// Now the dist directory is ready to go. Zip it.
gulp.task('zip', function() {
    gulp.src(['dist/**/*', '!dist/package.json', 'dist/.*'])
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
gulp.task('upload', function() {

    // TODO: This should probably pull from package.json
    AWS.config.region = 'us-east-1';
    var lambda = new AWS.Lambda();
    var functionName = 'video-events';

    lambda.getFunction({FunctionName: functionName}, function(err, data) {
        if (err) {
            if (err.statusCode === 404) {
                var warning = 'Unable to find lambda function ' + deploy_function + '. '
                warning += 'Verify the lambda function name and AWS region are correct.'
                gutil.log(warning);
            } else {
                var warning = 'AWS API request failed. '
                warning += 'Check your AWS credentials and permissions.'
                gutil.log(warning);
            }
        }

        // This is a bit silly, simply because these five parameters are required.
        var current = data.Configuration;
        var params = {
            FunctionName: functionName,
            Handler: current.Handler,
            Mode: current.Mode,
            Role: current.Role,
            Runtime: current.Runtime
        };

        fs.readFile('./dist.zip', function(err, data) {
            params['FunctionZip'] = data;
            lambda.uploadFunction(params, function(err, data) {
                if (err) {
                    var warning = 'Package upload failed. '
                    warning += 'Check your iam:PassRole permissions.'
                    gutil.log(warning);
                }
            });
        });
    });
});

// The key to deploying as a single command is to manage the sequence of events.
gulp.task('default', function(callback) {
    return runSequence(
        ['clean'],
        ['js', 'npm', 'env'],
        ['zip'],
        callback
    );
});
