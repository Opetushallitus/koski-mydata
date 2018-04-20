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
    docs: 'docs/*.wsdl',
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

gulp.task('docs', () => {
    gulp.src(paths.docs)
        .pipe(gulp.dest('./dist'));
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
                gutil.log(`Function ${functionName} does not exist, creating it`);

                fs.readFile('./dist.zip', (zipError, zipData) => {

                    const params = {
                        Code: {
                            ZipFile: zipData,
                            //S3Bucket: 'com.oph.koski.lambda.dev.code', // TODO: Create this!
                            //S3Key: 'dist.zip',
                        },
                        FunctionName: 'getOpintoOikeudet',
                        Runtime: 'nodejs8.10',
                        Role: 'arn:aws:iam::500150530292:role/service-role/koskiLambdaRole', // TODO: Create me automatically!
                        Handler: 'lambda.opintoOikeusHandler',
                        Description: 'Lambda function for getting opinto-oikeudet from Koski',
                        Timeout: 3,
                        MemorySize: 128,
                        TracingConfig: {
                            Mode: 'PassThrough',
                        },
                    };

                    lambda.createFunction(params, (err, data) => {
                        if (err) console.log(err, err.stack); // an error occurred
                        else console.log(data); // successful response
                    });

                });
            } else {
                gutil.log('AWS API request failed. Check your AWS credentials and permissions.', err);
            }
        } else {
            gutil.log(JSON.stringify(data, null, 2));

            // This is a bit silly, simply because these five parameters are required.
            const current = data.Configuration;
            const params = {
                FunctionName: functionName,
                Handler: current.Handler,
                Mode: current.Mode,
                Role: current.Role,
                Runtime: current.Runtime,
            };

            fs.readFile('./dist.zip', (zipError, zipData) => {

                const workingParams = {
                    FunctionName: functionName,
                    Publish: true,
                    ZipFile: zipData,
                };

                lambda.updateFunctionCode(workingParams, (err, data) => {
                    if (err) {
                        gutil.log('Package upload failed. Check your iam:PassRole permissions.', err);
                    } else { // successful response
                        console.log(data);
                    }
                });
            });
        }
    });
});

// The key to deploying as a single command is to manage the sequence of events.
gulp.task('default', (callback) => {
    return runSequence(
        ['clean'],
        ['js', 'npm', 'docs'],
        ['zip'],
        ['upload'],
        callback,
    );
});
