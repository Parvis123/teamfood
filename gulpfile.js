let gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');
let rename = require('gulp-rename');
let sass = require('gulp-sass');
let watch = require('gulp-watch');
let gulpSequence = require('gulp-sequence');

let concat = require('gulp-concat');
let uglify = require('gulp-uglify');
let reload = require('reload');
let gulpTabify = require('gulp-tabify');

let js_input_files = ['js/bootstrap.js'];

gulp.task('combine-js', () => {
	return gulp.src(js_input_files)
		.pipe(concat('all.js'))
		.pipe(gulp.dest('./js/'));
});

gulp.task('minify-js', () => {
	return gulp.src('js/all.js')
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