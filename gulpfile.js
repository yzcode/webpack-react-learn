/**
 * Created by yangz on 2015/12/8.
 */
var gulp = require('gulp');

gulp.task('default', function() {
  // 将你的默认的任务代码放在这
});

gulp.task('initi', function() {
  console.log("start init the library of the project");
  gulp.src("./node_modules/react/dist/react.min.js")
    .pipe(gulp.dest("./APP/build"));

  gulp.src("./node_modules/react-dom/dist/react-dom.min.js")
    .pipe(gulp.dest("./APP/build"));

  gulp.src("./node_modules/babel-browser/browser.min.js")
    .pipe(gulp.dest("./APP/build"));

  gulp.src("./node_modules/jquery/dist/jquery.min.js")
    .pipe(gulp.dest("./APP/build"));

  gulp.src("./node_modules/marked/lib/marked.js")
    .pipe(gulp.dest("./APP/build"));

  console.log("end init the library of the project");
});