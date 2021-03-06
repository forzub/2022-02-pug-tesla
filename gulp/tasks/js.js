import webpack from 'webpack-stream';


export const js = () => {
    return app.gulp.src(app.path.src.js, {})
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({ title: "JS", message: 'Error: <%= error.message %>'})
        ))
        //.pipe(app.plugins.replace(/@img\//g, 'img/'))
        // .pipe(webpack({
        //     mode: app.isBuild ? 'production' : 'development',
        //     output: {filename: 'app.min.js'}
        // }))
        .pipe(app.gulp.dest(app.path.build.js))
        .pipe(app.gulp.src(app.path.src.js_not_app))
        .pipe(app.gulp.dest(app.path.build.js))
        .pipe(app.plugins.browsersync.stream());
}