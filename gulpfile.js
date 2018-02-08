let gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');
let rename = require('gulp-rename');
let sass = require('gulp-sass');
let watch = require('gulp-watch');
let gulpSequence = require('gulp-sequence');

let concat = require('gulp-concat');
let uglify = require('gulp-uglify');

// let reload = require('reload');
let tabify = require('gulp-tabify');
//let htmlmin = require('gulp-htmlmin');

let js_input_files = ['js/bootstrap.js'];
let browserSync = require('browser-sync')
 
gulp.task('tabify-html', function () {
  gulp.src('./*.html')
    .pipe(tabify(4, true))
    .pipe(gulp.dest('./')); 
});

gulp.task('tabify-css', function () {
  gulp.src('./css/*.css')
    .pipe(tabify(4, true))
    .pipe(gulp.dest('./css/')); 
});

gulp.task('tabify-scss', function () {
  gulp.src('./scss/*.scss')
    .pipe(tabify(4, true))
    .pipe(gulp.dest('./scss/')); 
});

gulp.task('tabify', function(callback){
	gulpSequence('tabify-html', 'tabify-css', 'tabify-scss')(callback)
});

gulp.task('minify-html', function() {
  return gulp.src('./*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist/simplehtml'));
});

gulp.task('combine-js', () => {
	return gulp.src(js_input_files)
		.pipe(concat('combined.js'))
		.pipe(gulp.dest('./js/'));
});

gulp.task('minify-js', () => {
	return gulp.src('js/combined.js')
		.pipe(uglify())
		.pipe(rename('all.min.js'))
		.pipe(gulp.dest('./js/'));
});

gulp.task('js-preparation', function(callback){
	gulpSequence('combine-js', 'minify-js')(callback)
});

gulp.task('sass', function () {
	var stream = gulp.src('./scss/styles.scss')
		.pipe(sass())
		.pipe(gulp.dest('./css/'))
		.pipe(rename('styles.css'));
	return stream;
});

gulp.task('minify-css', () => {
	return gulp.src('css/styles.css')
		.pipe(cleanCSS({compatibility: 'ie8'}))
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('./css/'));
});

gulp.task('styles', function(callback){
	gulpSequence('sass', 'minify-css')(callback)
});

gulp.task('watch', function () {
	gulp.watch('./scss/*.scss', ['styles']);
	gulp.watch(js_input_files, ['js-preparation']);
});

gulp.task('rebuild-then-reload', ['styles','js-preparation'], function (done) {
    browserSync.reload();
    done();
});

gulp.task('watchrefresh', function () {
	browserSync.init({
        server: {
            baseDir: "./"
        }
    });

	gulp.watch(['./scss/*.scss', './*.html', './*.js'], ['rebuild-then-reload']);
});
