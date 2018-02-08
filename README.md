# teamfood.readme


# Setting up process from scratch:

	1.Setup repository on Github
		www.github.com
	2.Invite each other and accept invitations
		Everyone on local machines:
		* Set up directory for project
		* $ npm install gulp-cli -g
		* $ npm install gulp -D
		* $ npm init

	3.One person does gulp setup and uploads to github:
		Add packages:
		$ npm install <package_name> --save
		$ npm install gulp --save //need to do this as it's a dependency
		Setup gulpfiles.js (create new file manually)
		Setup gitignore.  Include package-lock.json and node_modules.
		(gitignore must be manually updated to include files such as node_modules and package-lock.json to be ignored by git)

	4.Git Commands for everyone to do:
		$ git init
		$ git remote add origin git@github.com:Parvis123/teamfood.git
		$ git fetch
		$ git checkout master
		$ git status
		$ git add *
		$ git commit -am
		$ git push

----------------------------------------------------------------------------------------------------------------------

# gulpfile.js
	gulpfile.js allows you to :
		define and pull in dependencies (plugins)
		map plugin function to variable
		define tasks that can be run, the order, and what they do

# Example file 

	let gulp = require('gulp'); // create a variable that requires a specific package that must be pre-installed to								   work.
	let cleanCSS = require('gulp-clean-css'); // thousands of different packages are able to be found on: 
												 https://www.npmjs.com/
	let rename = require('gulp-rename');

	gulp.task('minify-css', () => {
	  return gulp.src('css/*.css')
	    .pipe(cleanCSS({compatibility: 'ie8'}))
	    .pipe(rename({suffix: '.min'}))
	    .pipe(gulp.dest('./css/'));
	});

----------------------------------------------------------------------------------------------------------------------

#Teamfood gulpfile.js explanations

	let gulp = require('gulp') // dependancy for gulp (required in all gulpfile.js files)
	let cleanCSS = require('gulp-clean-css') // takes css files and makes the file much shorter,reducing the file's kb
	let rename = require('gulp-rename') // allows files to be renamed using gulp
	let sass = require('gulp-sass') // compiles sass to css
	let watch = require('gulp-watch') // watches files and applies changes depending on the function
	let gulpSequence = require('gulp-sequence') // runs a series of gulp tasks in a specified order

	let concat = require('gulp-concat') // concatonates multiple files together into a new file
	let uglify = require('gulp-uglify') // takes js files and makes the file much shorter, reducing the file's kb
	let gulpTabify = require('gulp-tabify') // changes coding file's spaces to tabs

	let browserSync = require('browser-sync') // needed for automatic browser refreshing upon changing code
