# TeamFood.readme

A project to demonstrate our use of Github, Git, Gulp and Npm, while working in a team on a shared repository.

## Getting started

These instructions will get a copy of the project up and running on your local machine for development and testing purposes. 

## Prerequisites

* Node 
* Npm
* Gulp

If you don't have Gulp, install using
```
$ npm install gulp-cli -g
$ npm install gulp -D```

## Installing

Set up a directory for the project on your local machine.
Change to that directory and run the following:
```
$ npm init
$ git init //start npm and git
$ git remote add origin git@github.com:Parvis123/teamfood.git
$ git fetch
$ git checkout master //get the repository on your local machine
$ npm install //install the packages from package.json to your local folder.```

You can now make a branch from development and progress as usual.  Do NOT merge straight into master, create a pull request to merge your local branch to development.

We have several Gulp tasks set up in the gulpfile.js to help you work.
```gulp tabify``` will give the html, css and scss files a tab indent and fix any stray spaces.
```gulp watchrefresh``` will automatically update the browser
```gulp watch``` will minify the js, css and scss files.

## Questions?

Please contact TeamFood - Dan, Deanna, Michael and Vikki.


<!-- 

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

	let browserSync = require('browser-sync') // needed for automatic browser refreshing upon changing code -->
