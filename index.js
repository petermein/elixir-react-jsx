var Elixir = require('laravel-elixir');
var gulp = require('gulp');
var react = require('gulp-react');

var $ = Elixir.Plugins;

Elixir.extend("jsx", function (src, dest) {

    src = src || 'resources/assets/jsx/*.jsx';
    dest = dest || 'public/js';

    var paths = new Elixir.GulpPaths().src(src).output(dest);

    new Elixir.Task('jsx', function () {

        this.log(paths.src, paths.output);

        return gulp.
            src(paths.src.path)
            .pipe(react())
            .pipe($.if(!paths.output.isDir, $.rename(paths.output.name)))
            .pipe(gulp.dest(paths.output.baseDir))
            .pipe(new Elixir.Notification('React Compiled!'));
    })

        .watch(paths.src.path)


});
