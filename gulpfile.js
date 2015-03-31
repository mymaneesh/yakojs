var gulp = require('gulp');
var gutil = require("gulp-util");
var webpack = require('gulp-webpack');
var wp = require('webpack');

gulp.task('webpack', function (callback) {
  gulp.src('./build-tools/expose.build')
  .pipe(webpack({
    context : __dirname,
    entry : [
      './build-tools/expose.build',
    ],
    output : {
      path: __dirname,
      filename: 'yako.js'
    },
  }))
  .pipe(gulp.dest('./'));

  var myConfig = Object.create({
    context : __dirname,
    entry : [
      './build-tools/expose.build',
    ],
    output : {
      path: __dirname,
      filename: 'yako.min.js'
    },
    plugins: []
  });

  myConfig.plugins = myConfig.plugins.concat(
    new wp.DefinePlugin({
      "process.env": {
        // This has effect on the react lib size
        "NODE_ENV": JSON.stringify("production")
      }
    })
  );

  wp(myConfig, function(err, stats) {
    if(err) throw new gutil.PluginError("webpack build", err);
    gutil.log("[webpack:build]", stats.toString({
      colors: true
    }));
    callback();
  });
});