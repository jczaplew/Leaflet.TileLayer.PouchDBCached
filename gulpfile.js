var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('build', function() {
  gulp.src(['src/tile-cover.js', 'src/leaflet-tilelayer-pouchdb.js'])
    .pipe(concat('leaflet-tilelayer-pouchdb.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['build']);
