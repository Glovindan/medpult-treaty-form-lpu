const gulp = require('gulp')
const babel = require('rollup-plugin-babel')
const resolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')

const rollup = require('gulp-better-rollup')
const rollupTypescript = require('rollup-plugin-typescript')

const browsersync = require('browser-sync') // liveserver
const fileinclude = require('gulp-file-include') //импорт html с помощью @@
const del = require('del') // очищение папки
const autoprefixer = require('gulp-autoprefixer') // простановка префиксов
const group_media = require('gulp-group-css-media-queries') //группировка медиазапросов в конце файла
const cssimport = require('gulp-cssimport') //импорт в css
const sass = require('gulp-sass')(require('sass')) // scss
const concat = require('gulp-concat')

const inlinesource = require('gulp-inline-source') //сборка в один файл
const replace = require('gulp-replace') //замена строк в файле

let path = {
  build: {
    html: 'dist/',
    css: 'dist/',
    js: 'dist/',
  },
  src: {
    html: 'src/index.html',
    // scss: ['src/**/*.css', 'src/**/*.scss'],
    scss: 'src/index.scss',
    ts: 'src/index.ts',
    js: 'src/index.js',
  },
  watch: {
    html: 'src/**/*.html',
    scss: ['src/**/*.css', 'src/**/*.scss'],
    ts: 'src/**/*.ts',
    js: 'src/**/*.js',
  },
  cleanDist: './dist/',
  cleanDeploy: './deploy/',
  deploy: 'deploy/',
  bundle: 'dist/index.html',
}

function browserSync(params) {
  browsersync.init({
    server: {
      baseDir: './dist/',
    },
    port: 8000,
    notify: false,
  })
}

function html() {
  return gulp
    .src(path.src.html)
    .pipe(
      fileinclude({
        prefix: '@@',
        basepath: '@file',
      })
    )
    .pipe(gulp.dest(path.build.html))
    .pipe(browsersync.stream())
}

function css() {
  return gulp
    .src(path.src.scss)
    .pipe(concat('index.css'))
    .pipe(cssimport())
    .pipe(sass())
    .pipe(
      autoprefixer({
        overrideBrowserlist: ['last 15 versions'],
        cascade: false,
      })
    )
    .pipe(group_media())
    .pipe(gulp.dest(path.build.css))
    .pipe(browsersync.stream())
}

function js() {
  return gulp
    .src(path.src.ts, path.src)

    .pipe(
      rollup(
        {
          plugins: [
            resolve(),
            commonjs(),
            rollupTypescript({ lib: ['es5', 'es6', 'dom'], target: 'es2017' }),
            babel(),
          ],
        },
        'umd'
      )
    )
    .pipe(concat('index.js'))
    .pipe(gulp.dest(path.build.js))
    .pipe(browsersync.stream())
}

function watchFiles() {
  gulp.watch([path.watch.html], html)
  gulp.watch(path.watch.scss, css)
  gulp.watch([path.watch.ts], js)
}

function bundle() {
  return gulp
    .src(path.bundle)
    .pipe(
      inlinesource({
        compress: false,
      })
    )
    .pipe(gulp.dest(path.deploy))
}

function cleanDist() {
  return del(path.cleanDist)
}

function cleanDeploy() {
  return del(path.cleanDeploy)
}

async function replaceFuncNames() {
  return gulp
    .src(path.deploy + '/index.html')
    .pipe(replace('Scripts', '<%= Scripts%>'))
    .pipe(gulp.dest(path.deploy))
}

async function deleteImport() {
  return gulp
    .src(path.src.ts)
    .pipe(replace('import Scripts', '//import Scripts'))
    .pipe(gulp.dest('src'))
}

async function returnImport() {
  return gulp
    .src(path.src.ts)
    .pipe(replace('//import Scripts', 'import Scripts'))
    .pipe(gulp.dest('src'))
}

const build = gulp.series(cleanDist, gulp.parallel(html, css, js))
const watch = gulp.parallel(build, watchFiles, browserSync)
const deploy = gulp.series(deleteImport, build, cleanDeploy, bundle, replaceFuncNames, returnImport)

exports.build = build
exports.deploy = deploy
exports.watch = watch
exports.default = watch
